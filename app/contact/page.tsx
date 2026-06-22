import type { Metadata } from "next";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Disponible pour une alternance, un stage ou un premier poste en administration système & réseaux.",
};

const contactLinks = [
  { label: "Email direct", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: `https://${profile.linkedin}` },
  { label: "GitHub", value: profile.github, href: `https://${profile.github}` },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg px-4 pt-[100px] pb-16 sm:px-6 lg:px-10">
      <BackgroundBlobs />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <h1 className="mb-4 font-display text-display uppercase text-text">
              TRAVAILLONS
              <br />
              <span className="text-accent">ENSEMBLE</span>
            </h1>
            <p className="mb-6 max-w-sm font-accent text-accent-italic italic text-text-secondary">{profile.contactIntro}</p>

            <div className="mb-8 flex flex-col gap-2.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email direct" ? undefined : "_blank"}
                  rel={link.label === "Email direct" ? undefined : "noopener noreferrer"}
                  className="flex min-h-[44px] items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-light"
                >
                  <div>
                    <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-secondary">{link.label}</p>
                    <p className="text-[15px] font-medium text-text">{link.value}</p>
                  </div>
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div
              className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-accent"
              style={{ boxShadow: "0 0 20px rgba(255,92,0,0.3)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.12) 1px, transparent 1px, transparent 8px)",
                }}
                aria-hidden="true"
              />
              {/* TODO: remplacer par la photo portrait réelle */}
              <span className="relative px-2 text-center text-[11px] leading-tight text-text-secondary">
                Photo
                <br />
                portrait
              </span>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-surface px-4 py-3">
              <span className="h-[9px] w-[9px] rounded-full bg-success" style={{ boxShadow: "0 0 8px #22c55e" }} aria-hidden="true" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.05em] text-text">{profile.availabilityNote}</span>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <ContactForm />
      </div>
    </div>
  );
}
