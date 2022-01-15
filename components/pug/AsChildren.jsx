// can not work with tsx
// rendered as literal string

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function AsChildren(props) {
  return pug`${props.children}`;
}
