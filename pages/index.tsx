import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import MainLayout from '../components/layouts/MainLayout';

const HomePage: NextPage = () => {

  return (
    <MainLayout>
        <Box sx={{height: '846px'}}>
            <Typography variant="h1" component={'h1'}>
                Home
            </Typography>
        </Box>
    </MainLayout>
  );
};

export default HomePage;
