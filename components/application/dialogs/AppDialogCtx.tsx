import React, { createContext, useReducer, useContext } from "react";

interface ICtxProps {
  state: TAppDialogState;
  dispatch: ({ type }: TAction) => void;
}

export type TAppDialogState = {
  open?: boolean;
  data?: { [key: string]: any };
};

type TAction = { type: string; payload?: TAppDialogState };

const AppDialogCtx = createContext({} as ICtxProps);

type TProps = {
  children: React.ReactElement;
};

export const OPEN_APP_DIALOG = "open";
export const CLOSE_APP_DIALOG = "close";
export const SET_APP_DIALOG = "set";

const initialState: TAppDialogState = {
  open: false,
};

function reducer(state: TAppDialogState = initialState, action: TAction) {
  switch (action.type) {
    case SET_APP_DIALOG:
      return {
        ...state,
        ...action.payload,
      };
    case OPEN_APP_DIALOG:
      return {
        ...action.payload,
        open: true,
      };
    case CLOSE_APP_DIALOG:
      return {
        open: false,
      };
    default:
      throw new Error();
  }
}

export const AppDialogProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppDialogCtx.Provider value={{ state, dispatch }}>
      {children}
    </AppDialogCtx.Provider>
  );
};

export const useAppDialogCtx = () => {
  const contextValue = useContext(AppDialogCtx);
  return contextValue;
};

// export const withAppDialogProvider =
//   <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
//   (props) =>
//     (
//       <AppDialogProvider>
//         <Component {...(props as P)} />
//       </AppDialogProvider>
//     );
