import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { render } from "react-dom";

import App from "#root/components/App";
import theme from "#root/config/theme";

render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
