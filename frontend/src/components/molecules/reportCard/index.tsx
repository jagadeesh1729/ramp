import { Box, Grid } from "@mui/material";
import React from "react";
import MuiButton from "../../atoms/button";
import RightArrow from "../../../../public/images/right-arrow.svg";
import MuiIcons from "../../atoms/icon";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme/index"
interface ReportCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonText: string | React.ReactNode;
  textWithImage: React.ReactNode;
}
const MuiReportCard = ({
  title,
  description,
  buttonText,
  textWithImage,
}: ReportCardProps) => {
  return (
    <Box>
      <Grid container direction="column" sx={{ maxWidth: "276px" }} gap={0.1}>
        <Grid item>
          <MuiTypography
            sx={{ color: theme.palette.highEmphasis.main }}
            text={title}
            variant="subtitle2"
          />
        </Grid>
        <Grid item sx={{ maxWidth: "270px" }} paddingTop="8px" >
          <MuiTypography
            sx={{ color: theme.palette.mediumEmphasis.main, }}
            text={description}
            variant="subtitle3"
          />
        </Grid>
        <Grid item paddingTop="12px">{textWithImage}</Grid>
        <Grid item xs={6} paddingTop="12px">
          <MuiButton
            text={
              <MuiTypography
              text={buttonText}
              variant="body2"
              sx={{ color: theme.palette.primary[500], marginRight: "auto" }}
            />
            }
            endIcon={<MuiIcons src={RightArrow} alt={"not found"} />}
            sx={{
              paddingRight: "25px",
            }}
            variant="text"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiReportCard;
