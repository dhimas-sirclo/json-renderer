import type { MockedResponse } from "@apollo/client/testing";
import { GraphQLError } from "graphql";
import { ExecuteActionDocument } from "../../../graphql";
import multiply from "../../utils/multiply";

const searchProduct = multiply({
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "searchProduct",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        roomId: "room",
        tenantId: "chat",
      },
    },
  },
  result: {
    data: {
      executeAction: {
        type: "dialog",
        title: {
          text: "App Display Name",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "action",
          buttons: [
            {
              type: "button",
              label: "Button",
              action: {
                id: "action",
              },
            },
          ],
        },
        blocks: [
          {
            type: "input",
            input: {
              type: "text",
              name: "text",
              label: "Text",
              options: [],
            },
          },
        ],
      },
    },
  },
});

const viewCart = multiply({
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "viewCart",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        roomId: "room",
        tenantId: "chat",
      },
    },
  },
  result: {
    data: {
      executeAction: {
        type: "dialog",
        title: {
          text: "App Display Name",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "action",
          buttons: [
            {
              type: "button",
              label: "Button",
              action: {
                id: "action",
              },
            },
          ],
        },
        blocks: [
          {
            type: "input",
            input: {
              type: "text",
              name: "text",
              label: "Text",
              options: [],
            },
          },
        ],
      },
    },
  },
});

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

const mocks = [...searchProduct, ...viewCart];

export default mocks;
