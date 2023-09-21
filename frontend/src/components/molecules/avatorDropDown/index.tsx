/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React, {  Dispatch, SetStateAction, useContext} from "react";
import theme from "../../../theme/index";
import MuiTypography from "../../atoms/typography/index";
import MuiIcons from "../../atoms/icon";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../templates/rampDashBoard";

const MenuStyleList = styled(ListItem)({
  whiteSpace:"nowrap",
  color: theme.palette.mediumEmphasis.main,
  maxWidth: "200px",
  "& .MuiListItemIcon-root": {
    minWidth: "30px",
  },
});
interface Prop  {
  icon: string;
  text: string | undefined;
  isHeading?: boolean;
  route?: string;
}
interface ListProp  {
  data: Array<Prop>;
  handleClose?:()=>void;
}
const AvatorDropDown = ({ data,handleClose}: ListProp) => {
  const navigate = useNavigate();

  const {showModal,setShowModal} = useContext<{showModal:boolean, setShowModal:Dispatch<SetStateAction<boolean>>}>(UserContext);
  return (
<Box>
  <List>
    {data.map((menuItem, index) => {
      const isHeading = menuItem.isHeading;
      const isTextItem = menuItem.icon === "-1";
      const isClickable = isTextItem && (index === 1 || showModal);
      const listItemButtonProps = {
        sx: {
          maxHeight:"24px",
           padding: isTextItem ? "0px" : "0px 0px 0px 18px",
          marginLeft: "0px",
        },
        onClick: isClickable ? () => {
          setShowModal(true);
          handleClose && handleClose();
        } : () => {
          if (menuItem.route && menuItem.route !== "/") {
            navigate(menuItem.route);
          }
          handleClose && handleClose();
        }
      };

      return (
        <MenuStyleList disablePadding key={menuItem.icon}>
          {isTextItem ? (
            <ListItemText sx={{ marginLeft: "18px", marginRight: "18px" }}>
              {isHeading ? (
                <MuiTypography
                  variant="caption1"
                  text={menuItem.text}
                  sx={{ color: theme.palette.lowEmphasis.main }}
                />
              ) : (
                <ListItemButton {...listItemButtonProps}>
                  <MuiTypography variant="body2" text={menuItem.text} />
                </ListItemButton>
              )}
            </ListItemText>
          ) : (
            <ListItemButton {...listItemButtonProps}>
              <ListItemIcon>
                <MuiIcons
                  src={menuItem.icon}
                  alt="not found"
                  style={{ fontSize: "7px" }}
                />
              </ListItemIcon>
              <ListItemText>
                <MuiTypography variant="body2" text={menuItem.text} />
              </ListItemText>
            </ListItemButton>
          )}
        </MenuStyleList>
      );
    })}
  </List>
</Box>



  
  );
};

export default AvatorDropDown;