import type { Project } from "@/data/projects";
import Tag from "./Tag";

const colorMap: Record<Project["color"], string> = {
  primary: "#2277ff",
  accent: "#ff5c00",
  "primary-light": "#66aaff",
  "accent-light": "#ff8c44",
  "cat-reseau": "#00aaff",
  "cat-monitoring": "#b44fff",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const color = colorMap[project.color];

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
      <div
        className="relative flex h-[140px] items-center justify-center border-b border-border"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${color}18, ${color}18 2px, transparent 2px, transparent 12px)`,
        }}
      >
        <Tag color={color} className="absolute left-3 top-3">
          {project.category}
        </Tag>
        <span className="text-[13px] font-medium" style={{ color: `${color}99` }}>
          Schéma / Capture
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="mb-1.5 text-[17px] font-bold leading-snug text-text">{project.title}</h3>
          <p className="mb-3 text-[13px] leading-relaxed text-text-secondary">{project.description}</p>
        </div>
        <div>
          <p className="mb-2 text-[12px] font-semibold" style={{ color }}>
            {project.tech}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-bold tracking-[0.05em] text-accent">Voir détail →</span>
            <div className="flex gap-1" aria-hidden="true">
              <span className="h-[6px] w-[6px] rounded-full bg-led" style={{ boxShadow: "0 0 4px #00ff88" }} />
              <span className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 4px ${color}` }} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
