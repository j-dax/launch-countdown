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
      keyframes: {
        'wiggle': {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
        'fall': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(90deg)' },
        },
      },
    },
    animation: {
      'wiggle': 'wiggle 500ms linear infinite',
      'fall': 'fall 500ms linear infinite',
    },
    colors: {
      "space": "#241e2c",
      "ground": "#2e1928",
      "cd-top": "#2c2c44",
      "cd-top-text": "#d35070",
      "cd-bottom": "#323651",
      "cd-bottom-text": "#fa5e85",
      "cd-drop": "#1a1921"
    },
  },
  plugins: [],
};
export default config;
