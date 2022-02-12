import React from 'react'
import {Typography,Box,Grid,Button,Input, SvgIcon} from '@mui/material';
import './inputStyle.css'

export const InputComponent = (props) => {
  console.log("props Input", props);
  return (
    <Box className='box_InputComponent'>
        <Input
                  type="text"
                  className="firstName inputProperty inputBorder"
                  placeholder="First Name"
                />
    </Box>
  )
}
