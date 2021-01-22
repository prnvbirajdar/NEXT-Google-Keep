module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
      minHeight: {
        10: "10rem",
        20: "20rem",
        30: "30rem",
        40: "40rem",
        50: "50rem",
        60: "60rem",
        70: "70rem",
      },
      maxWidth: {
        250: "250px",
        275: "275px",
        300: "300px",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        list: "repeat(auto-fit, minmax(270px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
