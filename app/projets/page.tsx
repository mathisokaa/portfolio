import type { Metadata } from "next";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projets",
  description: "Réalisations techniques en réseau, système, sécurité, monitoring et cloud.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg px-4 pt-[100px] pb-16 sm:px-6 lg:px-10">
      <BackgroundBlobs />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-baseline gap-3">
          <h1 className="font-display text-h1 uppercase text-text">Projets</h1>
          <p className="font-accent text-accent-italic italic text-text-secondary">réalisations techniques</p>
          <p className="ml-auto text-[13px] text-text-secondary">{projects.length} projets</p>
        </div>
        <ProjectsGrid />
      </div>
    </div>
  );
}
