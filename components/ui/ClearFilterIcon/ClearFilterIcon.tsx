import React from 'react';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Box } from '@mui/material';

type Props = {
  onClick: () => void;
  sx?: {};
};

function ClearFilterIcon({ onClick, sx }: Props) {
  return (
    <Box onClick={onClick}>
      <FilterAltOffIcon
        sx={{ color: 'gray', fontSize: '20px', cursor: 'pointer', ...sx }}
      />
    </Box>
  );
}

export default ClearFilterIcon;
