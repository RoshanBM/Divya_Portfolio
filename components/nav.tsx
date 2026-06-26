"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { WallSwitch } from "./wall-switch";

const links = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // IntersectionObserver sentinel avoids scroll listeners entirely.
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;height:8px;width:1px;";
    document.body.prepend(sentinel);
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => {
      io.disconnect();
      sentinel.remove();
    };
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 transition-[background-color,box-shadow] duration-500 md:px-8"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg) 88%, transparent)"
            : "transparent",
          boxShadow: scrolled
            ? "0 1px 0 0 rgb(var(--shadow-tint) / 0.08), 0 10px 30px rgb(var(--shadow-tint) / 0.06)"
            : "none",
        }}
      >
        <a
          href="#top"
          data-cursor="link"
          className="group flex items-center gap-2 text-[15px] font-bold tracking-tight"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-full text-[13px] font-bold text-[var(--bg)]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            D
          </span>
          <span className="link-underline hidden sm:inline">Divyashree N S</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="link"
              className="link-underline text-[14px] font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/divyashree-ns-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            className="hidden rounded-full px-5 py-2 text-[14px] font-semibold text-[var(--bg)] transition-transform duration-300 active:scale-[0.96] sm:inline-block"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Resume
          </a>
          <WallSwitch />
          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor="button"
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[var(--ink)] transition-colors hover:bg-[var(--card-soft)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/divyashree-ns-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg px-3 py-2.5 text-center text-[15px] font-semibold text-[var(--bg)]"
                style={{ backgroundColor: "var(--accent)" }}
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
