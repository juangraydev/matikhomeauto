import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';

const currencies = [
  {
    value: 'Mansion',
    label: 'Mansion',
  },
  {
    value: 'Subdivision',
    label: 'Subdivision',
  },
  {
    value: 'House',
    label: 'House',
  },
  {
    value: 'Farm House',
    label: 'Farm House',
  },
];

const TextFieldstyled = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  });

export default function SelectTextFields({selected, houses, setSelectedHouse}) {
  
  
  console.log("props?.select?.name", houses, selected, setSelectedHouse);
  console.log("propseee", selected?.name);
  const handleSelectHouse = (house) => {
    
    setSelectedHouse(houses[house])
    
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {houses && <TextFieldstyled
          id="outlined-select-currency"
          select
          label="Home List"
          value={selected.id}
          size="small"
          
          sx={{ input: { color: 'white'}}}
        //   helperText="Please select your currency"
        >
          {houses.map((home, idx) => (
            <MenuItem key={home.id} value={home.id} onClick={() => handleSelectHouse(idx)}>
              {home.name}
            </MenuItem>
          ))}
        </TextFieldstyled>}
      </div>
    </Box>
  );
}