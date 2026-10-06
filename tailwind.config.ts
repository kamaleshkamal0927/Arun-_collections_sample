import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FCFBF8",
          100: "#F7F3EB",
          200: "#EFE6D7",
          300: "#E2D3BC",
          DEFAULT: "#F7F3EB",
        },
        antique: {
          gold: "#C69C4B",
          goldLight: "#DFB76C",
          goldDark: "#946E2A",
          brass: "#A87932",
          brassDeep: "#7B541E",
        },
        temple: {
          red: "#8B2628",
          crimson: "#6A1A1C",
          kumkum: "#A82025",
          sand: "#EBDCC4",
        },
        heritage: {
          charcoal: "#1C1815",
          espresso: "#291E16",
          bronze: "#543D2B",
          muted: "#6B5E55",
          cream: "#FFFDF9",
        }
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Playfair Display", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'antique': '0 10px 30px -10px rgba(44, 29, 17, 0.15)',
        'divine': '0 0 35px rgba(198, 156, 75, 0.25)',
        'card': '0 4px 20px rgba(35, 23, 14, 0.06)',
      }
    },
  },
  plugins: [],
};
export default config;
