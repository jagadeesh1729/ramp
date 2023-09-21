import { Box, Grid, Popover, PopoverOrigin } from "@mui/material";
import React, { useState } from "react";
import MuiTypography from "../../atoms/typography";
import MuiButton from "../../atoms/button";
import MuiIcons from "../../atoms/icon";
import Info from "../../../../public/images/info.svg";
import theme from "../../../theme/index";
import Close from "../../../../public/images/cancel.svg"
interface BannerProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonText: string | React.ReactNode;
  isClose?:boolean;
  open:boolean;
  anchorOrigin?:PopoverOrigin;
  transformOrigin?:PopoverOrigin;
  onClick?:()=>void;
  sx?:object;
}
const MuiBanner = ({ title, description, buttonText,isClose,open,anchorOrigin,transformOrigin ,onClick,sx}: BannerProps) => {
  const [anchorEl, setAnchorEl] = useState(open);
  const handleClose = () => {
    setAnchorEl(false);
  };
  return (
    <Box sx={sx}>
      <Popover 
       open={Boolean(anchorEl)}
  onClose={handleClose}
  anchorOrigin={anchorOrigin}
  transformOrigin={transformOrigin}
      >
      <Grid
        container
        direction="column"
        sx={{
          border: `1 px solid ${theme.palette.neutral[100]}`,
          borderRadius: "4px",
          maxWidth:isClose===false?"520px":"370px"
        }}>
        <Grid item>
          <Grid
            container
            gap={2}
            sx={{ paddingLeft: "16px", paddingTop: "23px" }}
          >
            <Grid item sx={{ paddingTop: "2px" }}>
              <MuiIcons src={Info} alt={"info"} />
            </Grid>
            <Grid item sx={{ maxWidth:isClose===false?"448px":"228px",paddingRight:isClose?"0px":"16px", }}>
              <MuiTypography text={title} />
              <MuiTypography text={description} />
            </Grid>
            {isClose? <Grid item  sx={{paddingRight:"16px"}}>
              <MuiButton testId="buttonClose" text={<MuiIcons src={Close} alt="not found"/>} onClick={handleClose}/>
          </Grid>:<></>}
           
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            paddingLeft: "40px",
            paddingTop: "17px",
            paddingBottom: "16px",
          }}
          xs={6}
        >
          <MuiButton text={buttonText} variant="contained" onClick={onClick}
          sx={{
            color: theme.palette.mediumEmphasis.main,
            background: theme.palette.accent.main,
            borderRadius: "4px", 
            boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)',"&:hover": {backgroundColor:theme.palette.accent.main}
          }}
            />
        </Grid>

      </Grid>
      </Popover>
    </Box>
  );
};

export default MuiBanner; 
