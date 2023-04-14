import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': {
          '300': '#334756',
          '400': '#2C394B',
          '500': '#082032',
          '600': '#171717',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
