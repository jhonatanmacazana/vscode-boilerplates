import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

import { darkTheme, lightTheme } from "#root/helpers/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);

  const { value } = useDarkMode(false, {
    storageKey: undefined,
    onChange: undefined,
  });
  const theme = value ? darkTheme : lightTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default MyApp;
