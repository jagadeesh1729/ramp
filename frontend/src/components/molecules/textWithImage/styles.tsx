import { Box } from "@mui/material"
import {styled} from "@mui/system"

export const Stack=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"8px",
    order:1,
})

export const LabelStack=styled("div")({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding:"2px 5.1875px 4px 0px",
    gap:"5px",
    order:1,
})