import type { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { GetInstalledAppsDocument } from "../../../graphql";

const success: MockedResponse = {
  request: {
    query: GetInstalledAppsDocument,
    variables: {
      filter: {},
    },
  },
  result: {
    data: {
      installedApplications: [],
    },
  },
};

const networkError: MockedResponse = {
  request: {
    query: GetInstalledAppsDocument,
    variables: {
      filter: {},
    },
  },
  error: new Error("NETWORK ERROR"),
};

const graphqlErrors: MockedResponse = {
  request: {
    query: GetInstalledAppsDocument,
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
