import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/layout";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import ApolloGraphQLProvider from "../graphql/provider/Provider";
import { AppDialogProvider } from "../components/application/dialogs/AppDialogCtx";

const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppDialogProvider>
      <ApolloGraphQLProvider>
        <>
          <CssBaseline />
          <MuiThemeProvider theme={darkTheme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MuiThemeProvider>
        </>
      </ApolloGraphQLProvider>
    </AppDialogProvider>
  );
}
