"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

type CursorMode = "default" | "view" | "hello" | "link" | "button";

export function Cursor() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring lags slightly behind the dot for a premium trailing feel.
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on fine pointers (skip touch).
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        frame.current = null;
      });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest<HTMLElement>("[data-cursor]");
      if (interactive) {
        setMode((interactive.dataset.cursor as CursorMode) || "link");
      } else if (target.closest("a, button")) {
        setMode("link");
      } else {
        setMode("default");
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", enter);
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", enter);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [x, y, visible]);

  if (!enabled || reduce) return null;

  const isLabel = mode === "view" || mode === "hello";
  const filled = mode === "button" || mode === "link";

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && !isLabel ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          width: isLabel ? 64 : filled ? 44 : 34,
          height: isLabel ? 64 : filled ? 44 : 34,
          backgroundColor: filled || isLabel ? "var(--accent)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26, bounce: 0 }}
      >
        {mode === "view" && <span>View</span>}
        {mode === "hello" && <span>Hello</span>}
      </motion.div>
    </>
  );
}
