import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "bg-red-300": "rgb(252 165 165)",
      },
      colors: {
        main: "#ffffff",
        green: "#1BB234",
        bggreen: "#CCFF90",
        footerbg: "#323232",
        grayCus: "#9E9E9E",
        red: "#CD355D",
        bg: "#F6F6F6",
        gray: "#667085",
        grayModal: "#D0D5DD",
        pcolor: "#667085",
        introcolor: "#F6F6F6",
        errorclr: "#fee2e2",
        featurescolor: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
