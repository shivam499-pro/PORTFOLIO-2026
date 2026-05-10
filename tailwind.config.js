/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#630ed4",
          container: "#7c3aed",
          fixed: "#eaddff",
          "fixed-dim": "#d2bbff",
        },
        secondary: {
          DEFAULT: "#00687a",
          container: "#57dffe",
          fixed: "#acedff",
        },
        tertiary: {
          DEFAULT: "#9b005c",
          container: "#bf2076",
          fixed: "#ffd9e4",
        },
        background: "#f7f9fb",
        surface: {
          DEFAULT: "#f7f9fb",
          bright: "#f7f9fb",
          dim: "#d8dadc",
          variant: "#e0e3e5",
          container: {
            DEFAULT: "#eceef0",
            low: "#f2f4f6",
            high: "#e6e8ea",
            highest: "#e0e3e5",
            lowest: "#ffffff",
          }
        },
        outline: {
          DEFAULT: "#7b7487",
          variant: "#ccc3d8",
        },
        "on-background": "#191c1e",
        "on-surface": "#191c1e",
        "on-surface-variant": "#4a4455",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'bento-gap': '20px',
        'container-max': '1200px',
      }
    },
  },
  plugins: [],
}
