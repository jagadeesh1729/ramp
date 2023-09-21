import React from 'react'
import { ButtonProps } from "./ButtonProps"
import { Box, Button} from '@mui/material';
import { styled } from "@mui/system";
import theme from "../../../theme/index"
const StyledButton=styled(Button)({
  "&.Mui-disabled":{
    backgroundColor:theme.palette.stroke[100],
    color: "white",
  },
  "&.MuiButton-root":{
    textTransform:'none'
  },
  '& .MuiButton-startIcon svg, .MuiButton-endIcon svg': {
    display: 'flex',
    placeContent: 'center'
},
'&.MuiButton-contained': {
    border: `1px solid ${theme.palette.stroke[100]}`,
    boxShadow:
        '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12);',
},
'&.MuiButton-outlined': {
    border: `1px solid ${theme.palette.stroke[100]}`,
    boxShadow:
        '0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)'
},
'&.MuiButton-text': {
    border: 'none',
    borderRadius: '4px',
    padding: '0',
    '&:hover': {
        backgroundColor: 'unset'
    }
},
})
const MuiButton = ({text,testId,...props}:ButtonProps) => {
  return (
    <Box>
        <StyledButton {...props} data-testid={testId}>{text}</StyledButton>
    </Box>
  )
}

export default MuiButton