// can not work with tsx
// rendered as literal string

import React from "react";

export default function FromParams(props) {
  return pug`${props.template}`;
}
