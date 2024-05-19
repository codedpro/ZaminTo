import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  backgroundImage: {
    banner: "url('/houses/searchBG.jpg')",
  },
  plugins: [],
  darkMode: 'class',

};
export default config;
