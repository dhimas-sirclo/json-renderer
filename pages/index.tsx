import React from "react";
import type { NextPage } from "next";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { AppDialog } from "../components";
import { AttachFile, EmojiEmotions, MoreVert, Send } from "@mui/icons-material";
import { AppMenu } from "../components/menu";

const data: { [key: string]: any } = {
  type: "dialog",
  title: "App Title",
  action: {
    id: "searchProduct",
    buttons: [
      {
        type: "cancel",
        label: "Back",
      },
      {
        type: "submit",
        label: "Search",
      },
    ],
  },
  blocks: [
    {
      type: "input",
      input: {
        type: "text",
        name: "firstName",
      },
    },
    {
      type: "input",
      input: {
        type: "text",
        name: "lastName",
      },
    },
    {
      type: "input",
      input: {
        type: "text",
        name: "address",
        label: "Alamat",
      },
    },
    {
      type: "input",
      input: {
        type: "password",
        name: "password",
      },
    },
    {
      type: "input",
      input: {
        type: "textarea",
        name: "textarea",
      },
    },
    {
      type: "input",
      input: {
        type: "select",
        name: "select",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
    {
      type: "input",
      input: {
        type: "checkbox",
        name: "checkbox",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
    {
      type: "input",
      input: {
        type: "radio",
        name: "radio",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Paper square elevation={1}>
        <Box sx={{ padding: "20px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography component="pre">
              <Box sx={{ fontFamily: "monospace" }}>
                {JSON.stringify(data, null, 2)}
              </Box>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <AppDialog data={data} />
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
