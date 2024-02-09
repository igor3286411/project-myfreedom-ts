import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const icon = (
  <Paper sx={{ height: "100vh", position: "fixed", right: 1, top: 1 }} elevation={4}>
    <h2>fssdfdfsdfdfggfdgfdgfdgfdgdfdgfdgfdgfs</h2>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);

export const Transaction = () => {
  const [checked, setChecked] = React.useState(false);
  const { transaction } = useTypedSelector(state => state.todo)

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  console.log(transaction);


  return (
    <Box
      sx={{
        height: 180,
        width: 130,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
        {icon}
      </Slide>
    </Box>
  );
}