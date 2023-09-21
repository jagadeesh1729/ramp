import React, { ReactElement, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/system";
import theme from "../../../theme/index";
import MuiBanner from "../../molecules/banner";
import MuiTypography from "../../atoms/typography";
import DropdownIcon from "../../../../public/images/dropdown.svg"
import MuiIcons from "../../atoms/icon";
import { Box } from "@mui/material";

interface DropDownProps {
  label: string;
  menuItems?:string[];
  sx?: object;
  width?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  value?: string;
  isPopover?: boolean;
  selectedTransaction?: string | null;
  bannerOnClick?: () => void;
  ref?: React.RefObject<HTMLSelectElement>;
}
const StyleFormControl = styled(FormControl)({
  ".css-dgjoae-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
    borderRadius: "8px",
  },
  ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "6px 8px",
  },
});
const menuPaperStyles = {
  ".css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
    color: theme.palette.lowEmphasis.main,
    borderRadius: "6px",
    border: `1px solid ${theme.palette.stroke[100]}`,
    boxShadow:
      "0px 15px 35px rgba(60, 66, 87, 0.08), 0px 5px 15px rgba(0, 0, 0, 0.12)",
  },
};
const CustomIcon = (): ReactElement => <Box style={{ paddingRight: '8px' }}>
<MuiIcons src={DropdownIcon} alt="not found icon" />
</Box>

const DropDown = ({
  label,
  menuItems,
  onChange,
  sx,
  width,
  value,
  isPopover,
  selectedTransaction,
  bannerOnClick,
  ref,
}: DropDownProps): ReactElement => {
  const [str, setStr] = React.useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleChange = (event: SelectChangeEvent<string>) => {
    setIsPopoverOpen(true);
    setStr(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <>
      <StyleFormControl
        sx={{
          width,
          ...sx,
        }}
      >
        {str === "" && (
          <InputLabel
            sx={{
              top: "-10px",
              left:"-5px",
              color: `${theme.palette.lowEmphasis}`,
              fontSize: "14px",
              fontWeight: "400",
            }}
            shrink={false}
          >
            {label}
          </InputLabel>
        )}
        <Select
          data-testid="dropdown"
          value={value}
          onChange={handleChange}
          IconComponent={CustomIcon}
          MenuProps={{ sx: menuPaperStyles }}
          ref={ref}
        >
          {menuItems?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </StyleFormControl>
      {isPopoverOpen && isPopover ? (
        <MuiBanner
          buttonText={
            <MuiTypography
              text="Create rule"
              variant="body2"
              sx={{ color: theme.palette.mediumEmphasis.main }}
            />
          }
          description={
            <MuiTypography
              sx={{ color: theme.palette.lowEmphasis.main }}
              text={`Save ${str} as the default Quickbooks category for all the future and unsynced transactions from ${selectedTransaction}`}
            />
          }
          open={isPopoverOpen}
          isClose={true}
          title={
            <MuiTypography
              sx={{ color: theme.palette.highEmphasis.main }}
              text="Save time with a merchant Rule"
              variant="body2"
            />
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClick={bannerOnClick}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default DropDown;
