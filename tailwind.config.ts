import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#4A90E2", // Soft Blue
          secondary: "#A2D4AB", // Muted Green
          "secondary-content": "#E3CDA4", // Warm Beige (as a tertiary color alternative)
          accent: "#FF6B6B", // Coral
          neutral: "#2B3440", // You can keep this as a standard dark color for neutral elements
          "neutral-content": "#D7DDE4", // A lighter shade for content on neutral background
          "base-100": "#F5F5F5", // Very Light Grey for Background
          "base-200": "#F2F2F2", // A slightly different shade of light grey
          "base-300": "#E5E6E6", // Another shade of light grey
          "base-content": "#333333", // Dark Grey for Text
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "color-scheme": "dark",
          primary: "#2E86C1", // Saturated Blue
          secondary: "#68A357", // Deeper Green
          "secondary-content": "#B8A398", // Darker Taupe (as a tertiary color alternative)
          accent: "#FFA07A", // Brighter Orange
          neutral: "#121212", // Very Dark Grey for Background
          "neutral-content": "#E0E0E0", // Light Grey for Text on Neutral Background
          "base-100": "#121212", // Very Dark Grey (almost black) for Background
          "base-200": "#1A1A1A", // A slightly different shade of dark grey
          "base-300": "#232323", // Another shade of dark grey
          "base-content": "#E0E0E0", // Light Grey for Text
        },
      },
    ],
  },
};
export default config;
