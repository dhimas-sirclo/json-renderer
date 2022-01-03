import { Box } from "@mui/material";
import CheckBox from "../inputs/Checkbox";
import Radio from "../inputs/Radio";
import TextField from "../inputs/TextField";

export interface BlocksBuilderProps {
  data: { [key: string]: any }[];
}

export default function BlocksBuilder({ data }: BlocksBuilderProps) {
  return (
    <Box display="flex" flexDirection="column">
      {data.map(({ type, input }, key) => {
        let children = <></>;
        switch (type) {
          case "input":
            switch (input.type) {
              case "text":
                children = <TextField fullWidth key={key} name={input.name} />;
                break;
              case "password":
                children = (
                  <TextField
                    fullWidth
                    key={key}
                    name={input.name}
                    type="password"
                  />
                );
                break;
              case "textarea":
                children = (
                  <TextField multiline key={key} name={input.name} fullWidth />
                );
                break;
              case "select":
                children = children = (
                  <TextField
                    select
                    key={key}
                    name={input.name}
                    fullWidth
                    options={input.options}
                  />
                );
                break;
              case "checkbox":
                children = (
                  <CheckBox
                    key={key}
                    name={input.name}
                    options={input.options}
                  />
                );
                break;
              case "radio":
                children = (
                  <Radio key={key} name={input.name} options={input.options} />
                );
                break;
              default:
                children = <></>;
                break;
            }
            break;
          case "display":
            children = <></>;
            break;
          case "layout":
            children = <></>;
            break;
          default:
            children = <></>;
            break;
        }

        return (
          <Box key={key} sx={{ margin: "10px 0px" }}>
            {children}
          </Box>
        );
      })}
    </Box>
  );
}
