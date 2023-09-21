import React from 'react';
import  {IconProps} from "./IconProps"
const MuiIcons = ({...props}:IconProps) => {
  return (
        <img {...props} style={{cursor:'pointer'}}/>
  )
}

export default MuiIcons