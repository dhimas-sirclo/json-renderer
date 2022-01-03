import {
  Box,
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useField } from "formik";
import { startCase } from "lodash";

export interface CheckBoxProps {
  name: string;
  label?: string;
  options?: CheckBoxOption[];
}

export interface CheckBoxOption {
  label: string;
  value: string;
}

export default function CheckBox({ name, label, options = [] }: CheckBoxProps) {
  const [input, meta, helpers] = useField(name);

  return (
    <>
      <FormControl
        error={Boolean(meta.error)}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">{label ?? startCase(name)}</FormLabel>
        <FormGroup>
          {options.map((option, key) => {
            return (
              <FormControlLabel
                key={key}
                control={<MuiCheckbox {...input} value={option.value} />}
                label={option.label}
              />
            );
          })}
        </FormGroup>
        {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
      </FormControl>
    </>
  );
}
