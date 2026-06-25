"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, Certificate, Sparkle } from "@phosphor-icons/react";
import { experience, education, certifications, leadership } from "@/lib/content";
import { Reveal } from "./motion-primitives";

/* ---------- Experience timeline ---------- */
export function Experience() {
  return (
    <section
      id="experience"
      className="border-t py-24 md:py-32"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]">
            Experience
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2" />
          <div className="relative lg:col-span-10">
            {/* vertical line */}
            <span
              className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px md:block"
              style={{ background: "var(--border)" }}
            />
            <div className="flex flex-col gap-12">
              {experience.map((job, i) => (
                <TimelineItem key={`${job.company}-${i}`} index={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-[family-name:var(--font-display)] text-[24px] font-semibold tracking-tight text-[var(--ink)]">
                      {job.company}
                    </h3>
                    <span className="tnum text-[14px] font-medium text-[var(--muted)]">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 font-[family-name:var(--font-serif)] text-[16px] italic text-[var(--accent)]">
                    {job.role}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--muted)]"
                      >
                        <span
                          className="mt-[9px] inline-block h-[5px] w-[5px] shrink-0 rounded-full"
                          style={{ background: "var(--accent)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="group relative md:pl-12"
    >
      {/* node */}
      <motion.span
        className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full md:grid md:place-items-center"
        style={{ background: "var(--bg)", border: "2px solid var(--accent)" }}
        whileHover={{ scale: 1.25 }}
      >
        <motion.span
          className="block h-[5px] w-[5px] rounded-full"
          style={{ background: "var(--accent)" }}
          animate={
            reduce
              ? {}
              : { boxShadow: ["0 0 0 0 var(--accent)", "0 0 8px 2px var(--accent)", "0 0 0 0 var(--accent)"] }
          }
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.span>
      {children}
    </motion.div>
  );
}

/* ---------- Education + Certifications + Leadership ---------- */
export function Education() {
  return (
    <section id="education" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]">
          Education
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Degree card — large */}
        <Reveal className="lg:col-span-7">
          <ElevateCard className="flex h-full flex-col justify-between p-8 md:p-10">
            <GraduationCap size={32} weight="light" style={{ color: "var(--accent)" }} />
            <div className="mt-10">
              <p className="tnum text-[14px] font-medium text-[var(--muted)]">
                {education.period}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[26px] font-semibold leading-tight tracking-tight text-[var(--ink)] md:text-[30px]">
                {education.school}
              </h3>
              <p className="mt-2 text-[16px] text-[var(--muted)]">{education.degree}</p>
              <p className="mt-1 text-[14px] text-[var(--muted)]">{education.location}</p>
            </div>
          </ElevateCard>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={0.06} className="lg:col-span-5">
          <ElevateCard className="flex h-full flex-col p-8 md:p-10">
            <Certificate size={32} weight="light" style={{ color: "var(--accent)" }} />
            <h3 className="mt-10 font-[family-name:var(--font-display)] text-[22px] font-semibold tracking-tight text-[var(--ink)]">
              Certifications
            </h3>
            <ul className="mt-5 flex flex-col divide-y" style={{ borderColor: "var(--border)" }}>
              {certifications.map((c) => (
                <li key={c.name} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[15px] font-medium text-[var(--ink)]">{c.name}</span>
                  <span className="text-[13px] text-[var(--muted)]">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </ElevateCard>
        </Reveal>
      </div>

      {/* Leadership row */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.06}>
            <ElevateCard className="flex h-full flex-col p-7">
              <Sparkle size={24} weight="light" style={{ color: "var(--accent)" }} />
              <h4 className="mt-6 font-[family-name:var(--font-display)] text-[18px] font-semibold leading-snug tracking-tight text-[var(--ink)]">
                {l.title}
              </h4>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-[14px] italic text-[var(--accent)]">
                {l.org}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--muted)]">{l.note}</p>
            </ElevateCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ElevateCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20, bounce: 0 }}
      className={`rounded-[18px] ${className}`}
      style={{
        background: "var(--card-soft)",
        border: "1px solid var(--border)",
        boxShadow: "0 14px 40px rgb(var(--shadow-tint) / 0.10)",
      }}
    >
      {children}
    </motion.div>
  );
}
