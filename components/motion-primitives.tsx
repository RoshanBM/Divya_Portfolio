"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- Scroll reveal (stagger-friendly) ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ---------- Magnetic button ---------- */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  cursor = "button",
  className = "",
  download,
  target,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  cursor?: string;
  className?: string;
  download?: boolean;
  target?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 250, damping: 18, mass: 0.4 });
  const y = useSpring(my, { stiffness: 250, damping: 18, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * 0.3);
    my.set(relY * 0.35);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[15px] font-semibold tracking-tight transition-[background-color,color,box-shadow] duration-300 active:scale-[0.96] will-change-transform";

  const styles =
    variant === "primary"
      ? "text-[var(--bg)]"
      : "text-[var(--ink)] border border-[var(--border)]";

  const Inner = (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x, y }}
      className="inline-block will-change-transform"
    >
      <motion.span
        whileHover={
          variant === "primary"
            ? {
                boxShadow:
                  "0 12px 30px rgb(var(--shadow-tint) / 0.28), 0 3px 8px rgb(var(--shadow-tint) / 0.2)",
              }
            : {
                boxShadow: "0 8px 22px rgb(var(--shadow-tint) / 0.14)",
              }
        }
        transition={{ type: "spring", stiffness: 200, damping: 20, bounce: 0 }}
        className={`${base} ${styles} ${className}`}
        style={
          variant === "primary"
            ? { backgroundColor: "var(--accent)" }
            : { backgroundColor: "transparent" }
        }
        data-cursor={cursor}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="inline-block"
        data-cursor={cursor}
      >
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="inline-block" data-cursor={cursor}>
      {Inner}
    </button>
  );
}
