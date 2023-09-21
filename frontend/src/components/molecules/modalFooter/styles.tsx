import { Box } from "@mui/material"
import {styled} from "@mui/system"
import theme from "../../../theme/index"

export const Stack = styled(Box)({
    boxSizing:"border-box",
    background:`${theme.palette.accent.main}`,
    borderTop:`1px solid ${theme.palette.stroke[100]}`,
    borderRadius:"0px 0px 6px 6px",
    order:2,
    maxWidth:"516px",
    height:"60px",
    display:"flex",
    justifyContent:"flex-end"
})

export const ButtonStack = styled("div")({
    display:"flex",
    alignItems:"flex-start",
    gap:'12px',
    padding:"14px 20px 14px ",
})