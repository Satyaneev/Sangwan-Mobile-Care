import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0d14",
          secondary: "#0f1523",
          surface: "#151d30",
          elevated: "#1d2740",
          border: "rgba(255, 255, 255, 0.08)",
          accent: "#3b82f6",
          cyan: "#06b6d4",
          whatsapp: "#25d366",
        },
      },
    },
  },
  plugins: [],
};
export default config;
