import type { MockedResponse } from "@apollo/client/testing";
import { GetInstalledAppsDocument } from "../../../graphql";
// import { GraphQLError } from "graphql";

const getInstalledApps: MockedResponse = {
  request: {
    query: GetInstalledAppsDocument,
    variables: {
      filter: {
        brandIds: ["chat"],
        channels: ["channel"],
        roomIds: ["room"],
        tenantIds: ["chat"],
      },
    },
  },
  result: {
    data: {
      installedApplications: [
        {
          id: "sirclo-store-v2",
          title: "SIRCLO Store v2",
          description: "SIRCLO Store v2",
        },
      ],
    },
  },
};

// const networkError: MockedResponse = {
//   request: {
//     query: GetInstalledAppsDocument,
//     variables: {
//       filter: {},
//     },
//   },
//   error: new Error("NETWORK ERROR"),
// };

// const graphqlErrors: MockedResponse = {
//   request: {
//     query: GetInstalledAppsDocument,
//     variables: {
//       filter: {},
//     },
//   },
//   result: {
//     errors: [new GraphQLError("GRAPHQL ERROR")],
//   },
// };

const mocks = [
  getInstalledApps,
  //networkError,
  //graphqlErrors
];

export default mocks;
