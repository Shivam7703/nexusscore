import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
        green2: '#748EFF',
        green1: "#0D29AD",
        brown2:"#08131F",
        yellow3:"#EAB308"
      },
    },
  },
  plugins: [],
};

export default config;
