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
      },
    },
  },
  plugins: [],
} satisfies Config;
