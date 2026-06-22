import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000d66",
        "bg-alt": "#00094d",
        "bg-terminal": "#020d1a",
        accent: "#ff5c00",
        "accent-light": "#ff8c44",
        primary: "#2277ff",
        "primary-light": "#66aaff",
        led: "#00ff88",
        "led-off": "#071535",
        success: "#22c55e",
        "cat-securite": "#ff5c00",
        "cat-reseau": "#00aaff",
        "cat-monitoring": "#b44fff",
        text: "#ffffff",
        "text-secondary": "rgba(255,255,255,0.52)",
        "text-faint": "rgba(255,255,255,0.10)",
        surface: "rgba(255,255,255,0.07)",
        "surface-hover": "rgba(255,255,255,0.12)",
        border: "rgba(255,255,255,0.12)",
        "nav-bg": "rgba(0,8,90,0.65)",
        "rack-body": "#040d26",
        "rack-border": "#1a3a8a",
        "rack-ear": "#0a1a50",
        "term-bg": "#020d1a",
        "term-text": "#00e5ff",
        "term-prompt": "#ff5c00",
        "term-output": "rgba(0,229,255,0.5)",
        "term-border": "rgba(0,229,255,0.18)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        accent: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 2rem + 3vw, 4.6rem)", { lineHeight: "0.87" }],
        h1: ["clamp(2.25rem, 1.7rem + 2.4vw, 3.6rem)", { lineHeight: "0.9" }],
        h2: ["clamp(1.5rem, 1.2rem + 1.4vw, 2rem)", { lineHeight: "1" }],
        "accent-italic": ["clamp(0.9rem, 0.8rem + 0.3vw, 1rem)", { lineHeight: "1.65" }],
        body: ["0.9375rem", { lineHeight: "1.6" }],
        label: ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
        micro: ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
        term: ["0.8125rem", { lineHeight: "1.7" }],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "7px",
        lg: "10px",
        xl: "16px",
        pill: "100px",
      },
      spacing: {
        "space-1": "3px",
        "space-2": "4px",
        "space-4": "6px",
        "space-6": "8px",
        "space-7": "10px",
        "space-9": "14px",
        "space-10": "16px",
        "space-14": "24px",
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(255,92,0,0.44)",
        "glow-led": "0 0 8px rgba(0,255,136,0.6)",
        "glow-primary": "0 0 20px rgba(34,119,255,0.4)",
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
