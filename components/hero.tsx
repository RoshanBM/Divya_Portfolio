"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { MagneticButton } from "./motion-primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-center px-5 pb-16 pt-28 md:px-8 md:pt-24"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {/* Left: type block */}
        <div className="lg:col-span-8">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mb-5 flex items-center gap-3 text-[14px] font-medium tracking-tight text-[var(--muted)]"
          >
            <span
              className="inline-block h-[1px] w-9"
              style={{ background: "var(--muted)" }}
            />
            Divyashree N S
          </motion.p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,8vw,6.3rem)] font-bold leading-[0.95] tracking-tight text-[var(--accent)]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" {...line(0.18)}>
                Creative
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" {...line(0.28)}>
                Marketing
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" {...line(0.38)}>
                Strategist
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="ml-1 mt-3 font-[family-name:var(--font-serif)] text-[15px] font-light italic text-[var(--muted)]"
          >
            portfolio
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="mt-7 max-w-[46ch] text-[16px] leading-relaxed text-[var(--muted)] md:text-[17px]"
          >
            Crafting campaigns, creating stories, and shaping brand identities
            through strategy-led content and creative execution.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.82 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work" variant="primary">
              View Work
            </MagneticButton>
            <MagneticButton
              href="/divyashree-ns-resume.pdf"
              target="_blank"
              variant="ghost"
            >
              Resume
              <ArrowUpRight size={16} weight="bold" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="lg:col-span-4"
        >
          <PortraitSlot />
        </motion.div>
      </div>

      {/* scroll affordance */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-14 hidden md:block"
      >
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--muted)]"
        >
          <ArrowDown size={20} weight="regular" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function PortraitSlot() {
  return (
    <div
      data-cursor="button"
      className="group relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[20px]"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 24px 60px rgb(var(--shadow-tint) / 0.16)",
      }}
    >
      <img
        src="/me.jpg"
        alt="Divyashree N S"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* corner accent */}
      <span
        className="pointer-events-none absolute bottom-3 right-3 h-2 w-2 rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}
