import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#08090B",
          900: "#0D0F12",
          800: "#14171C",
          700: "#1D2027",
          600: "#2A2E37",
          500: "#3A3F4B",
        },
        ink: {
          100: "#F3F4F6",
          300: "#C6C9D1",
          500: "#8B909C",
          700: "#575B66",
        },
        signal: {
          DEFAULT: "#5E77FF",
          dim: "#3D4EAE",
          amber: "#F0A63A",
          red: "#F0553A",
          green: "#3ACF83",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(94,119,255,0.4), 0 0 40px -8px rgba(94,119,255,0.5)",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        scanline: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        scanline: "scanline 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
