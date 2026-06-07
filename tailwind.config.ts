import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2239",
          deep: "#081A2D",
        },
        surface: {
          DEFAULT: "#102A45",
          raised: "#13314F",
        },
        ink: {
          DEFAULT: "#EAF2FB",
          muted: "#9FB3C8",
        },
        azure: "#1CA7EC",
        royal: "#2563EB",
        sky: "#38BDF8",
        light: {
          DEFAULT: "#F4F8FC",
        },
        hairline: "rgba(255,255,255,0.08)",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        glow: "0 0 90px -20px rgba(56,189,248,0.45)",
        "glow-sm": "0 0 50px -20px rgba(37,99,235,0.5)",
        card: "0 18px 50px -20px rgba(2,8,20,0.65)",
        window: "0 40px 120px -30px rgba(2,8,20,0.85)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
        "brand-gradient-br": "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(37,99,235,0.28) 0%, rgba(11,34,57,0) 70%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.06)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 7s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
