import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
//import splash from '../../public/images/authPages/splash.jpg';
import pencils from '../../public/images/authPages/pencils.jpg';

const ImageContainer = () => {
    return (
        <Box sx={{height: {sm: '100vh'}, display: {xs: 'none', sm: 'flex'}, position: 'relative', width: {sm: '40%'}}}>
          <Image layout={'fill'} style={{filter: 'brightness(80%)'}} src={pencils} />
        </Box>
    );
};

export default ImageContainer;
