"use client";

import { useEffect, useRef, useState } from "react";
import RackSVG from "./RackSVG";
import Terminal from "./Terminal";
import Button from "./Button";
import StatBlock from "./StatBlock";
import { profile } from "@/data/profile";

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.14);
  const [scrollStoryEnabled, setScrollStoryEnabled] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateEnabled = () => {
      setScrollStoryEnabled(desktopQuery.matches && !reducedMotionQuery.matches);
    };

    updateEnabled();
    reducedMotionQuery.addEventListener("change", updateEnabled);
    desktopQuery.addEventListener("change", updateEnabled);
    return () => {
      reducedMotionQuery.removeEventListener("change", updateEnabled);
      desktopQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!scrollStoryEnabled) {
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    let listening = false;
    let ticking = false;

    const computeProgress = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const scrolled = -rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !listening) {
          window.addEventListener("scroll", onScroll, { passive: true });
          listening = true;
          computeProgress();
        } else if (!entry.isIntersecting && listening) {
          window.removeEventListener("scroll", onScroll);
          listening = false;
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (listening) window.removeEventListener("scroll", onScroll);
    };
  }, [scrollStoryEnabled]);

  const effectiveProgress = scrollStoryEnabled ? progress : 1;
  const fill = Math.min(1, effectiveProgress * 1.3 + 0.12);
  const active = profile.heroSections.reduce(
    (acc, s) => (effectiveProgress >= s.pct ? s : acc),
    profile.heroSections[0],
  );

  return (
    <div ref={sectionRef} className="relative" style={{ height: scrollStoryEnabled ? "260vh" : "auto" }}>
      <div className={scrollStoryEnabled ? "sticky top-0 h-screen overflow-hidden" : "relative"}>
        <div className="grid h-full gap-8 px-4 pt-[88px] pb-6 sm:px-6 lg:grid-cols-[1fr_300px_1fr] lg:items-center lg:gap-6 lg:px-10">
          {/* RACK — first on mobile */}
          <div className="order-1 flex flex-col items-center justify-center gap-3 lg:order-2">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,92,0,0.16) 0%, transparent 68%)" }}
                aria-hidden="true"
              />
              <RackSVG fill={fill} />
            </div>
            <p className="text-micro font-semibold uppercase text-text-secondary">Baie 12U — Salle serveurs</p>
            <div className="flex gap-1.5" aria-hidden="true">
              {profile.heroSections.map((s, i) => (
                <span
                  key={i}
                  className="h-[4px] rounded-full transition-all"
                  style={{
                    width: effectiveProgress >= (i / profile.heroSections.length) * 0.9 ? 18 : 6,
                    backgroundColor: effectiveProgress >= (i / profile.heroSections.length) * 0.9 ? "#ff5c00" : "rgba(255,255,255,0.07)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* LEFT — title & sections */}
          <div className="order-2 flex flex-col justify-between gap-8 lg:order-1 lg:gap-0">
            <div>
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1">
                <span className="h-[6px] w-[6px] rounded-full bg-accent" style={{ boxShadow: "0 0 5px #ff5c00" }} aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent">{active.tag}</span>
              </span>
              <h1 className="mb-3 font-display text-display uppercase text-text">
                {active.title}
                <br />
                <span className="text-stroke">L&apos;INFRA</span>
              </h1>
              <p className="mb-5 max-w-xs font-accent text-accent-italic italic text-text-secondary">{active.italic}</p>
              <ul className="mb-6 flex flex-col gap-2">
                {profile.heroSections.map((s, i) => (
                  <li key={i} className="flex items-center gap-2.5" style={{ opacity: effectiveProgress >= s.pct ? 1 : 0.25 }}>
                    <span
                      className="h-[2px] rounded-full transition-all"
                      style={{ width: effectiveProgress >= s.pct ? 18 : 8, backgroundColor: effectiveProgress >= s.pct ? "#ff5c00" : "rgba(255,255,255,0.12)" }}
                    />
                    <span className={`text-[13px] text-text ${effectiveProgress >= s.pct ? "font-semibold" : ""}`}>{s.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-6 border-t border-border pt-4">
              {profile.stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          {/* RIGHT — profile / terminal / cta */}
          <div className="order-3 flex flex-col justify-between gap-8 lg:gap-0">
            <div>
              <p className="mb-3 text-micro font-bold uppercase text-text-secondary">— Profil</p>
              <div className="mb-4">
                <p className="mb-1.5 text-micro font-bold uppercase text-text-secondary">— Terminal en direct</p>
                <Terminal fill={fill} compact />
              </div>
              <dl className="flex flex-col gap-2.5">
                {profile.infoCards.map((c) => (
                  <div key={c.label} className="border-b border-border pb-1.5">
                    <dt className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">{c.label}</dt>
                    <dd className="text-[15px] font-semibold text-text">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/projets" variant="primary">
                Voir projets →
              </Button>
              <Button href="/cv.pdf" variant="secondary">
                CV PDF ↓
              </Button>
            </div>
          </div>
        </div>

        {scrollStoryEnabled && (
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-surface" aria-hidden="true">
            <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${effectiveProgress * 100}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}
