export const profile = {
  firstName: "Prénom",
  lastName: "Nom",
  handle: "ADMIN.SYS",
  role: "Administrateur Systèmes & Réseaux",
  email: "contact@mathismegnan.fr",
  linkedin: "linkedin.com/in/mathis-megnan",
  github: "github.com/mathisokaa",
  formation: "BTS SIO SISR — 2026",
  stack: "Cisco · VMware · pfSense",
  availability: "Juin 2026",
  availabilityNote: "Disponible — Juin 2026",
  availabilityShort: "Dispo · Juin 2026 ✓",
  stats: [
    { value: "2+", label: "Ans exp." },
    { value: "6", label: "Projets" },
    { value: "2", label: "Certifs" },
  ],
  heroSections: [
    {
      pct: 0,
      title: "CONSTRUIRE",
      italic: "l'infrastructure de demain",
      tag: "Administrateur Sys. & Réseaux",
    },
    {
      pct: 0.28,
      title: "SÉCURISER",
      italic: "les accès et périmètres",
      tag: "Firewall · VPN · pfSense",
    },
    {
      pct: 0.56,
      title: "ADMINISTRER",
      italic: "les services du SI",
      tag: "AD · DNS · DHCP · Linux",
    },
    {
      pct: 0.84,
      title: "SUPERVISER",
      italic: "en temps réel",
      tag: "Zabbix · SNMP · Grafana",
    },
  ],
  infoCards: [
    { label: "Formation", value: "BTS SIO SISR — 2026" },
    { label: "Stack", value: "Cisco · VMware · pfSense" },
    { label: "Dispo", value: "Juin 2026 ✓" },
  ],
  contactIntro:
    "Disponible pour une alternance, un stage ou un premier poste en administration système & réseaux.",
};

export type Profile = typeof profile;
