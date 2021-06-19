import { createMuiTheme, ThemeOptions } from "@material-ui/core";

const jade = "#00BF5F";

const options: ThemeOptions = {
  palette: {
    type: "light",
    text: {
      primary: "#000",
    },
    background: {
      default: jade,
    },
    primary: {
      light: "#c3c3e5",
      //main: '#8c489f',
      //main: '#004fb9',
      main: "#003D74",
      dark: "#443266",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#d92027",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
  spreadThis: {
    // global custom styles
    "@global": {
      body: {
        fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
      },
    },
    header: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
  },
};
export default createMuiTheme(options);
