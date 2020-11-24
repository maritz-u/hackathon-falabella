import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato"].join(","),
  },
  palette: {
    primary: {
      main: "#77BC20",
      dark: "#8aad00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1a1a1a",
      dark: "#000",
      contrastText: "#bbb",
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: "white",
      },
    },
  },
});

export default theme;
