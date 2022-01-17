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

import {
  useAppDialogCtx,
  CLOSE_APP_DIALOG,
  OPEN_APP_DIALOG,
} from "./AppDialogCtx";
import BlocksBuilder from "../blocks/BlocksBuilder";
import { useExecuteActionMutation } from "../../../graphql";

export default function AppDialog() {
  const { state, dispatch } = useAppDialogCtx();

  const [executeAction] = useExecuteActionMutation({
    onCompleted: (data) => {
      console.log(data);
      dispatch({
        type: OPEN_APP_DIALOG,
        payload: {
          data: data.executeAction ?? undefined,
        },
      });
    },
  });

  const handleClose = () => {
    dispatch({
      type: CLOSE_APP_DIALOG,
    });
  };

  const handleClick = (type: string, id?: string) => () => {
    switch (type) {
      case "cancel":
        handleClose();
        break;
      case "button":
        if (!id) return;
        executeAction({
          variables: {
            input: {
              action: id,
              appId: "sirclo-store-v2",
              brandId: "chat",
              channel: "channel",
              roomId: "room",
              tenantId: "chat",
            },
          },
        });
        break;
      default:
        break;
    }
  };

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
          executeAction({
            variables: {
              input: {
                action: "searchProduct",
                appId: "sirclo-store-v2",
                brandId: "chat",
                channel: "channel",
                data: JSON.stringify(values),
                roomId: "room",
                tenantId: "chat",
              },
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form
            onKeyDown={(keyEvent) => {
              if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
                keyEvent.preventDefault();
              }
            }}
          >
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
                      onClick={handleClick(button.type, button.action?.id)}
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
