import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)", "Poppins", "ui-sans-serif"],
      grotesk: ["var(--font-grotesk)", "Poppins", "ui-sans-serif"],
      lato: ["var(--font-lato)", "Poppins", "ui-sans-serif"],
      roboto: ["var(--font-roboto)", "Poppins", "ui-sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        chips: {
          "success-100": "#E5FAD5",
          "success-600": "#21851F",
          "warning-100": "#FEF8CC",
          "warning-600": "#D8A501",
          "danger-100": "#FDE3D4",
          "danger-500": "#DB2E2B",
          "neutral-100": "#F8F8F8",
          "neutral-300": "#B8B8B8",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
