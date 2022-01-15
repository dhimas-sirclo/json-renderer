import { createContext, useReducer } from "react";

export type TDialogContextProps = {
  state: any;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  type: "",
  title: { text: "", icon: "" },
  action: {
    id: "",
    buttons: [
      {
        type: "",
        label: "",
        action: {
          id: "",
        },
      },
      {
        type: "",
        label: "",
      },
    ],
  },
  blocks: [],
};

function reducer(state: any = initialState, action: any): any {
  switch (action.type) {
    case "SET_DIALOG":
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    default:
      return state;
  }
}

export const DialogContext = createContext({} as TDialogContextProps);

export const DialogProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  <DialogContext.Provider value={{ state, dispatch }}>
    {}
  </DialogContext.Provider>;
};
