/**
 * Browser client for VoxReception's embed voice mode (WebRTC).
 *
 * Speaks the same wire protocol as the official embed widget
 * (be/vox_chat/static/embed/frame.v2.html in the voxreception repo):
 *
 *   POST  {apiBase}/vox-embed/voice/offer?agent_id&token&origin
 *         body {sdp, type}            → {sdp, type, pc_id}
 *   PATCH {apiBase}/vox-embed/voice/offer?agent_id&token&origin
 *         body {pc_id, candidates[]}  (trickle ICE)
 *
 * Audio flows over a single sendrecv Opus track; live transcripts and
 * session-end signals arrive on a client-created "chat" data channel.
 *
 * The module is configuration-gated: without the NEXT_PUBLIC_VOX_* env
 * vars (baked at build time — this site is a static export) the widget
 * keeps its current behaviour and none of this code runs.
 */

export type VoiceCallStatus = "idle" | "connecting" | "live" | "ended" | "error";

export type TranscriptRole = "user" | "assistant";

export interface VoiceAgentConfig {
  /** API origin, no trailing slash, e.g. https://api.example.com */
  apiBase: string;
  /** chat_agent_configs _id the embed token was minted for */
  agentId: string;
  /** Embed JWT whose origins claim includes this site's origin */
  token: string;
  iceServers: RTCIceServer[];
  /** Client-side cap; the backend enforces no duration limit on web voice */
  maxCallSeconds: number;
}

export interface VoiceSessionCallbacks {
  onStatus: (status: VoiceCallStatus, detail?: string) => void;
  onTranscript?: (role: TranscriptRole, text: string, final: boolean) => void;
}

const DEFAULT_ICE: RTCIceServer[] = [{ urls: "stun:stun.l.google.com:19302" }];
const DEFAULT_MAX_CALL_SECONDS = 300;
const CONNECT_TIMEOUT_MS = 20_000;

/**
 * Reads build-time configuration. Returns null when unconfigured, which
 * callers treat as "voice demo not available" (the mic falls back to the
 * book-a-demo page). Env vars must be referenced as full static literals
 * for Next.js to inline them into the export.
 */
export function getVoiceAgentConfig(): VoiceAgentConfig | null {
  const apiBase = process.env.NEXT_PUBLIC_VOX_API_BASE;
  const agentId = process.env.NEXT_PUBLIC_VOX_AGENT_ID;
  const token = process.env.NEXT_PUBLIC_VOX_EMBED_TOKEN;
  if (!apiBase || !agentId || !token) return null;

  let iceServers = DEFAULT_ICE;
  const iceJson = process.env.NEXT_PUBLIC_VOX_ICE_SERVERS;
  if (iceJson) {
    try {
      const parsed = JSON.parse(iceJson);
      if (Array.isArray(parsed) && parsed.length > 0) iceServers = parsed;
    } catch {
      // Malformed override — keep the STUN default rather than break the hero.
    }
  }

  const maxRaw = Number(process.env.NEXT_PUBLIC_VOX_MAX_CALL_SECONDS);
  const maxCallSeconds =
    Number.isFinite(maxRaw) && maxRaw > 0 ? maxRaw : DEFAULT_MAX_CALL_SECONDS;

  return {
    apiBase: apiBase.replace(/\/+$/, ""),
    agentId,
    token,
    iceServers,
    maxCallSeconds,
  };
}

interface IceCandidatePayload {
  candidate: string;
  sdp_mid: string | null;
  sdp_mline_index: number | null;
}

export class VoiceAgentSession {
  private pc: RTCPeerConnection | null = null;
  private dataChannel: RTCDataChannel | null = null;
  private micStream: MediaStream | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private pcId: string | null = null;
  private pendingCandidates: IceCandidatePayload[] = [];
  private connectTimer: ReturnType<typeof setTimeout> | null = null;
  private maxDurationTimer: ReturnType<typeof setTimeout> | null = null;
  private stopped = false;
  private streamingText = "";

  constructor(
    private config: VoiceAgentConfig,
    private callbacks: VoiceSessionCallbacks
  ) {}

  get active(): boolean {
    return this.pc !== null && !this.stopped;
  }

  async start(): Promise<void> {
    if (this.pc) return;
    this.stopped = false;
    this.callbacks.onStatus("connecting");

    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      this.callbacks.onStatus("error", "Microphone access was blocked");
      this.cleanup();
      return;
    }

