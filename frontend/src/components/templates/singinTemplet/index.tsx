import { Grid } from "@mui/material"
import React, { ReactNode } from "react"
import Ramp from "../../../../public/images/ramp.svg"

interface SiginProps{
    body?:ReactNode
}

const SigninTemplate = ({body}:SiginProps)=>{
    return(
        <Grid container  paddingLeft="35%" sx={{
            backgroundImage: `url(${Ramp})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition:'center',
            height:'100vh'
          }} >
            <Grid item xs={6} sx={{overflow:"hidden",maxHeight:'100vh'}}>
                {body}
            </Grid>
        </Grid>
    )
}
export default SigninTemplate;