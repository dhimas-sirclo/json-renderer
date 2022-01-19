import type { MockedResponse } from "@apollo/client/testing";

// import executeAction from "../../graphql/documents/applications/mutations/executeAction";
// import { ExecuteActionMutation } from "../../graphql/generated";

const mutations: MockedResponse[] = [
  // {
  //   request: {
  //     query: executeAction,
  //     variables: {
  //       input: {
  //         appId: "chat",
  //         tenantId: "chat",
  //         brandId: "chat",
  //         roomId: "chat",
  //         action: "searchProduct",
  //         data: JSON.stringify({ search: "zenbo" }) ?? undefined,
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       executeAction: {
  //         type: "dialog",
  //         title: {
  //           text: "App Display Name",
  //           icon: "iconUrl",
  //         },
  //         action: {
  //           buttons: [
  //             {
  //               type: "button",
  //               label: "View Cart",
  //               action: {
  //                 id: "viewCart",
  //               },
  //             },
  //             {
  //               type: "button",
  //               label: "Re-Search",
  //               action: {
  //                 id: "searchProductDialog",
  //               },
  //             },
  //             {
  //               type: "cancel",
  //               label: "Close",
  //             },
  //           ],
  //         },
  //         blocks: [
  //           {
  //             type: "container",
  //             container: {
  //               direction: "row",
  //               blocks: [
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random/50×50",
  //                     alt: "alt",
  //                     width: 50,
  //                     height: 50,
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "zenbo",
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "$1000",
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "View Product",
  //                     action: {
  //                       id: "viewProduct",
  //                       metadata: [
  //                         {
  //                           key: "SKU",
  //                           value: "sku-sku-sku",
  //                         },
  //                       ],
  //                     },
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "addToCart",
  //                     action: {
  //                       id: "viewProduct",
  //                       metadata: [
  //                         {
  //                           key: "SKU",
  //                           value: "sku-sku-sku",
  //                         },
  //                       ],
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             type: "container",
  //             container: {
  //               direction: "row",
  //               blocks: [
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random/50×50",
  //                     alt: "alt",
  //                     width: 50,
  //                     height: 50,
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "zenbo",
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "$1000",
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "View Product",
  //                     action: {
  //                       id: "viewProduct",
  //                       metadata: [
  //                         {
  //                           key: "SKU",
  //                           value: "sku-sku-sku",
  //                         },
  //                       ],
  //                     },
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "addToCart",
  //                     action: {
  //                       id: "viewProduct",
  //                       metadata: [
  //                         {
  //                           key: "SKU",
  //                           value: "sku-sku-sku",
  //                         },
  //                       ],
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
  // {
  //   request: {
  //     query: executeAction,
  //     variables: {
  //       input: {
  //         appId: "chat",
  //         tenantId: "chat",
  //         brandId: "chat",
  //         roomId: "chat",
  //         action: "searchProductDialog",
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       executeAction: {
  //         type: "dialog",
  //         title: { text: "Cari Produk" },
  //         action: {
  //           id: "searchProductDialog",
  //           buttons: [
  //             {
  //               type: "button",
  //               label: "Lihat Keranjang",
  //               action: {
  //                 id: "viewCart",
  //               },
  //             },
  //             {
  //               type: "cancel",
  //               label: "Tutup",
  //             },
  //           ],
  //         },
  //         blocks: [
  //           {
  //             type: "text",
  //             text: {
  //               body: "Cari Produk",
  //             },
  //           },
  //           {
  //             type: "container",
  //             container: {
  //               direction: "row",
  //               blocks: [
  //                 {
  //                   type: "input",
  //                   input: {
  //                     label: "Cari Produk",
  //                     name: "search",
  //                     type: "text",
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "submit",
  //                     label: "Cari",
  //                     action: {
  //                       id: "searchProduct",
  //                     },
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
];

export default mutations;
