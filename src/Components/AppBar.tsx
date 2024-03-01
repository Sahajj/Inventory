import * as React from 'react';
// @ts-ignore
import AppBar from '@mui/material/AppBar';
// @ts-ignore
import Box from '@mui/material/Box';
// @ts-ignore
import Toolbar from '@mui/material/Toolbar';
// @ts-ignore
import Typography from '@mui/material/Typography';


interface ButtonAppBarProps {
  value: string;
}

export default function ButtonAppBar({ value }: ButtonAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {value}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
