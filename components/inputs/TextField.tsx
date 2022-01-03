import { useField } from "formik";
import { MenuItem, TextField as MuiTextField } from "@mui/material";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { startCase } from "lodash";

type TextFieldProps = MuiTextFieldProps & {
  name: string;
  label?: string;
  options?: SelectOption[];
};

interface SelectOption {
  label: string;
  value: string;
}

export default function TextField({
  name,
  select = false,
  label,
  options = [],
  ...props
}: TextFieldProps) {
  const [input, meta, helpers] = useField(name);

  return (
    <>
      <MuiTextField
        label={label ?? startCase(name)}
        select={select}
        {...props}
        {...input}
      >
        {select &&
          (options ?? []).map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </MuiTextField>
    </>
  );
}
