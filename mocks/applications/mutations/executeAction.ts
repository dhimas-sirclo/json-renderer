import type { MockedResponse } from "@apollo/client/testing";
import { ExecuteActionDocument } from "../../../graphql";
import multiply from "../../utils/multiply";
// import { GraphQLError } from "graphql";

// START: searchProduct
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
          id: "searchProduct",
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
                    value: "jacket",
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

// searchProduct -> searchResult
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
                  alt: "Jacket",
                },
              },
              {
                type: "text",
                text: {
                  body: "Jacket",
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

// viewProduct -> addToCart
const viewProduct: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "viewProduct",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        roomId: "room",
        tenantId: "chat",
        // data: `{\"sku\":\"black-jacket-m\"}`,
      },
    },
  },
  result: {
    data: {
      executeAction: {
        type: "dialog",
        title: {
          text: "View Product",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "addToCart",
          buttons: [
            {
              type: "cancel",
              label: "Back",
            },
            {
              type: "submit",
              label: "Add to Cart",
            },
          ],
        },
        blocks: [
          {
            type: "container",
            container: {
              direction: "row",
              blocks: multiply({
                type: "image",
                image: {
                  src: "https://source.unsplash.com/random/50x50",
                  alt: "Jacket",
                },
              }),
            },
          },
          {
            type: "text",
            text: {
              body: "Product Display Name",
            },
          },
          {
            type: "text",
            text: {
              body: "IDR 100.000,00",
            },
          },
          {
            type: "text",
            text: {
              body: "Black, M",
            },
          },
          {
            type: "text",
            text: {
              body: "jacket-black-m",
            },
          },
          {
            type: "text",
            text: {
              body: "lorem ipsum dolor sit amet",
            },
          },
          {
            type: "text",
            text: {
              body: "weight & dimension",
            },
          },
          {
            type: "text",
            text: {
              body: "1000gr 10cm x 10cm x 10cm",
            },
          },
        ],
      },
    },
  },
};

// searchResult -> addToCart
// viewProduct -> addToCart
const addToCart: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "addToCart",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        roomId: "room",
        tenantId: "chat",
        // data: `{\"sku\":\"black-jacket-m\"}`,
        data: `{}`,
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
        blocks: multiply({
          type: "container",
          container: {
            direction: "row",
            blocks: [
              {
                type: "image",
                image: {
                  src: "https://source.unsplash.com/random/50x50",
                  alt: "Jacket",
                },
              },
              {
                type: "container",
                container: {
                  blocks: [
                    {
                      type: "text",
                      text: {
                        body: "Jacket",
                      },
                    },
                    {
                      type: "text",
                      text: {
                        body: "Black, M",
                      },
                    },
                    {
                      type: "text",
                      text: {
                        body: "jacket-black-m",
                      },
                    },
                  ],
                },
              },
              {
                type: "text",
                text: {
                  body: "IDR 100.000,00",
                },
              },
              {
                type: "input",
                input: {
                  type: "number",
                  name: "jacket-black-m",
                  label: "Quantity",
                  value: 1,
                },
              },
              {
                type: "button",
                button: {
                  label: "Remove",
                },
              },
            ],
          },
        }),
      },
    },
  },
};

// START: viewCart
// viewCart -> updateCartItems
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
        blocks: multiply({
          type: "container",
          container: {
            direction: "row",
            blocks: [
              {
                type: "image",
                image: {
                  src: "https://source.unsplash.com/random/50x50",
                  alt: "Jacket",
                },
              },
              {
                type: "container",
                container: {
                  blocks: [
                    {
                      type: "text",
                      text: {
                        body: "Jacket",
                      },
                    },
                    {
                      type: "text",
                      text: {
                        body: "Black, M",
                      },
                    },
                    {
                      type: "text",
                      text: {
                        body: "jacket-black-m",
                      },
                    },
                  ],
                },
              },
              {
                type: "text",
                text: {
                  body: "IDR 100.000,00",
                },
              },
              {
                type: "input",
                input: {
                  type: "number",
                  name: "jacket-black-m",
                  label: "Quantity",
                  value: 1,
                },
              },
              {
                type: "button",
                button: {
                  label: "Remove",
                },
              },
            ],
          },
        }),
      },
    },
  },
};

