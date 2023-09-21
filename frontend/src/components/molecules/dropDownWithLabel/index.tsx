/* eslint-disable react/display-name */
/* eslint-disable react/display-name */
import React from "react";
import MuiTypography from "../../atoms/typography";
import DropDown from "../../organisms/dropdown";
import { SelectChangeEvent, Stack } from "@mui/material";
import theme from '../../../theme/index';

interface DropdownWithLabelProps{
    label:string;
    text:string;
    itemsList?:any[];
    width?:string;
    onChange?:((event: SelectChangeEvent<string>) => void);
    value?:string;
    sx?:object;
    ref?: React.RefObject<HTMLSelectElement>;
}

const DropdownWithLabel = ({ label, text, itemsList, width, onChange, value, sx,ref }:DropdownWithLabelProps) => {
    return (
      <Stack>
        <MuiTypography text={label} variant='body2' sx={{ paddingBottom: '4px', color: theme.palette.mediumEmphasis }} />
        <DropDown label={text} menuItems={itemsList} width={width} onChange={onChange} value={value} sx={sx} ref={ref} />
      </Stack>
    );
};

export default DropdownWithLabel;
