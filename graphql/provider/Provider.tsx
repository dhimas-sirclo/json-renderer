import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloProvider } from "@apollo/client";
import queries from "../../mocks/queries";
import mutations from "../../mocks/mutations";

interface ProviderProps {
  children: JSX.Element;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <MockedProvider mocks={[...queries, ...mutations]}>
      <>{children}</>
    </MockedProvider>
  );
}
