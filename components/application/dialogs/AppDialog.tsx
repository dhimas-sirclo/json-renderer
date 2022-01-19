import { useEffect, useState } from "react";
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

function getInitialValues(
  inObj: { [key: string]: any },
  outObj: { [key: string]: any }
): { [key: string]: any } {
  for (var property in inObj) {
    if (
      typeof inObj[property] !== "object" &&
      !Array.isArray(inObj[property])
    ) {
      continue;
    }

    // TODO: handle checkbox and fieldArray
    if (property === "input") {
      outObj[inObj[property].name] = inObj[property].value
        ? inObj[property].value
        : "";
      continue;
    }

    console.log(property, inObj[property]);

    outObj = { ...outObj, ...getInitialValues(inObj[property], outObj) };
  }
  return outObj;
}

export default function AppDialog() {
  const { state, dispatch } = useAppDialogCtx();

  const [executeAction] = useExecuteActionMutation({
    onCompleted: (data) => {
      console.log("data", data);
      dispatch({
        type: OPEN_APP_DIALOG,
        payload: {
          data: data.executeAction ?? undefined,
        },
      });
    },
  });

  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>(
    {}
  );

  useEffect(() => {
    console.log("initialValues", initialValues);
  }, [initialValues]);

  useEffect(() => {
    console.log("state", state);

    // reset
    setInitialValues({});

    const blocksTemp = state?.data?.blocks ?? [];

    // set
    setInitialValues(getInitialValues(blocksTemp, {}));
  }, [state]);

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
        initialValues={initialValues}
        enableReinitialize
        onSubmit={async (values, actions) => {
          const variables = {
            input: {
              action: state?.data?.action?.id ?? "",
              appId: "sirclo-store-v2",
              brandId: "chat",
              channel: "channel",
              data: JSON.stringify(values),
              roomId: "room",
              tenantId: "chat",
            },
          };
          console.log("variables", variables);
          executeAction({
            variables,
          });
          actions.resetForm();
        }}
      >
        {({ isSubmitting, values }) => {
          console.log("values", values);
          return (
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
          );
        }}
      </Formik>
    </Dialog>
  );
}
