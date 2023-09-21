import React from "react";
interface ImageProps {
    src:string ,
    alt:string | undefined,
    width?: string
    height?: string
    testId?:string
    sx?:object
}
const MuiImage = ({src,alt,height,width,testId,sx}:ImageProps) => {
    return  <img src={src} data-testid={testId} alt={alt} width={width} height={height} style={sx}/>
}
export default MuiImage