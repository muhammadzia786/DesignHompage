import React,{useState} from 'react'
import { Typography, Box, Grid, Button, Input, SvgIcon } from '@mui/material';
import './inputStyle.css'

export const InputComponent = ({name,value,placeholder,onChange}) => {

  
  return (
    <Box className='box_InputComponent'>
      <Input
        type="text"
        className="firstName inputProperty inputBorder"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
     
      />
    </Box>
  )
}
