import { Button as MuiButton, CardActionArea } from "@mui/material";

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
  const handleAction = () => {
    console.log(action);
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
