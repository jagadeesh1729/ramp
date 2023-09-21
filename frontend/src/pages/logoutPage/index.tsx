import { Box } from '@mui/material'
import React from 'react'
import SigninTemplate from '../../components/templates/singinTemplet'
import LogoutBody from '../../components/organisms/logout'

const LogoutPage = () => {
  return (
    <Box>
         <SigninTemplate body={<LogoutBody/>} />
    </Box>
  )
}

export default LogoutPage