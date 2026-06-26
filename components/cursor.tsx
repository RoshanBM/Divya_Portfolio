"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function Cursor() {
  const reduce = useReducedMotion();
  const [filled, setFilled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Dot tracks the pointer 1:1; the ring follows with very subtle easing.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.28 });
  const ringY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.28 });

  useEffect(() => {
    // Only enable on fine pointers (skip touch).
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let raf = 0;
    let nextX = -100;
    let nextY = -100;
    let nextFilled = false;
    let curFilled = false;
    let shown = false;

    const flush = () => {
      raf = 0;
      x.set(nextX);
      y.set(nextY);
      // Only touch React state when the hover state actually changes.
      if (nextFilled !== curFilled) {
        curFilled = nextFilled;
        setFilled(nextFilled);
      }
      if (!shown) {
        shown = true;
        setVisible(true);
      }
    };

    const move = (e: PointerEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      const target = e.target as HTMLElement;
      nextFilled = !!target.closest("[data-cursor], a, button");
      if (!raf) raf = requestAnimationFrame(flush);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerenter", enter);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerenter", enter);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [x, y]);

  if (!enabled || reduce) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          width: filled ? 44 : 34,
          height: filled ? 44 : 34,
          backgroundColor: filled ? "var(--accent)" : "rgba(0,0,0,0)",
        }}
        transition={{
          opacity: { duration: 0.12 },
          width: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
          backgroundColor: { duration: 0.12 },
        }}
      />
    </>
  );
}
