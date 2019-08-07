import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#673ab7"
    },
    background: {
      default: "#f2f2f2"
    }
  },
  typography: {
    fontFamily: "Helvetica Neue, sans-serif"
  }
});

export default theme;
