import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFE",
        grey: {
          100: "#EFF0F3", // Light Grey 1
          200: "#E4E5E9", // Light Grey 2
          400: "#C0C0C0", // Grey
          600: "#9A9494", // Dark Grey
          900: "#2B2C34", // Black
        },
        yellow: {
          500: "#FFC344",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        // Exact typography scale from design
        h1: ["64px", {
          lineHeight: "1.2",
          fontWeight: "700", // Bold
        }],
        "sub-h1": ["24px", {
          lineHeight: "1.2",
          fontWeight: "700", 
        }],
        "sub-h2": ["20px", {
          lineHeight: "1.2",
          fontWeight: "700", 
        }],
        p1: ["20px", {
          lineHeight: "1.5",
          fontWeight: "400", 
        }],
        p2: ["18px", {
          lineHeight: "1.5",
          fontWeight: "400", 
        }],
        p3: ["16px", {
          lineHeight: "1.5",
          fontWeight: "600", 
        }],
        p4: ["14px", {
          lineHeight: "1.5",
          fontWeight: "400", 
        }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;