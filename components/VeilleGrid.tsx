"use client";

import { useState } from "react";
import { articles, articleCategories, type ArticleCategory } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import Pill from "./Pill";

export default function VeilleGrid() {
  const [activeFilter, setActiveFilter] = useState<ArticleCategory | "Tout">("Tout");

  const filtered = activeFilter === "Tout" ? articles : articles.filter((a) => a.category === activeFilter);
  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.slug !== featured?.slug);

  return (
    <div>
      <div role="group" aria-label="Filtrer les articles par catégorie" className="mb-8 flex flex-wrap gap-2">
        <Pill as="button" active={activeFilter === "Tout"} onClick={() => setActiveFilter("Tout")}>
          Tout
        </Pill>
        {articleCategories.map((cat) => (
          <Pill key={cat} as="button" active={activeFilter === cat} onClick={() => setActiveFilter(cat)}>
            {cat}
          </Pill>
        ))}
      </div>

      {featured ? (
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <ArticleCard article={featured} featured />
          <div className="flex flex-col gap-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-text-secondary">Aucun article dans cette catégorie pour le moment.</p>
      )}
    </div>
  );
}
