const theme = {
  color: {
    textPrimary: "rgb(210, 192, 163)",
    textSecondary: "rgb(255, 255, 255)",
    textH1: function () {
      return this.textPrimary;
    },
    textH2: "rgb(243, 236, 217)",
    textMenuDescription: "rgb(145, 145, 145)",
    primary: "rgb(235, 127, 69)",
    speical: "rgb(0, 180, 0)",
  },

  fonts: {
    h1: "'Galada', cursive",
    h2: "'Rochester', cursive",
    h1Footer: "'Libre Barcode 128 Text', system-ui",
  },
  fontsize: {
    h1: "24px",
    h2: "38px",
    h1Footer: "42px",
    menuDescription: "12px",
  },
};

export default theme;
