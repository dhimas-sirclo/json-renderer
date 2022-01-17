import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik, Form } from "formik";

import { useAppDialogCtx, CLOSE_APP_DIALOG } from "./AppDialogCtx";
import { BlocksBuilder } from "../../index";
// import executeAction from "../../graphql/documents/applications/mutations/executeAction";

// const emails = ["username@gmail.com", "user02@gmail.com"];

// export interface AppDialogProps {
//   data: { [key: string]: any };
//   open: boolean;
//   onClose: () => void;
// }

// interface iData {
//   [key: string]: any;
// }

export default function AppDialog() {
  const {
    state: { open = false, data = {} },
    dispatch,
  } = useAppDialogCtx();

  // const [initialValues, setInitialValues] = useState<{ [key: string]: any }>(
  //   {}
  // );
  // const [dialogData, setDialogData] = useState(data);

  // const [action] = useMutation(executeAction, {
  //   onCompleted(data) {
  //     setDialogData(data.executeAction);
  //   },
  // });

  const initialValues = (data.blocks ?? []).reduce(
    (
      obj: { [key: string]: any },
      { type, input }: { type: string; input: { name: string; type: string } }
    ) => {
      if (type !== "input") {
        return obj;
      }
      return {
        ...obj,
        [input.name]: input.type === "checkbox" ? [] : "",
      };
    },
    {} as { [key: string]: any }
  );

  const handleClose = () => {
    dispatch({
      type: CLOSE_APP_DIALOG,
    });
  };

  const handleOnClick = (type: string, id?: string) => () => {
    switch (type) {
      case "cancel":
        handleClose();
        break;
      case "button":
        // action({
        //   variables: {
        //     input: {
        //       appId: "chat",
        //       tenantId: "chat",
        //       brandId: "chat",
        //       roomId: "chat",
        //       action: id,
        //     },
        //   },
        // });
        break;
      default:
        break;
    }
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <Formik<{ [key: string]: any }>
        initialValues={initialValues}
        onSubmit={async (values) => {
          // action({
          //   variables: {
          //     input: {
          //       appId: "chat",
          //       tenantId: "chat",
          //       brandId: "chat",
          //       roomId: "chat",
          //       action: dialogData.action.id,
          //       data: JSON.stringify(values),
          //     },
          //   },
          // });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>
              Test
              {/* {dialogData.title.text} */}
            </DialogTitle>
            <DialogContent>
              Test
              {/* <BlocksBuilder data={dialogData.blocks} /> */}
            </DialogContent>
            <DialogActions>
              Test
              {/* {dialogData.action.buttons.map(
                (button: { [key: string]: any }, i: number) => {
                  return (
                    <Button
                      key={i}
                      type={button.type === "cancel" ? "button" : button.type}
                      onClick={handleOnClick(button.type, button.action?.id)}
                      disabled={button.type === "submit" && isSubmitting}
                    >
                      {button.type === "submit" && isSubmitting
                        ? "Loading..."
                        : button.label}
                    </Button>
                  );
                }
              )} */}
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

// export interface DialogButtonProps {
//   data: { [key: string]: any };
// }

// export default function DialogButton({ data }: DialogButtonProps) {
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button color="primary" variant="contained" onClick={handleClick}>
//         Open App Dialog
//       </Button>
//       <AppDialog data={data} open={open} onClose={handleClose} />
//     </div>
//   );
// }
