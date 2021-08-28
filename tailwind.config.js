module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addComponents}) {
      const buttons = {
        ".btn": {
          width: "152px",
          height: "48px",
          // left: "1224px",
          // top: "0px",
        },
        ".btn-primary": {
          display: "flex",
          border: "1.5px solid #FFFFFF",
          boxSizing: "border-box",
          borderRadius: "56px",
          fontSize: "1.2rem",
          textTransform: "uppercase",
          justifyContent: "center",
          alignItems: "center",

          "&:hover": {
            color: "#c0c0c0",
          },
        },
        ".btn-secondary": {
          backgroundColor: "#667eea",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#5a67d8",
          },
        },
      };

      addComponents(buttons);
    },
  ],
};
