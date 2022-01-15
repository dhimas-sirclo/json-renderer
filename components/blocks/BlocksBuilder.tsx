import { Box, Typography } from "@mui/material";
import CheckBox from "../inputs/Checkbox";
import Radio from "../inputs/Radio";
import TextField from "../inputs/TextField";
import Button from "../button/Button";

export interface BlocksBuilderProps {
  data: { [key: string]: any }[];
  direction?: "row" | "column";
}

export default function BlocksBuilder({ data, direction }: BlocksBuilderProps) {
  return (
    <Box display="flex" flexDirection={direction ? direction : "column"}>
      {data.map(({ type, input, button, container, text }, key) => {
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
          case "button":
            children = (
              <Button action={button.action} type={button.type}>
                {button.label}
              </Button>
            );
            break;
          case "text":
            children = <Typography>{text.body}</Typography>;
            break;
          case "container":
            return (
              <BlocksBuilder
                direction={container.direction}
                data={container.blocks}
              />
            );
          // case "display":
          //   children = <></>;
          //   break;
          // case "layout":
          //   children = <></>;
          //   break;
          default:
            children = <></>;
            break;
        }

        return (
          <Box
            key={key}
            sx={
              type !== "button"
                ? {
                    margin: "10px 0px",
                    width: "100%",
                  }
                : { margin: "10px 0px" }
            }
          >
            {children}
          </Box>
        );
      })}
    </Box>
  );
}
