import React from 'react';
import { Typography, Box, Grid, Button, Input, SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ButtonDeleteStyle.css';

const ButtonDelete = () => {
  return (
    <Box>
      <Box>
        <div className="btn_delete">
          <DeleteIcon />


        </div>

      </Box>
    </Box>
  )
}
export default ButtonDelete;
