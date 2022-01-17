import type { MockedResponse } from "@apollo/client/testing";
import { ExecuteActionDocument } from "../../../graphql";
import multiply from "../../utils/multiply";
// import { GraphQLError } from "graphql";

const searchProduct: MockedResponse = {
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
          text: "Search Product",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "action",
          buttons: [
            {
              type: "button",
              label: "View Cart",
              action: {
                id: "viewCart",
              },
            },
            {
              type: "cancel",
              label: "Close",
            },
          ],
        },
        blocks: [
          {
            type: "container",
            container: {
              direction: "row",
              blocks: [
                {
                  type: "input",
                  input: {
                    type: "text",
                    name: "query",
                    label: "Search Product",
                    placeholder: "Masukkan nama produk atau SKU",
                    options: [],
                  },
                },
                {
                  type: "button",
                  button: {
                    type: "submit",
                    label: "Search",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};

const searchProductWithData: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "searchProduct",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        data: `{\"query\":\"jacket\"}`,
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
          text: "Search Result",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          buttons: [
            {
              type: "button",
              label: "View Cart",
              action: {
                id: "viewCart",
              },
            },
            {
              type: "button",
              label: "Re-Search",
              action: {
                id: "searchProduct",
              },
            },
            {
              type: "cancel",
              label: "Close",
            },
          ],
        },
        blocks: multiply({
          type: "container",
          container: {
            direction: "row",
            blocks: [
              {
                type: "image",
                image: {
                  src: "https://source.unsplash.com/random/50x50",
                  alt: "Product 1",
                },
              },
              {
                type: "text",
                text: {
                  body: "Product 1",
                },
              },
              {
                type: "text",
                text: {
                  body: "IDR 100.000,00",
                },
              },
              {
                type: "button",
                button: {
                  type: "button",
                  label: "View Product",
                  action: {
                    id: "viewProduct",
                  },
                },
              },
              {
                type: "button",
                button: {
                  type: "button",
                  label: "Add to Cart",
                  action: {
                    id: "addToCart",
                  },
                },
              },
            ],
          },
        }),
      },
    },
  },
};

const viewCart: MockedResponse = {
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
          text: "Cart Items",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "updateCartItems",
          buttons: [
            {
              type: "button",
              label: "Search Product",
              action: {
                id: "searchProduct",
              },
            },
            {
              type: "cancel",
              label: "Close",
            },
            {
              type: "submit",
              label: "Next",
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
};

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

const mocks = [searchProduct, searchProductWithData, viewCart];

export default mocks;
