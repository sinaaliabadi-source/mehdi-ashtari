import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A1224",
          800: "#0F1A33",
          700: "#14203D"
        },
        accent: {
          500: "#fbbf24",
          600: "#f59e0b"
        },
        surface: {
          800: "#111A2F",
          900: "#0C1326"
        }
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        card: "0 15px 40px rgba(0, 0, 0, 0.25)",
        glow: "0 0 0 1px rgba(251, 191, 36, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
