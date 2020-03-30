import React, { useState, createContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";

export const ThemeContext = createContext({
  setTheme: () => {}
});

export default ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("panos_theme") || "dark"
  );

  const muiTheme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: red,
      type: theme
    },
    typography: {
      fontFamily: "Helvetica Neue, Roboto, sans-serif"
    }
  });

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme
      }}
    >
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
