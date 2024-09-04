const config = {
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
  plugins: [require("@catppuccin/tailwindcss")],
};

module.exports = config;
