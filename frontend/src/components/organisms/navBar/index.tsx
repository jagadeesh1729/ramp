import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MuiButton from "../../atoms/button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiTypography from "../../atoms/typography";
import theme from "../../../theme/index";
import { Menu, MenuItem, styled } from "@mui/material";
import { NAVBAR_DATA } from "../../../utils/constants";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Action = styled(BottomNavigationAction)({
  whiteSpace:"nowrap",
  display: "flex",
  maxWidth: "123px",
  ".MuiTypography-root":{
    paddingLeft:"10px"
  },
  ".Mui-selected": {
    backgroundColor: theme.palette.primary[500],
    borderRadius: "40px",
    ".MuiTypography-root": {
      color: theme.palette.accent.main,
    },
    "& .MuiButton-endIcon .MuiSvgIcon-root": {
      color: theme.palette.accent.main,
    },
  },
  ".css-a79fpn-MuiSvgIcon-root":{
    paddingTop:"3px",
  },
  ".css-9tj150-MuiButton-endIcon":{
    margin:"0px"
  }
});
const MuiMenuItem=styled(MenuItem)({
  maxHeight:"32px",
  minWidth:"154px",
  borderRadius:"4px",
  paddingTop:"1px",
  marginRight:"5px",
  marginLeft:"5px",
  "&.Mui-selected": {
     backgroundColor:theme.palette.primary[500],
     "&	.MuiTypography-root":{
      color:theme.palette.accent.main,
     },
  },
  "&.MuiMenuItem-root":{
    minWidth:"154px",
    paddingLeft:"2px"
  },
 

})
const MuiBottomNavigation = styled(BottomNavigation)({
  display: "flex",
  justifyContent: "flex-start",
  padding: "0",
});

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleDropdownClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
    subIndex?: number
  ) => {
    setSelected(subIndex ?? index);
    handleDropdownClose();
  };
  const handleNavigation = (newValue: number, selected: number, navigate: any) => {
    const url = NAVBAR_DATA[newValue].routes;
    const urlMenu = NAVBAR_DATA[newValue]?.menu?.find((item) => item.hasOwnProperty("route"))?.route;
    const selectedMenuName = NAVBAR_DATA[newValue]?.menu?.[selected]?.name.toLowerCase().toString();
    if(urlMenu &&  "/"+selectedMenuName==urlMenu){
      navigate(urlMenu)
    } else {
      navigate(url);        
    }
     setValue(newValue);
  }
  React.useEffect(() => {
    const index = NAVBAR_DATA.findIndex(
      (item) => item.routes.toLowerCase() == location.pathname
    );
    if(location.pathname=="/payments")
      setValue(6)
      else
    setValue(index);
  }, [location.pathname]);
  React.useEffect(() => {
    const index = NAVBAR_DATA.findIndex(
      (item) => item.routes.toLowerCase() == location.pathname
    );
    const selectedMenuName = NAVBAR_DATA[index]?.menu?.[selected]?.name.toLowerCase().toString();
    if (selectedMenuName=="payments") {
      navigate("/" + selectedMenuName);
    }
  }, [selected]);

  return (
    <>
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
           handleNavigation(newValue, selected, navigate);
         
        }}
        sx={{ paddingLeft: "25px" }}
      >
        {NAVBAR_DATA.map((text, index) =>
          index != NAVBAR_DATA.length - 1 ? (
            <Action
              key={text.name}
              label={
                <>
                  <MuiButton
                    endIcon={<ExpandMoreIcon sx={{color:theme.palette.highEmphasis.main}} />}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={text.menu ? handleDropdownClick : () => {}}
                    text={
                      <MuiTypography
                        text={text.name}
                        variant="body2"
                        sx={{ color: theme.palette.highEmphasis.main }}
                      />
                    }
                  />
                  {text.menu ? (
                    <Menu
                    data-testid="menu"
                      id={`menu-${text.name}`}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleDropdownClose}
                      sx={{padding:"4px"}}
                    >
                      {text.menu?.map((item, subIndex) => (
                        <MuiMenuItem
                        data-testid={`${item.name}`}
                          key={item.name}
                          onClick={(event) => {
                             handleMenuItemClick(event, index, subIndex);
                         
                          }}
                          selected={subIndex === selected}
                        >
                          <MuiTypography text={item.name} variant="body2" sx={{color:theme.palette.lowEmphasis.main}}/>
                        </MuiMenuItem>
                      ))}
                    </Menu>
                  ) : (
                    ""
                  )}
                </>
              }
            />
          ) : (
            <Action
              sx={{
                maxWidth: "150px",
                marginLeft: "auto",
                marginRight: "80px",
              }}
              key={text.name}
              label={
                <MuiButton
                  endIcon={<ExpandMoreIcon sx={{color:theme.palette.highEmphasis.main}}/>}
                  text={
                    <MuiTypography
                      text={text.name}
                      variant="body2"
                      sx={{ color: theme.palette.highEmphasis.main }}
                    />
                  }
                />
              }
            />
          )
        )}
      </MuiBottomNavigation>
    </>
  );
};

export default NavBar;
