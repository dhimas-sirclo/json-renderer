import React from "react";
import { AppBar, Toolbar, Container, Typography, Paper } from "@mui/material";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UI Builder
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Paper square elevation={0}>
        <Container disableGutters>
          <main>{children}</main>
        </Container>
      </Paper>
    </>
  );
}
