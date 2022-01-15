import type { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { ExecuteShortcutDocument } from "../../../graphql";

const success: MockedResponse = {
  request: {
    query: ExecuteShortcutDocument,
  },
  result: {
    data: {
      executeShortcut: {},
    },
  },
};

const networkError: MockedResponse = {
  request: {
    query: ExecuteShortcutDocument,
  },
  error: new Error("NETWORK ERROR"),
};

const graphqlErrors: MockedResponse = {
  request: {
    query: ExecuteShortcutDocument,
  },
  result: {
    errors: [new GraphQLError("GRAPHQL ERROR")],
  },
};

const mocks = [success, networkError, graphqlErrors];

export default mocks;
