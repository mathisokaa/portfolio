export type ProjectCategory = "Réseau" | "Système" | "Monitoring" | "Sécurité" | "Cloud";

export type ProjectColor = "primary" | "accent" | "primary-light" | "accent-light" | "cat-reseau" | "cat-monitoring";

export interface Project {
  slug: string;
  title: string;
  tech: string;
  category: ProjectCategory;
  description: string;
  color: ProjectColor;
}

export const projects: Project[] = [
  {
    slug: "infrastructure-reseau-ecole",
    title: "Infrastructure réseau école",
    tech: "Cisco · VLAN · OSPF · ACL",
    category: "Réseau",
    description: "Conception et déploiement d'une infra LAN segmentée pour 200 postes.",
    color: "primary",
  },
  {
    slug: "serveur-ad-dns-dhcp",
    title: "Serveur AD / DNS / DHCP",
    tech: "Windows Server 2022 · GPO",
    category: "Système",
    description: "Mise en place d'un Active Directory avec stratégies de groupe.",
    color: "accent",
  },
  {
    slug: "supervision-zabbix",
    title: "Supervision Zabbix",
    tech: "SNMP · Grafana · Alerting",
    category: "Monitoring",
    description: "Déploiement d'une solution de monitoring réseau temps réel.",
    color: "primary-light",
  },
  {
    slug: "vpn-site-a-site-ipsec",
    title: "VPN Site-à-site IPSec",
    tech: "pfSense · IKEv2 · OpenVPN",
    category: "Sécurité",
    description: "Interconnexion sécurisée de deux sites distants via tunnel IPSec.",
    color: "accent-light",
  },
  {
    slug: "virtualisation-vmware",
    title: "Virtualisation VMware",
    tech: "ESXi · vSphere · Snapshots",
    category: "Cloud",
    description: "Environnement virtualisé avec 8 VMs en production.",
    color: "cat-reseau",
  },
  {
    slug: "durcissement-linux",
    title: "Durcissement Linux",
    tech: "Iptables · Fail2ban · SSH",
    category: "Sécurité",
    description: "Hardening d'un serveur Debian exposé en DMZ.",
    color: "cat-monitoring",
  },
];

export const projectCategories: ProjectCategory[] = ["Réseau", "Système", "Sécurité", "Monitoring", "Cloud"];
