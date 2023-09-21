import { Box, Button, Popover, styled } from "@mui/material";
import React from "react";
import Profile from "../../../../public/images/profile.svg";
import AvatorDropDown from "../../molecules/avatorDropDown/index";
import MuiIcons from "../../atoms/icon";
import theme from "../../../theme/index";
import {
  AVATAR_POP_OVER_DATA_WITHOUT_ICONS,
  AVATAR_POP_OVER_DATA_WITH_ICONS,
} from "../../../utils/constants";
const MuiPopOver = styled(Popover)({
  "& .MuiPopover-paper": {
    backgroundColor: theme.palette.accent.main,
    border: `1px solid ${theme.palette.stroke[100]}`,
    boxShadow: "0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)",
borderRadius:"6px",
  },

});
const Divider = styled("hr")({
  width: "186px",
  height: "0px",
  backgroundColor: theme.palette.stroke[100],
  margin: "0 5px",
});

const AvatorPopOver = () => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {    
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <Button onClick={handleClick} data-testid="avatar-button">
        <MuiIcons alt="Not Found" src={Profile} />
      </Button>
      <MuiPopOver
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose} 
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        data-testid="backdrop"
      >
        <AvatorDropDown data={AVATAR_POP_OVER_DATA_WITHOUT_ICONS}  handleClose={handleClose} />
        <Divider />
        <AvatorDropDown data={AVATAR_POP_OVER_DATA_WITH_ICONS} handleClose={handleClose}/>
      </MuiPopOver>
    </Box>
  );
};

export default AvatorPopOver;
