import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        'roll': {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(90deg)' },
        },
        'roll-reverse': {
          '0%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        'hold': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
    animation: {
      'roll': 'roll 500ms infinite linear, hold 500ms infinite',
      'roll-reverse': 'roll-reverse 500ms infinite linear, hold 500ms ',
      'hold': 'hold 500ms infinite linear',
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
  plugins: [
    plugin(function({matchUtilities, theme}) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
    plugin(function({matchUtilities, theme}) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
  ],
};
export default config;
