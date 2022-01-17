import type { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
// import { ExecuteActionDocument } from "../../../graphql";

// const success: MockedResponse = {
//   request: {
//     query: ExecuteActionDocument,
//   },
//   result: {
//     data: {
//       executeAction: {},
//     },
//   },
// };

// const networkError: MockedResponse = {
//   request: {
//     query: ExecuteActionDocument,
//   },
//   error: new Error("NETWORK ERROR"),
// };

// const graphqlErrors: MockedResponse = {
//   request: {
//     query: ExecuteActionDocument,
//   },
//   result: {
//     errors: [new GraphQLError("GRAPHQL ERROR")],
//   },
// };

// const mocks = [success, networkError, graphqlErrors];
const mocks: MockedResponse[] = [];

export default mocks;
