export type ArticleCategory = "Sécurité" | "Réseau" | "Cloud" | "IA & Ops";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  readingTime: string;
  date: string;
  featured: boolean;
  description: string;
}

export const articles: Article[] = [
  {
    slug: "zero-trust-architecture-entreprise",
    title: "Zero Trust Architecture en entreprise",
    category: "Sécurité",
    readingTime: "4 min",
    date: "Mai 2026",
    featured: true,
    description: "Passage d'un modèle périmétrique à un modèle Zero Trust : retour d'expérience.",
  },
  {
    slug: "ipv6-migration-entreprise",
    title: "IPv6 : migration en environnement d'entreprise",
    category: "Réseau",
    readingTime: "6 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
  {
    slug: "kubernetes-pour-sysadmin-reseau",
    title: "Kubernetes pour les SysAdmin réseau",
    category: "Cloud",
    readingTime: "8 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
  {
    slug: "sd-wan-vs-mpls-2025",
    title: "SD-WAN vs MPLS : analyse comparative 2025",
    category: "Réseau",
    readingTime: "5 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
  {
    slug: "hardening-serveur-linux-dmz",
    title: "Hardening d'un serveur Linux en DMZ",
    category: "Sécurité",
    readingTime: "7 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
  {
    slug: "bgp-guide-pratique",
    title: "BGP pour les nuls : guide pratique",
    category: "Réseau",
    readingTime: "10 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
  {
    slug: "siem-soc-wazuh",
    title: "SIEM & SOC : mise en place Wazuh",
    category: "Sécurité",
    readingTime: "9 min",
    date: "Mai 2026",
    featured: false,
    description: "",
  },
];

export const articleCategories: ArticleCategory[] = ["Sécurité", "Réseau", "Cloud", "IA & Ops"];

export const articleCategoryColors: Record<ArticleCategory, string> = {
  Sécurité: "accent",
  Réseau: "primary",
  Cloud: "primary-light",
  "IA & Ops": "cat-monitoring",
};