    try {
      const pc = new RTCPeerConnection({ iceServers: this.config.iceServers });
      this.pc = pc;

      this.connectTimer = setTimeout(() => {
        if (this.pc && this.pc.connectionState !== "connected") {
          this.fail("Connection timed out");
        }
      }, CONNECT_TIMEOUT_MS);

      this.dataChannel = pc.createDataChannel("chat");
      this.dataChannel.onmessage = (event) => this.handleDataMessage(event.data);

      pc.ontrack = (event) => {
        const audio = new Audio();
        audio.autoplay = true;
        audio.srcObject = event.streams[0];
        this.audioEl = audio;
      };

      pc.onconnectionstatechange = () => {
        if (this.stopped) return;
        const state = pc.connectionState;
        if (state === "connected") {
          this.clearConnectTimer();
          this.callbacks.onStatus("live");
          this.maxDurationTimer = setTimeout(() => {
            this.stop("ended");
          }, this.config.maxCallSeconds * 1000);
        } else if (state === "failed") {
          this.fail("Connection lost");
        } else if (state === "disconnected" || state === "closed") {
          this.stop("ended");
        }
      };

      pc.onicecandidate = (event) => {
        if (!event.candidate) return;
        const payload: IceCandidatePayload = {
          candidate: event.candidate.candidate,
          sdp_mid: event.candidate.sdpMid,
          sdp_mline_index: event.candidate.sdpMLineIndex,
        };
        if (this.pcId) {
          void this.sendCandidates([payload]);
        } else {
          this.pendingCandidates.push(payload);
        }
      };

      const [audioTrack] = this.micStream.getAudioTracks();
      pc.addTransceiver(audioTrack, { direction: "sendrecv" });

      await pc.setLocalDescription(await pc.createOffer());

      const response = await fetch(this.signalUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sdp: pc.localDescription!.sdp,
          type: pc.localDescription!.type,
        }),
      });
      if (!response.ok) {
        throw new Error(
          response.status === 403
            ? "Voice is not enabled for this agent"
            : `Signaling failed (${response.status})`
        );
      }

      const answer = await response.json();
      this.pcId = answer.pc_id;
      await pc.setRemoteDescription(answer);

      const queued = this.pendingCandidates;
      this.pendingCandidates = [];
      if (queued.length > 0) await this.sendCandidates(queued);
    } catch (err) {
      this.fail(err instanceof Error ? err.message : "Could not connect");
    }
  }

  /** End the call. `finalStatus` distinguishes a clean end from an error. */
  stop(finalStatus: Extract<VoiceCallStatus, "ended" | "error"> = "ended", detail?: string): void {
    if (this.stopped) return;
    this.stopped = true;
    this.cleanup();
    this.callbacks.onStatus(finalStatus, detail);
  }

  private fail(detail: string): void {
    this.stop("error", detail);
  }

  private signalUrl(): string {
    const { apiBase, agentId, token } = this.config;
    const origin = window.location.origin;
    return (
      `${apiBase}/vox-embed/voice/offer` +
      `?agent_id=${encodeURIComponent(agentId)}` +
      `&token=${encodeURIComponent(token)}` +
      `&origin=${encodeURIComponent(origin)}`
    );
  }

  private async sendCandidates(candidates: IceCandidatePayload[]): Promise<void> {
    if (!this.pcId) return;
    try {
      await fetch(this.signalUrl(), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pc_id: this.pcId, candidates }),
      });
    } catch {
      // Trickle-ICE delivery is best-effort; the connection either
      // completes with the candidates already exchanged or times out.
    }
  }

  private handleDataMessage(raw: string): void {
    let data: { type?: string; role?: string; content?: string; token?: string };
    try {
      data = JSON.parse(raw);
    } catch {
      return;
    }
    const emit = this.callbacks.onTranscript;
    switch (data.type) {
      case "transcript":
        emit?.((data.role as TranscriptRole) || "assistant", data.content || "", true);
        break;
      case "transcript_start":
        if (data.role !== "user") this.streamingText = "";
        break;
      case "transcript_chunk":
        this.streamingText += data.token || "";
        emit?.("assistant", this.streamingText, false);
        break;
      case "transcript_end":
        if (this.streamingText) emit?.("assistant", this.streamingText, true);
        this.streamingText = "";
        break;
      case "session_end":
        this.stop("ended");
        break;
    }
  }

  private clearConnectTimer(): void {
    if (this.connectTimer) {
      clearTimeout(this.connectTimer);
      this.connectTimer = null;
    }
  }

  private cleanup(): void {
    this.clearConnectTimer();
    if (this.maxDurationTimer) {
      clearTimeout(this.maxDurationTimer);
      this.maxDurationTimer = null;
    }
    if (this.dataChannel) {
      this.dataChannel.onmessage = null;
      try {
        this.dataChannel.close();
      } catch {}
      this.dataChannel = null;
    }
    if (this.pc) {
      this.pc.onicecandidate = null;
      this.pc.ontrack = null;
      this.pc.onconnectionstatechange = null;
      try {
        this.pc.close();
      } catch {}
      this.pc = null;
    }
    if (this.micStream) {
      this.micStream.getTracks().forEach((t) => t.stop());
      this.micStream = null;
    }
    if (this.audioEl) {
      this.audioEl.srcObject = null;
      this.audioEl = null;
    }
    this.pcId = null;
    this.pendingCandidates = [];
    this.streamingText = "";
  }
}
