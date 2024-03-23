import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "space": "#241e2c",
      "ground": "#2e1928",
      "countdown": "#2c2c44",
      "countdown-desc": "#817d94",
      "countdown-drop": "#191923",
      "countdown-timer": "#fc6085",
    },
  },
  plugins: [],
};
export default config;
