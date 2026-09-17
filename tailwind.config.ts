import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3525cd",
          container: "#4f46e5",
          fixed: "#e2dfff",
          "fixed-dim": "#c3c0ff",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#dad7ff",
          fixed: "#0f0069",
          "fixed-variant": "#3323cc",
        },
        secondary: {
          DEFAULT: "#0058be",
          container: "#2170e4",
          fixed: "#d8e2ff",
          "fixed-dim": "#adc6ff",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#fefcff",
          fixed: "#001a42",
          "fixed-variant": "#004395",
        },
        tertiary: {
          DEFAULT: "#005338",
          container: "#006e4b",
          fixed: "#6ffbbe",
          "fixed-dim": "#4edea3",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#67f4b7",
          fixed: "#002113",
          "fixed-variant": "#005236",
        },
        surface: {
          DEFAULT: "#faf8ff",
          bright: "#faf8ff",
          dim: "#d2d9f4",
          variant: "#dae2fd",
          container: {
            DEFAULT: "#eaedff",
            lowest: "#ffffff",
            low: "#f2f3ff",
            high: "#e2e7ff",
            highest: "#dae2fd",
          },
        },
        "on-surface": {
          DEFAULT: "#131b2e",
          variant: "#464555",
        },
        outline: {
          DEFAULT: "#777587",
          variant: "#c7c4d8",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "on-error": {
          DEFAULT: "#ffffff",
          container: "#93000a",
        },
        background: "#faf8ff",
        "on-background": "#131b2e",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        "touch-target": "2.75rem",
        "card-gap": "0.75rem",
        "viewport-mobile": "390px",
        "card-padding": "1rem",
        "edge-gutter": "1rem",
        "section-gap": "1.5rem",
        "bottom-nav-height": "4.5rem",
        "top-bar-height": "3.5rem",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "display-metric": ["Plus Jakarta Sans", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "tabular-metric": ["Inter", "sans-serif"],
        "tabular-stat": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
