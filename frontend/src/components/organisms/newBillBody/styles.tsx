import {styled} from "@mui/system"
import theme from "../../../theme"

export const Stack = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    maxHeight:"408px",
    padding:"8px",
    overflowY: "scroll",
    scrollbarWidth: "none",
    borderBottom:`1px solid ${theme.palette.stroke[50]}`,
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
})

export const LowerStack = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"8px",
    padding:"8px",  
})

export const BoxStack = styled("div")({
    display:"flex",
    gap:"9px"
})

export const BodyStack = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"32px"
})

export const DualStack1 = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"12px"
})

export const DualStack2 = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"16px"
})

export const FieldStack = styled("div")({
    maxWidth:"351px",
    display:"flex",
    flexDirection:"column",
    gap:"16px",
    padding:"10px"
})

export const Card = styled("div")({
    display:"flex",
    gap:"8px",
    padding:"16px"
})