import type { MockedResponse } from "@apollo/client/testing";

import getAppBlocks from "../../graphql/documents/applications/queries/getAppBlocks";

const queries: MockedResponse[] = [
  {
    request: {
      query: getAppBlocks,
      variables: {
        filter: {
          appId: "chat",
          blocksId: "searchProductDialog",
        },
      },
    },
    result: {
      data: {
        applicationBlocks: {
          type: "dialog",
          title: { text: "Cari Produk" },
          action: {
            id: "searchProduct",
            buttons: [
              {
                type: "button",
                label: "Lihat Keranjang",
                action: {
                  id: "viewCart",
                },
              },
              {
                type: "cancel",
                label: "Tutup",
              },
            ],
          },
          blocks: [
            {
              type: "text",
              text: {
                body: "Cari Produk",
              },
            },
            {
              type: "container",
              container: {
                direction: "row",
                blocks: [
                  {
                    type: "input",
                    input: {
                      label: "Cari Produk",
                      name: "search",
                      type: "text",
                    },
                  },
                  {
                    type: "button",
                    button: {
                      type: "submit",
                      label: "Cari",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
];

export default queries;
