import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        degrade:
          "linear-gradient(90deg, #DEE0FC 0%, #996DFF 50%, #BC9FFF 100%)",
      },
      colors: {
        purple: {
          normal: "#8860E6",
          dark: "#5B409B",
        },
        gray: {
          dark: "#202024",
          light: "#F3F4FE",
        },
        success: {
          DEFAULT: "#04D361",
        },
        danger: {
          DEFAULT: "#FF8F8F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