// updateCartItems -> setShippingAddress
const updateCartItems: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "updateCartItems",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        roomId: "room",
        tenantId: "chat",
        data: `{\"jacket-black-m\":1}`,
      },
    },
  },
  result: {
    data: {
      executeAction: {
        type: "dialog",
        title: {
          text: "Shipping Address",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "setShippingAddress",
          buttons: [
            {
              type: "button",
              label: "Back",
              action: {
                id: "viewCart",
              },
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
              name: "name",
              label: "Name",
              value: "John Doe",
            },
          },
          {
            type: "input",
            input: {
              type: "text",
              name: "email",
              label: "Email",
              value: "john.doe@example.com",
            },
          },
          {
            type: "input",
            input: {
              type: "text",
              name: "phoneNumber",
              label: "Phone Number",
              value: "081234567890",
            },
          },
          {
            type: "input",
            input: {
              type: "select",
              name: "districtCode",
              label: "Kota/Kecamatan",
              options: [
                {
                  value: "ID-JK0101",
                  label: "Jakarta 1",
                },
              ],
              value: "ID-JK0101",
            },
          },
          {
            type: "input",
            input: {
              type: "text",
              name: "postcode",
              label: "Kode Pos",
              value: "15345",
            },
          },
          {
            type: "input",
            input: {
              type: "textarea",
              name: "address",
              label: "Alamat Lengkap",
              value: "GOP1",
            },
          },
          {
            type: "input",
            input: {
              type: "text",
              name: "latLong",
              label: "Latitude Longitude Point",
              value: "0.0,0.0",
            },
          },
        ],
      },
    },
  },
};

// setShippingAddress -> setShippingMethod
const setShippingAddress: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "setShippingAddress",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        data: `{\"name\":\"John Doe\",\"email\":\"john.doe@example.com\",\"phoneNumber\":\"081234567890\",\"districtCode\":\"ID-JK0101\",\"postcode\":\"15345\",\"address\":\"GOP1\",\"latLong\":\"0.0,0.0\"}`,
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
          text: "Shipping Methods",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "setShippingMethod",
          buttons: [
            {
              type: "button",
              label: "Back",
              action: {
                id: "viewCart",
              },
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
              type: "radio",
              name: "shippingMethod",
              label: "Shipping Methods",
              options: multiply({
                value: "JNE_REG",
                label: "JNE REG",
              }),
              value: "JNE_REG",
            },
          },
        ],
      },
    },
  },
};

// setShippingMethod -> setPaymentMethod
const setShippingMethod: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "setShippingMethod",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        data: `{\"shippingMethod\":\"JNE_REG\"}`,
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
          text: "Payment Methods",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "setPaymentMethod",
          buttons: [
            {
              type: "button",
              label: "Back",
              action: {
                id: "viewCart",
              },
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
              type: "radio",
              name: "paymentMethod",
              label: "Payment Methods",
              options: multiply({
                value: "BANK_TRANSFER",
                label: "Bank Transfer",
              }),
              value: "BANK_TRANSFER",
            },
          },
        ],
      },
    },
  },
};

// setPaymentMethod -> applyCoupon
const setPaymentMethod: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "setPaymentMethod",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        data: `{\"paymentMethod\":\"BANK_TRANSFER\"}`,
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
          text: "Payment Methods",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "applyCoupon",
          buttons: [
            {
              type: "button",
              label: "Back",
              action: {
                id: "viewCart",
              },
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
              type: "radio",
              name: "coupon",
              label: "Coupons",
              options: multiply({
                value: "FREE_ONGKIR",
                label: "Free Ongkir",
              }),
              value: "FREE_ONGKIR",
            },
          },
        ],
      },
    },
  },
};

// applyCoupon -> placeOrder
const applyCoupon: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "applyCoupon",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        data: `{\"coupon\":\"FREE_ONGKIR\"}`,
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
          text: "Order Summary",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          id: "placeOrder",
          buttons: [
            {
              type: "button",
              label: "Back",
              action: {
                id: "viewCart",
              },
            },
            {
              type: "submit",
              label: "Checkout",
            },
          ],
        },
        blocks: [
          {
            type: "text",
            text: {
              body: "Order Summary",
            },
          },
        ],
      },
    },
  },
};

// placeOrder -> END
const placeOrder: MockedResponse = {
  request: {
    query: ExecuteActionDocument,
    variables: {
      input: {
        action: "placeOrder",
        appId: "sirclo-store-v2",
        brandId: "chat",
        channel: "channel",
        // data: `{\"cartId\":\"1234567890\"}`,
        data: `{}`,
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
          text: "Order Placed",
          icon: "https://source.unsplash.com/random/50x50",
        },
        action: {
          buttons: [
            {
              type: "cancel",
              label: "Finish",
            },
          ],
        },
        blocks: [
          {
            type: "text",
            text: {
              body: "Order Placed",
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

const mocks = [
  searchProduct,
  searchProductWithData,
  viewProduct,
  addToCart,
  viewCart,
  updateCartItems,
  setShippingAddress,
  setShippingMethod,
  setPaymentMethod,
  applyCoupon,
  placeOrder,
];

export default mocks;
