"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects, type Project } from "@/lib/content";
import { Reveal } from "./motion-primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4.4rem)] font-bold leading-[0.98] tracking-tight text-[var(--ink)]">
            Selected work
          </h2>
          <p className="max-w-[44ch] text-[15px] leading-relaxed text-[var(--muted)]">
            Executed campaigns across F&B, fashion retail, and lifestyle brands through
            content strategy, art direction, ad execution, and visual storytelling.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <CaseStudy key={project.slug} project={project} index={i} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function CaseStudy({
  project,
  index,
  flip,
}: {
  project: Project;
  index: number;
  flip: boolean;
}) {
  const hero = project.images[0];
  const rest = project.images.slice(1, 4);

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      {/* Text column */}
      <div
        className={`flex flex-col justify-center lg:col-span-4 ${
          flip ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="font-[family-name:var(--font-serif)] text-[15px] italic text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-tight text-[var(--ink)]">
            {project.title}
          </h3>

          <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--muted)]">
            {project.blurb}
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {project.contribution.map((c) => (
              <li key={c} className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--ink)]">
                <span
                  className="mt-[9px] inline-block h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-medium text-[var(--muted)]">
            {project.client} · {project.year}
          </p>
        </Reveal>
      </div>

      {/* Image column */}
      <div className={`lg:col-span-8 ${flip ? "lg:order-1" : "lg:order-2"}`}>
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {/* Hero image spans both columns */}
          <div className="col-span-2">
            <ZoomImage
              src={hero.src}
              alt={hero.alt}
              priority={index === 0}
              aspect={
                hero.ratio === "wide"
                  ? "aspect-[16/9]"
                  : hero.ratio === "square"
                    ? "aspect-[4/3]"
                    : "aspect-[16/10]"
              }
            />
          </div>
          {rest.map((img) => {
            const fullRow = img.ratio === "wide";
            return (
              <div key={img.src} className={fullRow ? "col-span-2" : "col-span-2 md:col-span-1"}>
                <ZoomImage
                  src={img.src}
                  alt={img.alt}
                  aspect={
                    fullRow
                      ? "aspect-[16/7]"
                      : img.ratio === "square"
                        ? "aspect-square"
                        : "aspect-[4/5]"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function ZoomImage({
  src,
  alt,
  aspect,
  priority,
}: {
  src: string;
  alt: string;
  aspect: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-cursor="view"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 22, bounce: 0 }}
      className={`group img-outline relative ${aspect} w-full overflow-hidden rounded-[14px]`}
      style={{ boxShadow: "0 18px 44px rgb(var(--shadow-tint) / 0.14)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 55vw"
        priority={priority}
        className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
      />
    </motion.div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      data-cursor="button"
      className="rounded-full border px-3 py-1 text-[12.5px] font-medium text-[var(--ink)] transition-colors duration-300 hover:border-transparent hover:bg-[var(--accent)] hover:text-[var(--bg)]"
      style={{ borderColor: "var(--border)" }}
    >
      {children}
    </span>
  );
}

export { ZoomImage };
