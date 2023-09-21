import { Box, Grid } from "@mui/material";
import React from "react";
import MuiTypography from "../../atoms/typography";
import MuiButton from "../../atoms/button";
import {useNavigate} from "react-router-dom"
import {
  CLICK,
  HERE,
  LOGIN_AGAIN,
  RAMP_HEADING,
  SUCCESSFUL_LOGIN,
} from "../../../utils/constants";
import theme from "../../../theme/index";
import MuiIcons from "../../atoms/icon";
import Circle from "../../../../public/images/check-circle.svg";
const LogoutBody = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ marginTop: "56px",paddingLeft:"20px" }}>
      <Box>
        <MuiTypography
          sx={{
            color: theme.palette.highEmphasis.main,
            paddingLeft: "30px",
            paddingBottom: "40px",
          }}
          variant="h1"
          text={RAMP_HEADING}
        />
      </Box>
      <Box sx={{ maxWidth: "480px", maxHeight: "513px",boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.17)",
borderRadius: "4px"}}>
        <Grid container direction="column">
          <Grid item sx={{ paddingTop: "150px" }}>
            <Grid
              container
              direction="column"
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <MuiIcons alt="Not Found" src={Circle} />
              </Grid>
              <Grid item sx={{ paddingLeft: "95px" }}>
                <MuiTypography
                  text={SUCCESSFUL_LOGIN}
                  variant="subtitle2"
                  sx={{ color: theme.palette.highEmphasis.main }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ paddingTop: "160px", paddingLeft: "158px" }}>
            <MuiButton
            testId="button"
            onClick={()=>{navigate("/signin")}}
              text={
                <Box>
                  <MuiTypography
                    text={CLICK}
                    variant="body2"
                    sx={{
                      color: theme.palette.lowEmphasis.main,
                      display: "inline",
                    }}
                  />
                  <MuiTypography
                    text={HERE}
                    variant="body2"
                    sx={{
                      color: theme.palette.primary[500],
                      display: "inline",
                    }}
                  />
                  <MuiTypography
                    text={LOGIN_AGAIN}
                    variant="body2"
                    sx={{
                      color: theme.palette.lowEmphasis.main,
                      display: "inline",
                    }}
                  />
                </Box>
              }
            />
            <Box sx={{paddingTop:"21px"}}></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogoutBody;
