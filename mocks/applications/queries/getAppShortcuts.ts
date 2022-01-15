import type { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { GetAppShortcutsDocument } from "../../../graphql";

const success: MockedResponse = {
  request: {
    query: GetAppShortcutsDocument,
    variables: {
      filter: {},
    },
  },
  result: {
    data: {
      applicationShortcuts: [],
    },
  },
};

const networkError: MockedResponse = {
  request: {
    query: GetAppShortcutsDocument,
    variables: {
      filter: {},
    },
  },
  error: new Error("NETWORK ERROR"),
};

const graphqlErrors: MockedResponse = {
  request: {
    query: GetAppShortcutsDocument,
    variables: {
      filter: {},
    },
  },
  result: {
    errors: [new GraphQLError("GRAPHQL ERROR")],
  },
};

const mocks = [success, networkError, graphqlErrors];

export default mocks;
