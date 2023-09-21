import { Box } from "@mui/material"
import {styled} from "@mui/system"
import theme from "../../../theme/index"

export const Stack = styled(Box)({
    background:`${theme.palette.accent.main}`,
    border:`1px solid ${theme.palette.accent.blue100}`,
    width:"25vw",
    height:"516px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

export const IconStack = styled("div")({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"17.81px",
    padding:"222.81px 108px",
    whiteSpace:"nowrap"
})