import React, {memo, useMemo} from "react";
import styled from "@emotion/styled";
import {Box} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useIsMobile } from '../../../hooks/utils/useIsMobile';

const SlideLeftButton = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 35%;
  padding: 4px;
`;

const SlideRightButton = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35%;
  z-index: 10;
  right: 0;
  padding: 5px;
`;

const SampleNextArrow = (props: any) => {
    const {onClick, isHome} = props;
    return (
        <SlideRightButton
            sx={{
                borderRadius: 8,
                height: isHome ? '56px' : '36px',
                width: isHome ? '56px' : '36px',
                backgroundColor: 'white',
                border: isHome ? 'none' : '1px solid lightgray',
                color: isHome ? '#505050' : 'lightgray',
                "&:hover": {
                    color: "black",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.2)",
                },
            }}
            onClick={onClick}
        >
            <ArrowForwardIosOutlinedIcon sx={{fontSize: isHome ? '30px' : '18px'}} className="block"/>
        </SlideRightButton>
    );
};

const SamplePrevArrow = (props: any) => {
    const {onClick, isHome} = props;
    return (
        <SlideLeftButton
            sx={{
                borderRadius: 8,
                height: isHome ? '48px' : '36px',
                width: isHome ? '48px' : '36px',
                backgroundColor: 'white',
                border: isHome ? 'none' : '1px solid lightgray',
                color: isHome ? '#505050' : 'lightgray',
                "&:hover": {
                    color: "black",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.2)",
                },
            }}
            onClick={onClick}
        >
            <ArrowBackIosNewOutlinedIcon sx={{fontSize: isHome ? '30px' : '18px'}}/>
        </SlideLeftButton>
    );
};

const GroupSlider = ({items, CmpCard, isHome = false}: any) => {
    const isMobile = useIsMobile();

    const settings = useMemo(() => {
        return {
            nextArrow: <SampleNextArrow isHome={isHome}/>,
            prevArrow: <SamplePrevArrow isHome={isHome}/>,
            arrows: !isMobile,
            dots: isMobile,
            infinite: items?.length > 3,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1200,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
            ],
        };
    }, [isHome, isMobile, items?.length]);

    return (
        <>
            <Slider {...settings}>
                {items?.map(
                    (
                        item: JSX.IntrinsicAttributes,
                        index: React.Key | null | undefined
                    ) => (
                        <CmpCard key={index} {...item} />
                    )
                )}
            </Slider>
        </>
    );
};

export default memo(GroupSlider);
