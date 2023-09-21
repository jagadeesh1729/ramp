import React from "react";
import MuiTypography from "../../atoms/typography";
import { Box, Stack } from "@mui/material";
import { styled } from '@mui/system';
import theme from "../../../theme/index";

interface TextWithIconProps{
    text1:string;
    text2:string|number;
    icon?:React.ReactNode;
    variant1:"h1" | "h2"|"subtitle1"|"subtitle2"|"subtitle3"|"body1"|"body2"|"body3"|"caption1"|"caption2";
    variant2:"h1" | "h2"|"subtitle1"|"subtitle2"|"subtitle3"|"body1"|"body2"|"body3"|"caption1"|"caption2";
    color?:string;
}
const StyleBox = styled(Box)({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'8px'
})
const Stack1 = styled(Stack) ({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    minWidth:'112px'
})
const TextWithIcon = ({text1, text2, icon, variant1, variant2, color}:TextWithIconProps) => {
    return(
        <StyleBox>
            <Stack1>
                <MuiTypography text={text1} variant={variant1} sx={{color:theme.palette.highEmphasis}} />
                <MuiTypography text={text2} variant={variant2} sx={{color}} />
            </Stack1>
            <Stack>
                {icon}
            </Stack>
        </StyleBox>
    )
}
export default TextWithIcon;