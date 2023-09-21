import {Box, styled} from "@mui/system"
import theme from "../../../theme/index"

export const Stack = styled(Box)({
    display:"flex",
    background:`${theme.palette.accent.main}`,
    flexDirection:"column",
    gap:"36px",
    order:1,
    maxWidth:"516px",
    maxHeight:"550px",
    overflowY: "scroll",
    scrollbarWidth: "none",
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

export const TextStack = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap:"4px",
    paddingTop:"16px",
    paddingLeft:"20px",
    maxWidth:"400px",
    paddingRight:"88px"
})

export const ComponentStack = styled(Box)({
    display:"flex",
    flexDirection:"column",
    gap:"16px",
    paddingLeft:"20px",
    paddingBottom:"101px"
})