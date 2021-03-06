import { Box, Typography, TypographyVariant } from "@mui/material";
import Image from "next/image";

import CheckBox from "../inputs/Checkbox";
import Radio from "../inputs/Radio";
import TextField from "../inputs/TextField";
import Button from "../button/Button";

export interface BlocksBuilderProps {
  data?: { [key: string]: any }[];
  direction?: "row" | "column";
}

export default function BlocksBuilder({
  data = [],
  direction = "column",
}: BlocksBuilderProps) {
  if (data.length == 0) {
    return <></>;
  }

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
                children = <TextField fullWidth key={key} {...input} />;
                break;
              case "number":
                children = (
                  <TextField
                    key={key}
                    {...input}
                    // sx={{ width: 70, height: 40 }}
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
                  <TextField fullWidth key={key} {...input} type="password" />
                );
                break;
              case "textarea":
                children = (
                  <TextField multiline key={key} fullWidth {...input} />
                );
                break;
              case "select":
                children = children = (
                  <TextField select key={key} fullWidth {...input} />
                );
                break;
              case "checkbox":
                children = <CheckBox key={key} {...input} />;
                break;
              case "radio":
                children = <Radio key={key} {...input} />;
                break;
              default:
                children = <></>;
                break;
            }
            break;
          case "button":
            children = (
              <Button key={key} action={button.action} type={button.type}>
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
              <Typography
                key={key}
                sx={{ fontWeight: text.weight }}
                variant={textType}
              >
                {text.body}
              </Typography>
            );
            break;
          case "image":
            children = (
              <Image
                key={key}
                src={image.src}
                alt={image.alt}
                width={image.width ?? 50}
                height={image.height ?? 50}
              />
            );
            break;
          case "container":
            return (
              <BlocksBuilder
                key={key}
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
