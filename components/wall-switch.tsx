"use client";

import { useRef, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./theme-provider";

export function WallSwitch() {
  const { theme, toggle } = useTheme();
  const reduce = useReducedMotion();
  const audioCtxRef = useRef<AudioContext | null>(null);

  const isDark = theme === "dark";

  const playClick = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const Ctx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      // Short two-stage transient: a soft "tick" then a lower "tock".
      const now = ctx.currentTime;
      const mk = (freq: number, t: number, dur: number, gainPeak: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(freq, now + t);
        gain.gain.setValueAtTime(0.0001, now + t);
        gain.gain.exponentialRampToValueAtTime(gainPeak, now + t + 0.004);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + t + dur);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + t);
        osc.stop(now + t + dur + 0.02);
      };
      mk(2100, 0, 0.03, 0.07);
      mk(820, 0.045, 0.05, 0.05);
    } catch {
      // Audio is a nicety; ignore failures (autoplay policies, etc.)
    }
  }, []);

  const handle = () => {
    playClick();
    toggle();
  };

  return (
    <button
      onClick={handle}
      data-cursor="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="group relative grid h-[58px] w-[40px] place-items-center rounded-[11px] p-[5px] transition-transform duration-300 active:scale-[0.96]"
      style={{
        background: "var(--switch-plate)",
        border: "1px solid var(--border)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.18), 0 6px 16px rgb(var(--shadow-tint) / 0.16), 0 1px 2px rgb(var(--shadow-tint) / 0.2)",
      }}
    >
      {/* mounting screws */}
      <span className="pointer-events-none absolute left-1/2 top-[3px] h-[3px] w-[3px] -translate-x-1/2 rounded-full opacity-40" style={{ background: "var(--muted)" }} />
      <span className="pointer-events-none absolute bottom-[3px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full opacity-40" style={{ background: "var(--muted)" }} />

      {/* rocker track */}
      <span
        className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[7px]"
        style={{
          background:
            "linear-gradient(180deg, rgb(var(--shadow-tint) / 0.10), rgb(var(--shadow-tint) / 0.02))",
          boxShadow: "inset 0 2px 5px rgb(var(--shadow-tint) / 0.22)",
        }}
      >
        {/* the toggle paddle */}
        <motion.span
          className="absolute left-[3px] right-[3px] h-[22px] rounded-[5px]"
          style={{
            background: "var(--switch-toggle)",
            boxShadow:
              "0 2px 5px rgb(var(--shadow-tint) / 0.28), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 3px rgb(var(--shadow-tint) / 0.12)",
          }}
          animate={{ top: isDark ? "calc(100% - 25px)" : "3px" }}
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 700, damping: 26, bounce: 0.35 }
          }
          whileHover={{ x: isDark ? -1 : 1 }}
        >
          {/* paddle ridge */}
          <span
            className="absolute left-1/2 top-1/2 h-[1px] w-[16px] -translate-x-1/2 -translate-y-1/2 opacity-30"
            style={{ background: "var(--muted)" }}
          />
        </motion.span>

        {/* glow indicator when on (dark mode) */}
        <motion.span
          aria-hidden
          className="absolute left-1/2 top-[7px] h-[6px] w-[6px] -translate-x-1/2 rounded-full"
          style={{ background: "var(--accent)" }}
          animate={{
            opacity: isDark ? 0.9 : 0.15,
            boxShadow: isDark
              ? "0 0 10px 2px var(--accent)"
              : "0 0 0px 0px var(--accent)",
          }}
          transition={{ duration: 0.4 }}
        />
      </span>
    </button>
  );
}
