export const data: { [key: string]: any } = {
  type: "dialog",
  title: { title: "Cari Produk" },
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
      type: "input",
      input: {
        type: "text",
        name: "firstName",
      },
    },
    {
      type: "input",
      input: {
        type: "text",
        name: "lastName",
      },
    },
    {
      type: "input",
      input: {
        type: "text",
        name: "address",
        label: "Alamat",
      },
    },
    {
      type: "input",
      input: {
        type: "password",
        name: "password",
      },
    },
    {
      type: "input",
      input: {
        type: "textarea",
        name: "textarea",
      },
    },
    {
      type: "input",
      input: {
        type: "select",
        name: "select",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
    {
      type: "input",
      input: {
        type: "checkbox",
        name: "checkbox",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
    {
      type: "input",
      input: {
        type: "radio",
        name: "radio",
        options: [
          {
            value: "option-1",
            label: "Option 1",
          },
          {
            value: "option-2",
            label: "Option 2",
          },
        ],
      },
    },
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
              name: "query",
              type: "text",
            },
          },
          {
            type: "button",
            button: {
              type: "submit",
              label: "Cari",
              action: {
                id: "searchProduct",
              },
            },
          },
        ],
      },
    },
  ],
};
