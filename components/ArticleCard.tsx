import type { Article } from "@/data/articles";
import { articleCategoryColors } from "@/data/articles";
import { TagOutline } from "./Tag";

const colorMap: Record<string, string> = {
  primary: "#2277ff",
  accent: "#ff5c00",
  "primary-light": "#66aaff",
  "cat-monitoring": "#b44fff",
};

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const color = colorMap[articleCategoryColors[article.category]];

  if (featured) {
    return (
      <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
        <div
          className="relative flex h-[180px] items-center justify-center"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, #ff5c0020, #ff5c0020 2px, transparent 2px, transparent 12px)`,
          }}
        >
          <span className="absolute left-3 top-3 inline-flex items-center rounded-pill bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
            À la une
          </span>
          <span className="text-[13px] text-accent-light">Image article</span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <TagOutline color={color} className="mb-3">
              {article.category}
            </TagOutline>
            <h3 className="mb-2 text-[20px] font-bold leading-snug text-text">{article.title}</h3>
            <p className="text-[14px] leading-relaxed text-text-secondary">{article.description}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[12px] text-text-secondary">
              {article.date} · {article.readingTime} de lecture
            </span>
            <span className="text-[13px] font-bold tracking-[0.05em] text-accent">Lire →</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex items-center gap-3 rounded-lg border border-border bg-surface p-3">
      <div className="flex-1">
        <TagOutline color={color} className="mb-1">
          {article.category}
        </TagOutline>
        <h3 className="text-[14px] font-semibold leading-snug text-text">{article.title}</h3>
        <p className="mt-1 text-[11px] text-text-secondary">
          {article.date} · {article.readingTime}
        </p>
      </div>
      <span className="shrink-0 text-[16px] text-accent" aria-hidden="true">
        →
      </span>
    </article>
  );
}
