import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medownhere: "var(--font-just-me-again-down-here)",
      },
      colors: {
        myblack: "rgb(19, 25, 35)",
        myred: "rgb(122, 84, 121)",
        mygreen: "rgb(60, 161, 137)",
        metal: {
          25: "#f9fafb",
          50: "#f0f3f9",
          100: "#e9eff6",
          200: "#d7dfe9",
          300: "#afbaca",
          400: "#8897ae",
          500: "#5e718d",
          600: "#455468",
          700: "#3d4a5c",
          800: "#2d3643",
          900: "#1c222b",
        },
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
