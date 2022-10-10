import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Reload = () => {
  const { reload } = useRouter();
  return (
    <Stack
      sx={{
        height: '500px',
        mt: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6">
        Something went wrong. Please reload the page
      </Typography>
      <Button
        onClick={() => reload()}
        size="large"
        sx={{ mt: 2 }}
        variant="outlined"
        startIcon={<ReplayIcon />}
      >
        Reload
      </Button>
    </Stack>
  );
};

export default Reload;
