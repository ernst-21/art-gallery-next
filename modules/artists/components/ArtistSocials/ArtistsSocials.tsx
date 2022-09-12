import * as React from 'react';
import { memo } from 'react';
import Menu from '@mui/material/Menu';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Box, IconButton } from '@mui/material';
import SocialIconsList from '../../../artworks/components/LivingRoom/components/SocialIconsList/SocialIconsList';
import { ArtistType } from '../../../../types/common.types';

const ArtistsSocials = ({ artist }: ArtistType) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick}>
        <ShareOutlinedIcon />
      </IconButton>
      <Menu
        sx={{ paddingX: 2 }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <SocialIconsList url={artist.pic} />
      </Menu>
    </Box>
  );
};

export default memo(ArtistsSocials);
