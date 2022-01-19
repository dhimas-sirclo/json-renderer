import type { MockedResponse } from "@apollo/client/testing";

// import getAppBlocks from "../../graphql/documents/applications/queries/getAppBlocks";

const queries: MockedResponse[] = [
  // search product
  // {
  //   request: {
  //     query: getAppBlocks,
  //     variables: {
  //       filter: {
  //         appId: "chat",
  //         blocksId: "searchProductDialog",
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       applicationBlocks: {
  //         type: "dialog",
  //         title: { text: "Cari Produk" },
  //         action: {
  //           id: "searchProduct",
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
  // // product search result
  // {
  //   request: {
  //     query: getAppBlocks,
  //     variables: {
  //       filter: {
  //         appId: "chat",
  //         blocksId: "productListDialog",
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       applicationBlocks: {
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
  // // product detail
  // {
  //   request: {
  //     query: getAppBlocks,
  //     variables: {
  //       filter: {
  //         appId: "chat",
  //         blocksId: "productDetailDialog",
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       applicationBlocks: {
  //         type: "dialog",
  //         title: {
  //           text: "App Display Name",
  //           icon: "iconUrl",
  //         },
  //         action: {
  //           buttons: [
  //             {
  //               type: "cancel",
  //               label: "Close",
  //             },
  //             {
  //               type: "button",
  //               label: "Add to Cart",
  //               action: {
  //                 id: "addToCart",
  //                 metadata: [
  //                   {
  //                     key: "sku",
  //                     value: "sku-sku-sku",
  //                   },
  //                 ],
  //               },
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
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 80,
  //                     height: 80,
  //                   },
  //                 },
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 80,
  //                     height: 80,
  //                   },
  //                 },
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 80,
  //                     height: 80,
  //                   },
  //                 },
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 80,
  //                     height: 80,
  //                   },
  //                 },
  //                 {
  //                   type: "image",
  //                   image: {
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 80,
  //                     height: 80,
  //                   },
  //                 },
  //               ],
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "heading", //'body1', 'body2','caption','heading','subtitle1','subtitle2'
  //               body: "Product Display Name",
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "subtitle1",
  //               body: "$1000",
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "caption",
  //               body: "Product Variant Name \n testtest",
  //               weight: "light", //light, regular, medium, bold
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "caption",
  //               body: "SKU-12345",
  //               weight: "light", //light, regular, medium, bold
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "body1",
  //               body: "Eget viverra et congue iaculis elementum nec egestas. Adipiscing quis odio elit ut adipiscing nunc sit. Dui eu mattis a eros etiam dolor ac id. Nec quis eget semper ut fringilla lacus placerat Semper eget id at vel magnis eros.Magna morbi amet, nibh cras. In ultricies ac egestas elementum. Egestas risus at risus tempor turpis. Faucibus dignissim purus blandit a, tincidunt velit augue. Eu in dictum fringilla scelerisque vulputate leo pulvinar aliquam, diam. Blandit sit facilisis duis gravida justo, at urna. A aliquam placerat sit scelerisque vel nam sem sed. Adipiscing justo.",
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "subtitle1",
  //               body: "Weight & Dimension",
  //               weight: "medium",
  //             },
  //           },
  //           {
  //             type: "text",
  //             text: {
  //               type: "body1",
  //               body: "1kg, 1x1x1cm",
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
  // // Cart
  // {
  //   request: {
  //     query: getAppBlocks,
  //     variables: {
  //       filter: {
  //         appId: "chat",
  //         blocksId: "cartDialog",
  //       },
  //     },
  //   },
  //   result: {
  //     data: {
  //       applicationBlocks: {
  //         type: "dialog",
  //         title: {
  //           text: "Keranjang & Checkout",
  //           icon: "iconUrl",
  //         },
  //         action: {
  //           id: "addAddress",
  //           buttons: [
  //             {
  //               type: "button",
  //               label: "Cari Produk",
  //               action: {
  //                 id: "searchProductDialog",
  //               },
  //             },
  //             {
  //               type: "cancel",
  //               label: "Close",
  //             },
  //             {
  //               type: "submit",
  //               label: "Lanjutkan",
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
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 60,
  //                     height: 60,
  //                   },
  //                 },
  //                 {
  //                   type: "container",
  //                   container: {
  //                     direction: "column",
  //                     blocks: [
  //                       {
  //                         type: "text",
  //                         text: {
  //                           body: "Lorem Ipsum Dolor ABC",
  //                           type: "body2",
  //                         },
  //                       },
  //                       {
  //                         type: "text",
  //                         text: {
  //                           type: "caption",
  //                           body: "sku1234",
  //                           weight: "light",
  //                         },
  //                       },
  //                     ],
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "Rp250.000.000",
  //                     type: "body2",
  //                   },
  //                 },
  //                 {
  //                   type: "input",
  //                   input: {
  //                     type: "number",
  //                     name: "totalProduct",
  //                     // negativeValue: true,
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "delete",
  //                     action: {
  //                       id: "removeProduct",
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
  //                     src: "https://source.unsplash.com/random",
  //                     alt: "alt",
  //                     width: 60,
  //                     height: 60,
  //                   },
  //                 },
  //                 {
  //                   type: "container",
  //                   container: {
  //                     direction: "column",
  //                     blocks: [
  //                       {
  //                         type: "text",
  //                         text: {
  //                           body: "Lorem Ipsum Dolor ABC",
  //                           type: "body2",
  //                         },
  //                       },
  //                       {
  //                         type: "text",
  //                         text: {
  //                           type: "caption",
  //                           body: "sku1234",
  //                           weight: "light",
  //                         },
  //                       },
  //                     ],
  //                   },
  //                 },
  //                 {
  //                   type: "text",
  //                   text: {
  //                     body: "Rp250.000.000",
  //                     type: "body2",
  //                   },
  //                 },
  //                 {
  //                   type: "input",
  //                   input: {
  //                     type: "number",
  //                     name: "totalProduct2",
  //                     // negativeValue: true,
  //                   },
  //                 },
  //                 {
  //                   type: "button",
  //                   button: {
  //                     type: "button",
  //                     label: "delete",
  //                     action: {
  //                       id: "removeProduct",
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

export default queries;
