import { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { ExecuteSlashCommandDocument } from "../../../graphql";

const success: MockedResponse = {
  request: {
    query: ExecuteSlashCommandDocument,
  },
  result: {
    data: {
      executeSlashCommand: {},
    },
  },
};

const networkError: MockedResponse = {
  request: {
    query: ExecuteSlashCommandDocument,
  },
  error: new Error("NETWORK ERROR"),
};

const graphqlErrors: MockedResponse = {
  request: {
    query: ExecuteSlashCommandDocument,
  },
  result: {
    errors: [new GraphQLError("GRAPHQL ERROR")],
  },
};

const mocks = [success, networkError, graphqlErrors];

export default mocks;
