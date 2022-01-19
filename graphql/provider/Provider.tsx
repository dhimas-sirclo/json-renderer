import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import mocks from "../../mocks";

interface ProviderProps {
  children: JSX.Element;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <MockedProvider addTypename={false} mocks={mocks}>
      <>{children}</>
    </MockedProvider>
  );
}
