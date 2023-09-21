import React, { useState } from "react";
import {styled} from "@mui/system"
import { Checkbox, FormControlLabel } from "@mui/material";
import theme from "../../../theme/index"

interface CheckboxProps{
    label?:string| React.ReactNode,
    isChecked?:boolean,
    onChange?:React.ChangeEventHandler<HTMLInputElement>
}

const MuiCheckbox = ({label,isChecked,onChange}:CheckboxProps) => {
  const [selected, setSelected] = useState(isChecked);
  const handleChange = (event: any) => {
    setSelected(event.target.checked);
    if(onChange){
      onChange(event)
    }
  };
  const CustomCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: ${theme.palette.accent.main};
    background: ${theme.palette.accent.main};
    border-radius: 4px;
    width:20px;
    height:20px;
  }
   &.Mui-checked {
     color: ${theme.palette.primary[500]};
   }
`;
    return(
    <FormControlLabel
            sx={{
            '& .MuiTypography-root': {
              paddingLeft: '9px'
            }
          }}
            control={
              <CustomCheckbox checked={selected} sx={{padding:"0px",border: selected ? "" : `1px solid ${theme.palette.stroke[100]}`}} onChange={handleChange} />
            }
            label={label}
            
          />
)}

export default MuiCheckbox;