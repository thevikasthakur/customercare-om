"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Mic } from "lucide-react";

/**
 * Interactive hero widget: a square stage filled with a dot field that
 * reacts to the pointer, a slowly rotating blurred ring, and a circular
 * "Talk to AI Customer Care" mic button with springy hover/press states.
 * Canvas rendering is DPR-aware and respects prefers-reduced-motion.
 */
export default function TalkWidget() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovering, setHovering] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const GAP = 22; // dot pitch in CSS px
    const BASE_R = 1.1; // resting dot radius
    const NEAR = 130; // pointer influence radius
    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    let dpr = 1;
    // pointer position in CSS px, off-stage by default
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.hypot(cx, cy);
      const cols = Math.ceil(w / GAP);
      const rows = Math.ceil(h / GAP);
      const time = t / 1000;

      for (let ix = 0; ix <= cols; ix++) {
        for (let iy = 0; iy <= rows; iy++) {
          const x = ix * GAP + ((iy % 2) * GAP) / 2; // offset alternate rows
          const y = iy * GAP;
          const dCenter = Math.hypot(x - cx, y - cy);
          // radial falloff: dots fade toward the stage edges
          const edgeFade = Math.max(0, 1 - dCenter / (maxDist * 0.92));
          if (edgeFade <= 0.02) continue;

          // gentle idle breathing wave rippling outward from the centre
          const breathe = reduceMotion
            ? 0
            : 0.25 * Math.sin(time * 1.4 - dCenter / 46);

          // pointer proximity boost
          const dPointer = Math.hypot(x - pointer.x, y - pointer.y);
          const near = Math.max(0, 1 - dPointer / NEAR);
          const boost = near * near; // sharper easing near the cursor

          const r = BASE_R * (1 + breathe * 0.4) + boost * 2.6;
          const alpha = edgeFade * (0.16 + 0.1 * breathe + 0.7 * boost);

          // ink-white dots that tint lime as the pointer approaches
          const lime = boost > 0.05;
          ctx.fillStyle = lime
            ? `rgba(212, 255, 79, ${Math.min(alpha + 0.08, 0.95)})`
            : `rgba(244, 244, 240, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduceMotion) {
        // static mode still re-renders once per movement
        draw(performance.now());
      }
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      if (reduceMotion) draw(performance.now());
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(performance.now());
    });
    ro.observe(stage);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    if (reduceMotion) {
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="talk-stage relative aspect-square w-full max-w-[34rem] mx-auto select-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />

      {/* mic button with its aura ring anchored concentrically */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className="relative grid h-[33%] w-[33%] place-items-center">
          <div
            className={`talk-ring absolute left-1/2 top-1/2 rounded-full ${
              hovering ? "talk-ring-hot" : ""
            }`}
            aria-hidden
          />
          <button
            type="button"
            aria-label="Talk to AI Customer Care, try a live call demo"
            onClick={() => router.push("/book-a-demo/")}
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            className="talk-btn relative z-10 grid h-full w-full place-items-center rounded-full"
          >
            <span className="talk-btn-inner absolute rounded-full" aria-hidden />
            <Mic
              className="relative z-10 h-[26%] w-[26%] text-neutral-800 drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]"
              strokeWidth={2.2}
              aria-hidden
            />
          </button>
        </div>
        <span className="talk-label z-10 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-ink-2/80 px-4.5 py-2 backdrop-blur-md">
          <span className="talk-status-dot h-[7px] w-[7px] rounded-full bg-lime" aria-hidden />
          <span className="font-mono text-[13px] tracking-[0.01em] text-foreground">
            Talk to AI Customer Care
          </span>
        </span>
      </div>
    </div>
  );
}
