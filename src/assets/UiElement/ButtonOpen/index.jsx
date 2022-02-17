import React from 'react';
import { Typography, Box, Grid, Button, Input, SvgIcon } from '@mui/material';
import './BtnOpenStyle.css'


const ButtonOpen = (props) => {
  console.log("zia btnopen", props)
  return (
    <Box>
      <Button className="btn_open">Open</Button>

    </Box>
  )
}
export default ButtonOpen;
