# Hero mic → live voice agent

The hero mic ([TalkWidget.tsx](../src/components/TalkWidget.tsx)) can open a live
WebRTC voice call with a VoxReception agent via the platform's embed voice mode.
The client lives in [src/lib/voice-agent.ts](../src/lib/voice-agent.ts) and speaks
the same protocol as VoxReception's official embed widget:

```
POST  {API}/vox-embed/voice/offer?agent_id&token&origin   {sdp,type} → {sdp,type,pc_id}
PATCH {API}/vox-embed/voice/offer?agent_id&token&origin   {pc_id,candidates[]}   (trickle ICE)
```

Audio is one sendrecv Opus track; transcripts and `session_end` arrive on a
client-created `"chat"` data channel. The backend runs the agent through
pipecat `SmallWebRTCTransport` + Gemini Live.

**The feature is env-gated.** Without `NEXT_PUBLIC_VOX_API_BASE`,
`NEXT_PUBLIC_VOX_AGENT_ID`, and `NEXT_PUBLIC_VOX_EMBED_TOKEN` (see
[.env.example](../.env.example)) the mic keeps its original behaviour and
routes to `/book-a-demo/`. The site is a static export, so the values are baked
in at build time — set them in Netlify env settings and redeploy.

## Enabling it (once backend env/credentials are available)

1. **Pick or create the demo agent** in the VoxReception dashboard — it must be a
   *chat* agent (`chat_agent_configs`), with `voiceConfig.enabled = true`
   (otherwise the offer endpoint returns 403). Give it the customer-care
   persona/first message you want the public to hear.
2. **Mint an embed token for this site's origin** — from the dashboard's Embed
   Tokens page (`POST /vox-embed-admin/tokens`) with
   `allowed_origins: ["https://customercare.om"]`. One active token per agent;
   default expiry 30 days; **not revocable before expiry**, so keep the origin
   list tight. Diarise the renewal — when the token expires the mic degrades to
   an error state, and a rebuild with a fresh token is required.
3. **Set the Netlify env vars** (`NEXT_PUBLIC_VOX_API_BASE`,
   `NEXT_PUBLIC_VOX_AGENT_ID`, `NEXT_PUBLIC_VOX_EMBED_TOKEN`) and trigger a
   deploy.

### Local testing

Run the VoxReception backend locally (`be` on :8000), mint a token whose
origins include `http://localhost:3000`, put the three vars in `.env.local`
with `NEXT_PUBLIC_VOX_API_BASE=http://localhost:8000`, and `npm run dev`.
Mic capture works on `http://localhost` (a secure context) without HTTPS.

## Operational notes

- The embed token is public by design (it ships in the page source, same as
  every customer embed); the secret stays server-side. Its only powers are
  scoped to this one agent + origin.
- The backend enforces **no duration or rate cap** on web voice sessions
  today; the widget self-limits to `NEXT_PUBLIC_VOX_MAX_CALL_SECONDS`
  (default 300 s) client-side, but that is courtesy, not enforcement —
  server-side limits are tracked in the voxreception repo.
- Default ICE is Google STUN only. If public visitors behind strict NAT fail
  to connect, set `NEXT_PUBLIC_VOX_ICE_SERVERS` with TURN credentials
  (metered.ca creds are already provisioned server-side in VoxReception).
- Every session writes to the platform's `chat_sessions`/analytics pipeline
  tagged `channel = "voice_widget"`, so demo calls show up in the dashboard.
