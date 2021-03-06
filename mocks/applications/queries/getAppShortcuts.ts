import type { MockedResponse } from "@apollo/client/testing";
import { GetAppShortcutsDocument } from "../../../graphql";
// import { GraphQLError } from "graphql";

const getSircloStoreAppShortcuts: MockedResponse = {
  request: {
    query: GetAppShortcutsDocument,
    variables: {
      filter: {
        appId: "sirclo-store-v2",
        brandIds: ["chat"],
        channels: ["channel"],
        roomIds: ["room"],
        tenantIds: ["chat"],
      },
    },
  },
  result: {
    data: {
      applicationShortcuts: [
        {
          id: "searchProduct",
          title: "Search Product",
          description: "Search product",
          actionId: "searchProduct",
        },
        {
          id: "viewCart",
          title: "View Cart",
          description: "View cart",
          actionId: "viewCart",
        },
      ],
    },
  },
};

// const networkError: MockedResponse = {
//   request: {
//     query: GetAppShortcutsDocument,
//     variables: {
//       filter: {},
//     },
//   },
//   error: new Error("NETWORK ERROR"),
// };

// const graphqlErrors: MockedResponse = {
//   request: {
//     query: GetAppShortcutsDocument,
//     variables: {
//       filter: {},
//     },
//   },
//   result: {
//     errors: [new GraphQLError("GRAPHQL ERROR")],
//   },
// };

const mocks = [
  getSircloStoreAppShortcuts,
  // networkError,
  // graphqlErrors
];

export default mocks;
