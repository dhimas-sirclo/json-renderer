import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Provider from "../graphql/provider/Provider";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <>
        <CssBaseline />
        <ThemeProvider theme={darkTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    </Provider>
  );
}
