"use client";

import { motion, useReducedMotion } from "motion/react";
import { skills } from "@/lib/content";
import { Reveal, staggerParent, staggerChild } from "./motion-primitives";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t py-24 md:py-32"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]">
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          <SkillRow label="Creative" items={skills.creative} />
          <SkillRow label="Tools" items={skills.tools} />
          <SkillRow label="Languages" items={skills.languages} />
        </div>
      </div>
    </section>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-1 gap-4 border-t pt-8 md:grid-cols-12" style={{ borderColor: "var(--border)" }}>
      <div className="md:col-span-3">
        <p className="font-[family-name:var(--font-serif)] text-[20px] italic text-[var(--accent)]">
          {label}
        </p>
      </div>
      <motion.div
        variants={reduce ? undefined : staggerParent}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-2.5 md:col-span-9"
      >
        {items.map((item) => (
          <motion.span
            key={item}
            variants={reduce ? undefined : staggerChild}
            data-cursor="button"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, bounce: 0 }}
            className="rounded-full border px-4 py-2 text-[14.5px] font-medium text-[var(--ink)] transition-colors duration-300 hover:border-transparent hover:bg-[var(--accent)] hover:text-[var(--bg)]"
            style={{ borderColor: "var(--border)", background: "var(--bg)" }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
