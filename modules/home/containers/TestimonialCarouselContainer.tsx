import React from 'react';
import { TestimonialsCarousel } from '../components/HomeCarousel/components/TestimonialsCarousel';
import { Box } from '@mui/material';
import { initialData } from '../../../database/seed-data';

const testimonials = initialData.testimonials

const TestimonialsCarouselContainer = () => {
    return (
        <Box sx={{w: '100%', padding: {xs: 0, sm:'0 40px'}}}>
           <TestimonialsCarousel data={testimonials} />
        </Box>
    );
};

export default TestimonialsCarouselContainer;
