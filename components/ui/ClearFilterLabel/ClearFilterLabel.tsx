import React, { memo } from 'react';
import { Box } from '@mui/material';

type Props = {
  onClick: () => void;
  sx?: {};
};

const ClearFilterLabel = ({ onClick, sx }: Props) => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        mb: 1,
        mr: 2,
        fontSize: '14px',
        textAlign: 'end',
        ...sx,
      }}
      onClick={onClick}
    >
      All
    </Box>
  );
};

export default memo(ClearFilterLabel);
