// can not work with tsx
// app server need to know the styles/css if styling needed

import React from "react";

export default function DefaultHtml(props) {
  return pug`
  div
    p HTML
    button(onClick=props.onClick) Click Me
`;
}
