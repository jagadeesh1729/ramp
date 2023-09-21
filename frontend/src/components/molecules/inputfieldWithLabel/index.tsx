import React, { ChangeEvent } from "react";
import MuiTextfield from "../../atoms/textfield";
import MuiTypography from "../../atoms/typography";
import { Stack, Box } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../theme";

interface TextFieldWithLabelProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  sx?: object;
  name?: string;
  value?:string;
  iconStart?: React.ReactNode;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick?:React.MouseEventHandler<HTMLDivElement>;
  iconEnd?:React.ReactNode
}

const StyleBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flext-start",
  gap: "4px",
});
const StyleStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
});

const TextFieldWithLabel = ({
  label,
  placeholder,
  icon,
  name,
  onChange,
  value,
  sx,
  iconStart,
  onClick,
  iconEnd
}: TextFieldWithLabelProps) => {
  return (
    <StyleBox>
      <MuiTypography
        text={label}
        variant="body2"
        sx={{ color: theme.palette.mediumEmphasis.main }}
      />
      <StyleStack>
        <MuiTextfield
          placeholder={placeholder}
          name={name}
          size="small"
          onChange={onChange}
          sx={{cursor:'pointer',...sx}}
          value={value}
          iconStart={iconStart}
          onClick={onClick}
          iconEnd={iconEnd}
        />
        {icon}
      </StyleStack>
    </StyleBox>
  );
};

export default TextFieldWithLabel;