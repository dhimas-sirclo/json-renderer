import { useState, useEffect } from "react";
import type { NextPage } from "next";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AttachFile, EmojiEmotions, Send } from "@mui/icons-material";
import { useQuery } from "@apollo/client";

import { AppDialog } from "../components";
import { AppMenu } from "../components/menu";
import getAppBlocks from "../graphql/documents/applications/queries/getAppBlocks";

const Home: NextPage = () => {
  const [blocksData, setBlocksData] = useState();

  const { data, loading } = useQuery(getAppBlocks, {
    variables: {
      filter: {
        appId: "chat",
        blocksId: "searchProductDialog",
      },
    },
  });

  useEffect(() => {
    if (!data) return;
    setBlocksData(data.applicationBlocks);
  }, [data]);

  if (loading || !blocksData) {
    return <>Loading...</>;
  }

  return (
    <>
      <Paper square elevation={1}>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography component="pre">
              <Box sx={{ fontFamily: "monospace" }}>
                {JSON.stringify(blocksData, null, 2)}
              </Box>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <AppDialog data={blocksData} />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <TextField
              fullWidth
              multiline
              id="message"
              name="message"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AppMenu />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton size="small">
                      <EmojiEmotions />
                    </IconButton>
                    <IconButton size="small">
                      <AttachFile />
                    </IconButton>
                    <IconButton size="small">
                      <Send />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Home;
