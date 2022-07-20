import React, {memo} from 'react';
import {Box, Stack} from "@mui/material";
import { ITestimonial } from '../../../../../../interfaces';

import GroupSlider from '../../../../../../components/ui/ItemCarousel';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import {useTranslation} from 'react-i18next';
import isEmpty from "lodash/isEmpty";
import Typography from '@mui/material/Typography';

type TestimonialsProps = {
    data: ITestimonial[]
}

const TestimonialsCarousel = ({data}: TestimonialsProps) => {
    const {t} = useTranslation('home');

    if (isEmpty(data)) {
        return null;
    }
    return (
        <Stack sx={{margin: '50px 0'}}>
            <Stack sx={{
                textAlign: 'center',
                maxWidth: '444px',
                alignSelf: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{ mb: 3, textAlign: 'center' }} variant="h1">{t('testimonials')}</Typography>
                <Box sx={{maxWidth: '85%'}}><Typography
                    sx={{fontSize: '16px'}}>{t('testimonialSubText')}</Typography></Box>
            </Stack>
            <Box sx={{width: '100%', marginTop: '25px', padding: '0 20px'}}>
                <GroupSlider items={data} CmpCard={TestimonialCard} isHome/>
            </Box>

        </Stack>
    );
};

export default memo(TestimonialsCarousel);
