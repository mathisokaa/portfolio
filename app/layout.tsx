import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { bebasNeue, spaceGrotesk, fraunces } from "@/lib/fonts";
import Nav from "@/components/Nav";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prénom Nom — Administrateur Systèmes & Réseaux",
    template: "%s",
  },
  description:
    "Portfolio de Prénom Nom, Administrateur Systèmes & Réseaux : projets d'infrastructure, sécurité, supervision et veille technologique.",
  openGraph: {
    title: "Prénom Nom — Administrateur Systèmes & Réseaux",
    description:
      "Portfolio de Prénom Nom, Administrateur Systèmes & Réseaux : projets d'infrastructure, sécurité, supervision et veille technologique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-body text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
