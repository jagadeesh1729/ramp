import React, { ReactNode } from "react"
import {ButtonStack,Stack} from "./styles"
import MuiButton from "../../atoms/button"
import theme from "../../../theme"
import MuiTypography from "../../atoms/typography"

interface ModalFooterProps{
    button1Text:ReactNode,
    button2Text:string,
    onClickButton1?:() => void,
    onClickButton2?:() => void,
    button1Disable?:boolean,
    button2Disable?:boolean,
    sx?:object,
}

const ModalFooter = ({button1Disable,button2Disable,sx,onClickButton1,onClickButton2,button1Text,button2Text}:ModalFooterProps) => {
    return(
        <Stack sx={sx}>
            <ButtonStack>
                <MuiButton text={<MuiTypography text={button1Text} sx={{color:theme.palette.mediumEmphasis.main}} />} onClick={onClickButton1} disabled={button1Disable} variant="contained" sx={{color: theme.palette.mediumEmphasis.main,
                            background: theme.palette.accent.main,
                            borderRadius: "4px",
                            "&:hover": {backgroundColor:theme.palette.accent.main},
                            boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)',padding:"8px 8px"}}/>
                <MuiButton text={button2Text} onClick={onClickButton2} disabled={button2Disable} variant="contained"/>
            </ButtonStack>
        </Stack>
    )
}

export default ModalFooter;