import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik, Form } from "formik";

import { useAppDialogCtx, CLOSE_APP_DIALOG } from "./AppDialogCtx";
import BlocksBuilder from "../blocks/BlocksBuilder";

export default function AppDialog() {
  const { state, dispatch } = useAppDialogCtx();

  const handleClose = () => {
    dispatch({
      type: CLOSE_APP_DIALOG,
    });
  };

  // const handleClick = (type: string, id?: string) => () => {
  //   switch (type) {
  //     case "cancel":
  //       handleClose();
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <Dialog
      onClose={handleClose}
      open={state.open ?? false}
      fullWidth
      maxWidth="sm"
    >
      <Formik<{ [key: string]: any }>
        initialValues={(state?.data?.blocks ?? []).reduce(
          (
            obj: { [key: string]: any },
            {
              type,
              input,
            }: { type: string; input: { name: string; type: string } }
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
        )}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyItems="center"
              >
                <Avatar
                  src={state?.data?.title?.icon}
                  alt={state?.data?.title?.text}
                />
                {state?.data?.title?.text}
              </Box>
            </DialogTitle>
            <DialogContent>
              <BlocksBuilder data={state?.data?.blocks} />
            </DialogContent>
            <DialogActions>
              {(state?.data?.action?.buttons ?? []).map(
                (button: { [key: string]: any }, i: number) => {
                  return (
                    <Button
                      key={i}
                      type={button.type === "cancel" ? "button" : button.type}
                      // onClick={handleClick(button.type, button.action?.id)}
                      disabled={button.type === "submit" && isSubmitting}
                    >
                      {button.type === "submit" && isSubmitting
                        ? "Loading..."
                        : button.label}
                    </Button>
                  );
                }
              )}
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
