import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueprint: {
          DEFAULT: "#1B4D6B",
          light: "#2E7FB8",
          dark: "#123449",
        },
        graphite: {
          DEFAULT: "#2B2F33",
          light: "#4A5057",
          dark: "#1A1D20",
        },
        signal: {
          DEFAULT: "#E8622C",
          light: "#F2895A",
          dark: "#C24E20",
        },
        surface: {
          DEFAULT: "#F0F1F2",
          dark: "#1E2124",
        },
        canvas: {
          DEFAULT: "#FAFAF8",
          dark: "#121416",
        },
        ink: {
          DEFAULT: "#14171A",
          dark: "#EDEFF1",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(46,127,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(46,127,184,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
