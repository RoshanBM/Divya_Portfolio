"use client";

import { motion, useReducedMotion } from "motion/react";
import { whatIDo } from "@/lib/content";
import { Reveal, staggerParent, staggerChild } from "./motion-primitives";

/* ---------- Marquee (single use on the page) ---------- */
export function Marquee() {
  const words = [
    "Creative Direction",
    "Brand Campaigns",
    "Content Strategy",
    "Influencer Marketing",
    "Shoot Planning",
    "Ad Campaigns",
    "Editing",
  ];
  const row = [...words, ...words];
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y py-5"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-[family-name:var(--font-display)] text-[26px] font-medium text-[var(--ink)] md:text-[34px]">
              {w}
            </span>
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-[var(--ink)]">
              About
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <Reveal delay={0.05}>
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.4vw,2.7rem)] font-medium leading-[1.18] tracking-tight text-[var(--ink)]">
              I turn briefs into brands people remember. From the first mood board
              to the final cut, I build campaigns that earn attention and hold it.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[60ch] text-[16px] leading-relaxed text-[var(--muted)] md:text-[17px]">
              I aspire to work with diverse brands, building meaningful communication
              strategies that help both the brand and its audience grow, while turning
              creative ideas into measurable sales.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- What I Do ---------- */
export function WhatIDo() {
  const reduce = useReducedMotion();
  return (
    <section
      id="what-i-do"
      className="border-t py-24 md:py-32"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.02] tracking-tight text-[var(--ink)]">
            What I do
          </h2>
        </Reveal>

        <motion.div
          variants={reduce ? undefined : staggerParent}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] sm:grid-cols-2 lg:grid-cols-3"
          style={{ background: "var(--border)" }}
        >
          {whatIDo.map((item, i) => (
            <motion.div
              key={item.title}
              variants={reduce ? undefined : staggerChild}
              data-cursor="button"
              className="group relative flex min-h-[200px] flex-col justify-between p-7 transition-colors duration-500"
              style={{ background: "var(--bg)" }}
              whileHover={{ backgroundColor: "var(--card-soft)" }}
            >
              <span className="font-[family-name:var(--font-serif)] text-[15px] italic text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[22px] font-semibold tracking-tight text-[var(--ink)] transition-transform duration-500 group-hover:-translate-y-1">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
