import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";

import { BlocksBuilder } from "..";
import executeAction from "../../graphql/documents/applications/mutations/executeAction";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface AppDialogProps {
  data: { [key: string]: any };
  open: boolean;
  onClose: () => void;
}

interface Values {
  [key: string]: any;
}

function AppDialog({ data, onClose, open }: AppDialogProps) {
  const [dialogData, setDialogData] = useState(data);

  const [action] = useMutation(executeAction, {
    onCompleted(data) {
      setDialogData(data.executeAction);
    },
  });

  const initialValues = data.blocks.reduce(
    (
      obj: Values,
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
    {} as Values
  );

  const handleOnClick = (type: string, id?: string) => () => {
    switch (type) {
      case "cancel":
        onClose();
        break;
      case "button":
        action({
          variables: {
            input: {
              appId: "chat",
              tenantId: "chat",
              brandId: "chat",
              roomId: "chat",
              action: id,
            },
          },
        });
        break;
      default:
        break;
    }
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="sm">
      <Formik<Values>
        initialValues={initialValues}
        onSubmit={async (values) => {
          action({
            variables: {
              input: {
                appId: "chat",
                tenantId: "chat",
                brandId: "chat",
                roomId: "chat",
                action: dialogData.action.id,
                data: JSON.stringify(values),
              },
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>{dialogData.title.text}</DialogTitle>
            <DialogContent>
              <BlocksBuilder data={dialogData.blocks} />
            </DialogContent>
            <DialogActions>
              {dialogData.action.buttons.map(
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
              )}
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export interface DialogButtonProps {
  data: { [key: string]: any };
}

export default function DialogButton({ data }: DialogButtonProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleClick}>
        Open App Dialog
      </Button>
      <AppDialog data={data} open={open} onClose={handleClose} />
    </div>
  );
}
