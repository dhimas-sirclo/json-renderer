import React from "react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
