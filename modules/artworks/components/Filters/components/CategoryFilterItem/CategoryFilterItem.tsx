import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageBtn, ImageSrc, ImageBackdrop, ImageMarked, ImageText } from './';

type ImageButtonProps = {
  image: string;
  category: string;
  onClick: () => void;
};

const CategoryFilterItem = ({ image, category, onClick }: ImageButtonProps) => {
  return (
    <Box onClick={onClick} sx={{ width: '45%' }}>
      <ImageBtn
        focusRipple
        key={category}
        style={{
          width: '100%',
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <ImageText>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              fontSize: 18,
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {category.toUpperCase()}
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </ImageText>
      </ImageBtn>
    </Box>
  );
};

export default CategoryFilterItem;
