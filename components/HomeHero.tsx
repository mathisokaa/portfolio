"use client";

import { useEffect, useRef, useState } from "react";
import RackSVG from "./RackSVG";
import Terminal from "./Terminal";
import Button from "./Button";
import StatBlock from "./StatBlock";
import { profile } from "@/data/profile";

const ZOOM = 1.9;
const INTRO_END = 0.14;

export default function HomeHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
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
  const introT = Math.min(1, effectiveProgress / INTRO_END);
  const scale = scrollStoryEnabled ? 1 + introT * (ZOOM - 1) : 1;
  const panT = scrollStoryEnabled ? Math.max(0, (effectiveProgress - INTRO_END) / (1 - INTRO_END)) : 0;
  const windowHeight = windowRef.current?.clientHeight ?? 0;
  const panRange = (scale - 1) * windowHeight;
  const translateY = -panT * panRange;

  const active = profile.heroSections.reduce(
    (acc, s) => (effectiveProgress >= s.pct ? s : acc),
    profile.heroSections[0],
  );

  return (
    <>
      <div ref={sectionRef} className="relative" style={{ height: scrollStoryEnabled ? "420vh" : "auto" }}>
        <div className={scrollStoryEnabled ? "sticky top-0 h-screen overflow-hidden" : "relative pt-[88px]"}>
          <div className="flex h-full flex-col items-center justify-center gap-6 px-4 sm:px-6">
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface px-3 py-1">
              <span className="h-[6px] w-[6px] rounded-full bg-accent" style={{ boxShadow: "0 0 5px #ff5c00" }} aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent">{active.tag}</span>
            </span>

            <div
              ref={windowRef}
              className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface/40"
              style={{
                height: "min(54vh, 480px)",
                aspectRatio: "168 / 220",
                boxShadow: "0 0 40px rgba(255,92,0,0.12)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,92,0,0.18) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-x-0 top-0 flex h-full w-full justify-center"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: "top center",
                  transition: scrollStoryEnabled ? "none" : "transform 0.6s ease-out",
                  willChange: "transform",
                }}
              >
                <RackSVG fill={effectiveProgress} style={{ height: "100%", width: "auto", maxWidth: "none" }} />
              </div>
            </div>

            <div className="relative h-[110px] w-full max-w-md text-center sm:h-[96px]">
              {profile.heroSections.map((s, i) => {
                const next = profile.heroSections[i + 1];
                const isActive = effectiveProgress >= s.pct && (!next || effectiveProgress < next.pct);
                return (
                  <div
                    key={s.tag}
                    className="absolute inset-0 flex flex-col items-center justify-start gap-2 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                    aria-hidden={!isActive}
                  >
                    <h1 className="font-display text-display uppercase text-text">
                      {s.title} <span className="text-stroke">L&apos;INFRA</span>
                    </h1>
                    <p className="max-w-xs font-accent text-accent-italic italic text-text-secondary">{s.italic}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-1.5" aria-hidden="true">
              {profile.heroSections.map((s, i) => (
                <span
                  key={i}
                  className="h-[4px] rounded-full transition-all"
                  style={{
                    width: effectiveProgress >= s.pct ? 18 : 6,
                    backgroundColor: effectiveProgress >= s.pct ? "#ff5c00" : "rgba(255,255,255,0.07)",
                  }}
                />
              ))}
            </div>
          </div>

          {scrollStoryEnabled && (
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-surface" aria-hidden="true">
              <div className="h-full rounded-full bg-accent transition-[width]" style={{ width: `${effectiveProgress * 100}%` }} />
            </div>
          )}
        </div>
      </div>

      <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="mb-1.5 text-micro font-bold uppercase text-text-secondary">— Terminal en direct</p>
            <Terminal fill={1} />
            <div className="mt-6 flex gap-6 border-t border-border pt-4">
              {profile.stats.map((s) => (
                <StatBlock key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-3 text-micro font-bold uppercase text-text-secondary">— Profil</p>
              <dl className="flex flex-col gap-2.5">
                {profile.infoCards.map((c) => (
                  <div key={c.label} className="border-b border-border pb-1.5">
                    <dt className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">{c.label}</dt>
                    <dd className="text-[15px] font-semibold text-text">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/projets" variant="primary">
                Voir projets →
              </Button>
              <Button href="/cv.pdf" variant="secondary">
                CV PDF ↓
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
