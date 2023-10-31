module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "940px",
        background: "274px",
        card: "138px",
        addons: "450px",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    fontSize: {
      xs: "12px",
      base: "14px",
      s: "16px",
      sm: "18px",
      m: "24px",
      l: "32px",
      lg: "40px",
      xl: "56px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "940px",
      xl: "1280px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      light: "#BEE2FD",
      dark: "#022959",
      purple: "#483EFF",
      background: "#EFF5FF",
      grey: {
        100: "#D6D9E6",
        200: "#F8F9FF",
        300: "#9699AA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
