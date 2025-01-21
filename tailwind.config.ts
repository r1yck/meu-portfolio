import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212121", 
        backgroundFooter: "#292C36", 
        button: "#558FFF",
        textWhite: "#FFFFFF", 
        textBlue: "#4C70EF",
        textGray: "#B0ADAD",
        backgroundCard: "#D9D9D9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
