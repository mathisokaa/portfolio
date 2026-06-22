"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, socialLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import Pill from "./Pill";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border bg-nav-bg backdrop-blur-2xl">
      <nav aria-label="Navigation principale" className="flex items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span
            className="h-[8px] w-[8px] rounded-full bg-accent"
            style={{ boxShadow: "0 0 6px #ff5c00" }}
            aria-hidden="true"
          />
          <span className="font-display text-base tracking-[0.2em] text-text">{profile.handle}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Pill key={item.href} as="div" active={pathname === item.href} className="p-0">
              <Link href={item.href} className="block px-[11px] py-[5px]">
                {item.label}
              </Link>
            </Pill>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              title={s.title}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-surface text-[10px] font-bold text-text-secondary hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"
            >
              {s.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-md text-text md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"
        >
          <span className="relative block h-[14px] w-[20px]">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-text transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[6px] h-[2px] w-full bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-full bg-text transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-nav-bg px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`min-h-[44px] rounded-md px-3 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] ${
                  pathname === item.href ? "bg-accent text-white" : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[44px] flex-1 items-center justify-center rounded-md bg-surface text-[11px] font-bold text-text-secondary"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
