import { heroui } from "@heroui/react";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [heroui()],

  theme: {
    extend: {
      colors: {
        // HeroUI expects these token names
        primary: "rgb(var(--heroui-primary) / <alpha-value>)",
        secondary: "rgb(var(--heroui-secondary) / <alpha-value>)",
        success: "rgb(var(--heroui-success) / <alpha-value>)",
        warning: "rgb(var(--heroui-warning) / <alpha-value>)",
        danger: "rgb(var(--heroui-danger) / <alpha-value>)",
      },
    },
  },
};
