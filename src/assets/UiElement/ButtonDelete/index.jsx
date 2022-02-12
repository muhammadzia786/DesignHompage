import React from 'react';
import {Typography,Box,Grid,Button,Input, SvgIcon} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ButtonDeleteStyle.css';

 const ButtonDelete = () => {
  return (
    <Box>
        <Box>
                    <Button className="btn_delete">
                        <DeleteIcon/>
                        
                         
                         </Button>

    </Box>
    </Box>
  )
}
export default ButtonDelete;
