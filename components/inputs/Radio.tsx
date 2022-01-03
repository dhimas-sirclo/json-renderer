import {
  Box,
  Radio as MuiRadio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useField } from "formik";
import { startCase } from "lodash";

export interface RadioProps {
  name: string;
  label?: string;
  options?: RadioOption[];
}

export interface RadioOption {
  label: string;
  value: string;
}

export default function Radio({ name, label, options = [] }: RadioProps) {
  const [input, meta, helpers] = useField(name);

  return (
    <>
      <FormControl
        error={Boolean(meta.error)}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">{label ?? startCase(name)}</FormLabel>
        <RadioGroup {...input}>
          {options.map((option, key) => {
            return (
              <FormControlLabel
                key={key}
                control={<MuiRadio />}
                label={option.label}
                value={option.value}
              />
            );
          })}
        </RadioGroup>
        {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
      </FormControl>
    </>
  );
}
