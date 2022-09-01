import React, { useMemo } from 'react';
import { Avatar } from '@mui/material';
import { useUser } from '../../../hooks/security/useUser';
import ProfilePopover from '../ProfilePopover/ProfilePopover';

const NavAvatar = () => {
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const avatarLetter = useMemo(() => {
    return user?.name.charAt(0).toUpperCase();
  }, [user?.name]);

  return (
    <>
      <Avatar sx={{ cursor: 'pointer' }} onClick={handleClick}>
        {avatarLetter}
      </Avatar>
      <ProfilePopover
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
};

export default NavAvatar;
