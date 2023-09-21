import React from "react";
import {styled} from "@mui/system"
import MuiTypography from "../../atoms/typography";
import MuiButton from "../../atoms/button";
import theme from "../../../theme";

const Buttonsstyle = styled("div") ({
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap:'12px',
})
export const FooterStack = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})
interface Props {
    count:string,
}
const buttonTexts = ["Previous","Next"]
const Footer = ({count}:Props) =>{
    return(
        <FooterStack >
            <MuiTypography text={count} variant="body2" sx={{color:theme.palette.mediumEmphasis.main}} />
        <Buttonsstyle>
            {buttonTexts.map((id)=>(
                <MuiButton key={"id"} text={id} variant="contained"
                sx={{
                  color: theme.palette.mediumEmphasis.main,
                  background: theme.palette.accent.main,
                  borderRadius: "4px",
                  "&:hover": {backgroundColor: theme.palette.accent.main,},
                  boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)' }} />      
            ))}
        </Buttonsstyle>
        </FooterStack >
    )

}
export default Footer