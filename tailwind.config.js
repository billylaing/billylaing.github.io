import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: [
    "./*.{html,js,ts,tsx,jsx}",
    "./src/*.{html,js,ts,tsx,jsx}",
    "./src/**/*.{html,js,ts,tsx,jsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [catppuccin],
};
