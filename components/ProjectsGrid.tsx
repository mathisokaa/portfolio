"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Pill from "./Pill";

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Tous">("Tous");

  const filtered = activeFilter === "Tous" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div role="group" aria-label="Filtrer les projets par catégorie" className="mb-8 flex flex-wrap gap-2">
        <Pill as="button" active={activeFilter === "Tous"} onClick={() => setActiveFilter("Tous")}>
          Tous
        </Pill>
        {projectCategories.map((cat) => (
          <Pill key={cat} as="button" active={activeFilter === cat} onClick={() => setActiveFilter(cat)}>
            {cat}
          </Pill>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
