import {styled} from "@mui/system"
import { Box } from "@mui/material"
import theme from "../../../theme";

export const UserData = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
  });
export const SearchPanel = styled(Box)({
    top: "50px",
    position:"absolute",
    backgroundColor: `${theme.palette.accent.main}`,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    width: "588px",
    overflowY: "auto",
    zIndex: 1,
    display: "flex",
    height: "171px",
    flexDirection: "column",
    gap: "15px",
  });
export const Tips = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "26px",
    height: "42px",
    gap: "4px",
    background: `${theme.palette.structural[50]}`,
  });
export const Body = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"38px",
    paddingLeft:"40px"
})
export const LowerBody = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"25px",
    maxWidth:"1246px",
})
export const SearchStack = styled("div")({
    display:"flex",
    justifyContent:'space-between',
    padding:'36px 0px 0px'
})

export const BarStack = styled("div")({
    display:"flex",
    flexDirection:'row',
    alignContent:'flex-start',
    alignItems:'center',
    padding: '3px 8px 5px',
    gap:'8px'
})
export const TopBody = styled("div")({
    display:"flex",
    flexDirection:"column",
    gap:"12px",
})
export const SearchBarStack = styled("div")({
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap:'10px',
    position:"relative"
})
export const BoxStack = styled("div")({
    display:"flex",
    flexDirection:'row',
    alignItems:'flex-start',
    gap:"48px",
})
export const TextStack = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
})
export const Buttonsstyle = styled("div") ({
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:'12px',
})
export const FooterStack = styled("div")({
    padding:'12px 0px'
})
export const DraftButtonStyles = styled("div") ({
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:"16px"
})
export const ReviewStyles = styled("div") ({
    display:"flex",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:'12px'
})
