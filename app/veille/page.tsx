import type { Metadata } from "next";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import VeilleGrid from "@/components/VeilleGrid";

export const metadata: Metadata = {
  title: "Veille technologique",
  description: "Articles de veille technologique : sécurité, réseau, cloud et IA & ops.",
};

export default function VeillePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg px-4 pt-[100px] pb-16 sm:px-6 lg:px-10">
      <BackgroundBlobs variant="reversed" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-baseline gap-3">
          <h1 className="font-display text-h1 uppercase text-text">Veille</h1>
          <p className="font-accent text-accent-italic italic text-text-secondary">technologique</p>
        </div>
        <VeilleGrid />
      </div>
    </div>
  );
}
