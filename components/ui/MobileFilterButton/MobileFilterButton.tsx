import React, { memo } from 'react';
import { StyledFab } from '../StyledFabButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

type ComponentProps = {
  onClick: () => void;
};

const MobileFilterButton = ({ onClick }: ComponentProps) => {
  return (
    <StyledFab
      sx={{
        right: { xs: '5%', md: '27%', lg: '22%' },
        bottom: '5vh',
        display: { sx: 'block', md: 'none' },
      }}
      onClick={onClick}
      color="primary"
      aria-label="add"
    >
      <FilterAltIcon />
    </StyledFab>
  );
};

export default memo(MobileFilterButton);
