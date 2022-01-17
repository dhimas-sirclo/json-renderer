import { useMutation } from "@apollo/client";
import { Button as MuiButton } from "@mui/material";
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
  // const [dialogAction] = useMutation(executeAction, {
  //   onCompleted(data) {},
  // });

  const handleAction = () => {
    if (!action) return;
    // dialogAction({
    //   variables: {
    //     input: {
    //       appId: "chat",
    //       tenantId: "chat",
    //       brandId: "chat",
    //       roomId: "chat",
    //       action: action.id,
    //     },
    //   },
    // });
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
