import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { BlocksBuilder } from "..";
import { Formik, Form, Field } from "formik";

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
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="sm">
      <Formik<Values>
        initialValues={initialValues}
        onSubmit={async (values) => {
          // TODO: call app mutation
          alert(
            JSON.stringify(
              { actionId: data.action.id, data: JSON.stringify(values) },
              null,
              2
            )
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>App Title</DialogTitle>
            <DialogContent>
              <BlocksBuilder data={data.blocks} />
            </DialogContent>
            <DialogActions>
              {data.action.buttons.map(
                (action: { [key: string]: any }, i: number) => {
                  return (
                    <Button
                      key={i}
                      type={action.type === "cancel" ? "button" : action.type}
                      onClick={action.type === "cancel" ? onClose : undefined}
                      disabled={action.type === "submit" && isSubmitting}
                    >
                      {action.type === "submit" && isSubmitting
                        ? "Loading..."
                        : action.label}
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
