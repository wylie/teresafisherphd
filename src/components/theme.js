// theme.js
const theme = {
  border: {
    radius: {
      sm: "3px",
      md: "5px",
      lg: "7px"
    }
  },
  color: {
    white: "#fff",
    black: "#000",
    text: "#213b45",
    link: "#2a9d8f",
    zero: "#213b45",
    one: "#264653",
    two: "#2a9d8f",
    three: "#e9c46a",
    four: "#f4a261",
    five: "#e76f51",
    six: "#D7431D",
  },
  font: {
    family: {
      base: '"Nunito", sans-serif',
      secondary: '"Bodoni Moda", serif'
    },
    size: {
      sm: "1.25rem",
      md: "1.75rem",
      lg: "3rem"
    },
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700
    }
  },
  line: {
    height: "1.5"
  }
};

module.exports = {
 ...theme
};