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
      colors: {
        "strong-cyan": "#26c0ab",
        "dark-cyan": "#00494d",
        "dark-grayish-cyan": "#5e7a7d",
        "grayish-cyan": "	#7f9c9f",
        "light-grayish-cyan": "#c5e4e7",
        "very-light-grayish-cyan": "#f4fafa",
      },
    },
  },
  plugins: [],
};
export default config;
