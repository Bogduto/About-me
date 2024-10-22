import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'mobile': "320px",
      'mobileM': "375px",
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        "white": "#F2F2F2",
        "white-hover": "#A6A6A6",
        "white-active" : "#D9D9D9",
        'white-skeleton': '#3f3f3f',
        "black": "#010101",
        "black-hover": "#4A4A4A",
        "black-active": "#6D6D6D",
        'black-skeleton': '#e0e0e0',
        "ichigo": "#ff3399"
      },
    },
  },
  plugins: [],
};
export default config;
