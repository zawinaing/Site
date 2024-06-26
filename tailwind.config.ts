import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        small: { max: "1400px" },
      },
      colors: {
        "site-red": "rgba(var(--color-red) / <alpha-value>)",
        "site-red-hover": "rgba(var(--color-red) / <alpha-value>)",
        "site-red-active": "rgba(var(--color-red) / <alpha-value>)",
        "site-yellow": "rgba(var(--color-yellow) / <alpha-value>)",
        "site-yellow-hover": "rgba(var(--color-yellow) / <alpha-value>)",
        "site-yellow-active": "rgba(var(--color-yellow) / <alpha-value>)",
        "site-blue": "rgba(var(--color-blue) / <alpha-value>)",
        "site-blue-hover": "rgba(var(--color-blue) / <alpha-value>)",
        "site-blue-active": "rgba(var(--color-blue) / <alpha-value>)",
        name: "rgba(var(--color-name) / <alpha-value>)",
      },
      fontFamily: {
        adelle: ["adelle", "san-serif"],
        poppins: ["poppins", "san-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addVariant, e } : any) {
       addVariant("not-last", ({ modifySelectors, separator } : any) => {
          modifySelectors(({ className } : any) => {
             return `.${e(`not-last${separator}${className}`)}:not(:last-child)`;
          });
       });
    },
 ],
};
export default config;
