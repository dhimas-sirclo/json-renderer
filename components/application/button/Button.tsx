import { useMutation } from "@apollo/client";
import { Button as MuiButton } from "@mui/material";
import { useExecuteActionMutation } from "../../../graphql";
import { OPEN_APP_DIALOG, useAppDialogCtx } from "../dialogs/AppDialogCtx";
// import executeAction from "../../graphql/documents/applications/mutations/executeAction";

interface ButtonProps {
  type: "submit" | "button";
  action?: { id: string };
  children: JSX.Element;
}

export default function Button({
  type,
  action,
  children,
  ...props
}: ButtonProps) {
  const { dispatch } = useAppDialogCtx();
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

  const handleAction = () => {
    if (!action) return;
    const variables = {
      input: {
        appId: "sirclo-store-v2",
        tenantId: "chat",
        brandId: "chat",
        roomId: "room",
        channel: "channel",
        action: action.id,
      },
    };
    console.log("variables", variables);
    executeAction({
      variables,
    });
  };

  return (
    <MuiButton
      type={type}
      onClick={type === "button" ? handleAction : undefined}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
