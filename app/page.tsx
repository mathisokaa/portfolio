import type { Metadata } from "next";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "Accueil",
};

export default function HomePage() {
  return (
    <div className="relative bg-bg">
      <BackgroundBlobs />
      <HomeHero />
    </div>
  );
}
