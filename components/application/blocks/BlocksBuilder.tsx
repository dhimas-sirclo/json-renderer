import { Box, Typography, TypographyVariant } from "@mui/material";
import Image from "next/image";

import CheckBox from "../inputs/Checkbox";
import Radio from "../inputs/Radio";
import TextField from "../inputs/TextField";
import Button from "../button/Button";

export interface BlocksBuilderProps {
  data: { [key: string]: any }[];
  direction?: "row" | "column";
}

export default function BlocksBuilder({
  data,
  direction = "column",
}: BlocksBuilderProps) {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      alignItems="center"
      width="100%"
    >
      {data.map(({ type, input, button, container, text, image }, key) => {
        let children = <></>;
        switch (type) {
          case "input":
            switch (input.type) {
              case "text":
                children = <TextField fullWidth key={key} name={input.name} />;
                break;
              case "number":
                children = (
                  <TextField
                    key={key}
                    name={input.name}
                    sx={{ width: 70, height: 40 }}
                    type="number"
                    InputProps={{
                      inputProps: {
                        min: input.negativeValue ? undefined : 0,
                      },
                    }}
                  />
                );
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
            let textType: TypographyVariant = "body1";
            switch (text.type) {
              case "heading":
                textType = "h6";
                break;
              default:
                if (text.type) textType = text.type;
                break;
            }
            children = (
              <Typography sx={{ fontWeight: text.weight }} variant={textType}>
                {text.body}
              </Typography>
            );
            break;
          case "image":
            children = (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 0}
                height={image.height ?? 0}
              />
            );
            break;
          case "container":
            return (
              <BlocksBuilder
                direction={container.direction}
                data={container.blocks}
              />
            );
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
                    marginBottom: "5px",
                    width: "100%",
                  }
                : { marginBottom: "5px" }
            }
          >
            {children}
          </Box>
        );
      })}
    </Box>
  );
}
