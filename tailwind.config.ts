import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "custom-gradient": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(6,23,101,1) 34%, rgba(14,51,156,1) 49%, rgba(6,59,161,1) 81%)",
      },
    },
  },
  plugins: [],
};
export default config;
