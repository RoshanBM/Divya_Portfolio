"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  InstagramLogo,
  ArrowUpRight,
  DownloadSimple,
  Eye,
} from "@phosphor-icons/react";
import { contact } from "@/lib/content";
import { Reveal, MagneticButton } from "./motion-primitives";

const channels = [
  { icon: EnvelopeSimple, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: LinkedinLogo, label: "LinkedIn", value: "divyashree-ns", href: contact.linkedin },
  { icon: InstagramLogo, label: "Instagram", value: contact.instagramHandle, href: contact.instagram },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-[family-name:var(--font-serif)] text-[18px] italic text-[var(--accent)]">
              Let&apos;s make something
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight text-[var(--ink)]">
              Get in touch
            </h2>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-[var(--muted)]">
              Open to brand, content, and campaign roles. The quickest way to
              reach me is email, but I am on the platforms below too.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="/divyashree-ns-resume.pdf" target="_blank" variant="primary">
                <Eye size={16} weight="bold" />
                View Resume
              </MagneticButton>
              <MagneticButton
                href="/divyashree-ns-resume.pdf"
                download
                variant="ghost"
              >
                <DownloadSimple size={16} weight="bold" />
                Download
              </MagneticButton>
              <MagneticButton
                href="https://drive.google.com/drive/folders/1DAa1XpxC8R0z4mt_paqAv_YVUHBa5iZe"
                target="_blank"
                variant="ghost"
              >
                <ArrowUpRight size={16} weight="bold" />
                View More Work
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="flex flex-col">
            {channels.map((c, i) => (
              <ContactRow key={c.label} {...c} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  index,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  index: number;
}) {
  const reduce = useReducedMotion();
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-cursor="link"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      whileHover="hover"
      className="group flex items-center justify-between gap-4 border-t py-6 transition-colors duration-300 last:border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-4">
        <motion.span
          variants={{ hover: { backgroundColor: "var(--accent)", color: "var(--bg)" } }}
          className="grid h-11 w-11 place-items-center rounded-full transition-colors duration-300"
          style={{ background: "var(--card-soft)", color: "var(--accent)" }}
        >
          <Icon size={20} weight="regular" />
        </motion.span>
        <div>
          <p className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            {label}
          </p>
          <p className="text-[16px] font-semibold text-[var(--ink)]">{value}</p>
        </div>
      </div>
      <motion.span
        variants={{ hover: { x: 4, y: -4, color: "var(--accent)" } }}
        className="text-[var(--muted)]"
      >
        <ArrowUpRight size={22} weight="bold" />
      </motion.span>
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <span
            className="grid h-7 w-7 place-items-center rounded-full text-[12px] font-bold text-[var(--bg)]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            D
          </span>
          <span className="text-[14px] font-semibold tracking-tight text-[var(--ink)]">
            Divyashree N S
          </span>
        </div>
        <p className="text-[13px] text-[var(--muted)]">
          {contact.location} · Designed and built in {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
