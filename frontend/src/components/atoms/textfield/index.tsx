import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import { styled } from "@mui/system";
import React from 'react';
import theme from "../../../theme/index";
interface TextfieldProps {
    placeholder?:string,
    iconStart?:React.ReactNode,
    iconEnd?:React.ReactNode,
    name?:string,
    value?:string,
    onChange?: (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    sx?:object;
    onClick?:React.MouseEventHandler<HTMLDivElement>;
    type?:string;
    testId?:string;
    size?:"small" | "medium";
    search?:boolean;
    
}

export default function MuiTextfield({placeholder,size,iconStart,iconEnd,name,value,onChange,type,sx,onClick,testId,search}:TextfieldProps) {
  
  const StyleTextField = styled(TextField) ({
    input:{
      color:theme.palette.highEmphasis.main
    },
    '&.MuiTextField-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        border:`1px solid ${theme.palette.stroke[100]}`,
        borderRadius:search?"12px":"8px",
      },
      '& .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: theme.palette.lowEmphasis.main,
          opacity: 1,
        },
         '&.MuiInputBase-inputSizeSmall': {
          padding: '4.5px 0px',
        },
      },
      '.css-152mnda-MuiInputBase-input-MuiOutlinedInput-input':{
        padding: '6.5px 0px',
      },
      '.css-yo8b3e-MuiInputBase-root-MuiOutlinedInput-root':{
        padding:(iconStart || iconEnd)?'0px 14px':'0px',
      },
      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.stroke[100]}`,
      },
      '& .Mui-focused .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: 'transparent',
        },
      },
    }
  })
  return (
    <StyleTextField 
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    size={size}
    fullWidth
    onClick={onClick}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
            {iconStart}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{cursor: 'pointer'}}>
             {iconEnd}
            </InputAdornment>
          ),
        }}
        variant="outlined"
        data-testid={testId}
        sx={sx}
      /> 
  );
}