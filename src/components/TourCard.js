import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function TourCard(){
    return(
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper square />
      <Paper elevation={24} />
    </Box>
    )
}