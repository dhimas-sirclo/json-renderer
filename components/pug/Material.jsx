// can not work with tsx
// need to import components
// app server need to know ui library used by FE

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Material(props) {
  return pug`
  Box
    Typography Material
    Button(onClick=props.onClick) Click Me
`;
}
