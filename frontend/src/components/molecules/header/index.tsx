import React from 'react';
import MuiButton from '../../atoms/button';
import AvatorPopOver from '../../organisms/avatorPopOver';
import { Box, Grid } from '@mui/material';
import ForwardIcon from '../../../../public/images/right-arrow.svg';
import theme from '../../../theme';
import { HEADER_TEXT } from '../../../utils/constants';
import MuiIcons from '../../atoms/icon';

const Header = () => {
    return (
      <Box>
        <Grid container justifyContent="space-between"  sx={{background:theme.palette.structural[50]}}>
          <Grid item sx={{padding:'10px 40px'}}>
            <MuiButton variant='contained' text={HEADER_TEXT} endIcon={<MuiIcons src={ForwardIcon} alt={'notfound'} />} sx={{backgroundColor:theme.palette.stroke[50], boxShadow:'none', color:theme.palette.primary[500], "&:hover": {backgroundColor: theme.palette.stroke[50],}, borderRadius:'40px'}}  />
          </Grid>
          <Grid item sx={{padding:'10px', paddingRight:'80px'}}>
            <AvatorPopOver />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Header;