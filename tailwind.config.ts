import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: "#0f9d58",
        brandBlue: "#4285f4",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
