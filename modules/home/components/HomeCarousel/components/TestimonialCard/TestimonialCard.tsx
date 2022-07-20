import React, {memo} from "react";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from '@mui/material';
import Image from "next/image";
import { ITestimonial } from '../../../../../../interfaces';
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({...testimonial}: ITestimonial) => {
    const {image} = testimonial;
    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                width: "100%",
                height: "100%",
                padding: {xs: 0, sm:"10px 20px"},
                backgroundColor: "transparent",
            }}
            elevation={0}
        >
            <Stack alignItems={'center'} spacing={2}>
                <Box
                    sx={{
                        position: "relative",
                        height: {xs: '100px' ,sm:"148px"},
                        width: {xs: '100px' ,sm:"148px"},
                    }}
                >
                    <Image
                        style={{borderRadius: "99px"}}
                        layout={"fill"}
                        objectFit={"cover"}
                        src={
                            image
                                ? image
                                : "/images/home/avatar.jpg"
                        }
                        alt={testimonial?.author}
                    />
                </Box>
                <Box textAlign={'center'}>
                    <Typography mb={0} sx={{fontSize: "15px"}}>
                        {testimonial?.author}
                    </Typography>
                    <Typography mt={0} sx={{fontSize: "13px", fontStyle: "italic"}}>
                        {testimonial?.authPosition}
                    </Typography>
                </Box>
            </Stack>
            <Box width={'90%'} sx={{marginBottom: '-17px'}}>
                <FormatQuoteIcon
                    sx={{
                        fontSize: "48px",
                        color: "#18244E",
                        opacity: 0.3,
                        transform: 'rotate(180deg)',
                    }}
                />
            </Box>

            <Stack
                sx={{
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{width: "100%", marginBottom: "10px"}}>
                    <Box sx={{width: "100%", textAlign: "center", padding: '0 30px'}}>
                        <Typography>
                            {testimonial?.testimonial}
                        </Typography>
                    </Box>
                </Box>

            </Stack>
        </Paper>
    );
};

export default memo(TestimonialCard);
