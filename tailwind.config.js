module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      maxWidth: {
        250: "250px",
        275: "275px",
        300: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
