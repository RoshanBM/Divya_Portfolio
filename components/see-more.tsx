"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Reveal } from "./motion-primitives";

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1DAa1XpxC8R0z4mt_paqAv_YVUHBa5iZe?usp=sharing";

export function SeeMore() {
  const reduce = useReducedMotion();

  return (
    <section id="see-more" className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <div
          className="flex flex-col items-center gap-6 rounded-[24px] px-6 py-16 text-center md:px-10 md:py-20"
          style={{
            background: "var(--card-soft)",
            border: "1px solid var(--border)",
            boxShadow: "0 24px 60px rgb(var(--shadow-tint) / 0.10)",
          }}
        >
          <p className="font-[family-name:var(--font-serif)] text-[16px] italic text-[var(--accent)]">
            There&apos;s more
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]">
            See More Work
          </h2>
          <p className="max-w-[46ch] text-[15.5px] leading-relaxed text-[var(--muted)]">
            A fuller archive of campaigns, shoots, edits, and creative work — explore
            the complete portfolio in one place.
          </p>

          <motion.a
            href={DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            initial={false}
            whileHover={
              reduce
                ? undefined
                : {
                    y: -4,
                    backgroundColor: "var(--bg)",
                    color: "var(--accent)",
                    boxShadow: "0 18px 40px rgb(var(--shadow-tint) / 0.26)",
                  }
            }
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: 20, bounce: 0 }}
            className="mt-2 inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-[15px] font-semibold tracking-tight"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              borderColor: "var(--accent)",
              boxShadow: "0 10px 26px rgb(var(--shadow-tint) / 0.16)",
            }}
          >
            View Full Portfolio
            <ArrowUpRight size={18} weight="bold" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
