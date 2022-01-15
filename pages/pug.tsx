import React from "react";
import type { NextPage } from "next";

import DefaultHtml from "../components/pug/DefaultHtml";
import Material from "../components/pug/Material";
import FromParams from "../components/pug/FromParams";
import AsChildren from "../components/pug/AsChildren";

const Pug: NextPage = () => {
  return (
    <>
      <DefaultHtml
        onClick={() => {
          alert("base html!");
        }}
      />

      <hr />

      <Material
        onClick={() => {
          alert("material");
        }}
      />

      <hr />

      <FromParams
        template={`Box
    Typography Hello World!
    Button(onClick=props.onClick) Click Me`}
      />

      <hr />

      <AsChildren>{`Box
    Typography Hello World!
    Button(onClick=props.onClick) Click Me`}</AsChildren>

      <hr />
    </>
  );
};

export default Pug;
