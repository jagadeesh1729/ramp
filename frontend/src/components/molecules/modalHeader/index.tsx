import { Box } from "@mui/material"
import {styled} from "@mui/system"
import theme from "../../../theme/index"
import React from "react"
import MuiTypography from "../../atoms/typography"

interface ModalHeaderProps{
    text:string
}

const ModalHeader = ({text}:ModalHeaderProps) => {
    const Stack = styled(Box)({
        boxSizing:"border-box",
        background:`${theme.palette.accent.main}`,
        borderBottom:`1px solid ${theme.palette.stroke[100]}`,
        borderRadius:"6px 6px 0px 0px",
        padding:"16px 20px",
        maxWidth:"516px",
    })

    return(
        <Stack>
            <MuiTypography text={text} sx={{color:theme.palette.highEmphasis.main}} variant="body2" />
        </Stack>
    )
}

export default ModalHeader;