import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { render } from "react-dom";

import App from "#root/components/App";
import theme from "#root/config/theme";

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
