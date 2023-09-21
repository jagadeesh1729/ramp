import React, { ReactNode } from "react";
import { Typography } from "@mui/material";


interface TypographyProps{
    variant?:"h1"
    | "h2"
    |"subtitle1"
    |"subtitle2"
    |"subtitle3"
    |"body1"
    |"body2"
    |"body3"
    |"caption1"
    |"caption2",
    text:ReactNode,
    sx?: object,
    testId?:string,
}

const MuiTypography = ({variant,sx,text,testId}:TypographyProps) => (
  <Typography data-testid={testId} variant={variant} sx={sx}>{text}</Typography>
)

export default MuiTypography;
