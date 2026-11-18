import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#090b10", panel: "#10141d", line: "#222a38", accent: "#78a9ff" }, fontFamily: { sans: ["Arial", "sans-serif"] } } },
  plugins: []
};
export default config;
