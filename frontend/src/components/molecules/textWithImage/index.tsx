import {LabelStack,Stack} from "./styles"
import React from "react"
import MuiImage from "../../atoms/image"
import MuiTypography from "../../atoms/typography"
import theme from "../../../theme"

interface TextWithImageProps{
    img:string,
    text:string,
    savings:string
}

const TextWithImage = ({img,savings,text}:TextWithImageProps) => {
    return(
        <Stack>
            <MuiImage src={img} alt="image not found" />
            <LabelStack>
                <MuiTypography text={text} variant="caption2" sx={{color:theme.palette.mediumEmphasis.main}} />
                <MuiTypography text={savings} variant="subtitle2" sx={{color:theme.palette.accent.green100}} />
            </LabelStack>
        </Stack>
    )
}

export default TextWithImage;