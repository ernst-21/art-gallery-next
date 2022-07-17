import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import ImageContainer from './ImageContainer';

interface Props {
    title: string;
    children: ReactNode;
    isRegisterView?: boolean;
}

export const AuthLayoutWithImage: FC<Props> = ({ children, title, isRegisterView = false }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Box
                    className='fadeIn'
                    display={'flex'}
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            sm: isRegisterView ? 'row-reverse' : 'row'
                        }}}
                >
                    <ImageContainer />
                    {children}
                </Box>
            </main>
        </>
    );
};
