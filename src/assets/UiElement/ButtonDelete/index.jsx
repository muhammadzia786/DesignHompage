import React from 'react';
import { Typography, Box, Grid, Button, Input, SvgIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ButtonDeleteStyle.css';

const ButtonDelete = (props) => {
  console.log("delete item ", props)
  return (
    <Box>
      <Box>
        <Button className="btn_delete" onClick={props.Deletedata}>
          <DeleteIcon />


        </Button>

      </Box>
    </Box>
  )
}
export default ButtonDelete;
