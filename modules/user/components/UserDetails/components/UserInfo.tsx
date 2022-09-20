import React, { memo } from 'react';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { UserProps } from '../../../../../types/common.types';
import { deepPurple } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { UserEditProfileModal } from './UserEditProfileModal';
import useToggle from '../../../../../hooks/utils/useToggle';

const UserInfo = ({ user }: UserProps) => {
  const { isOpen, onOpen, onClose } = useToggle();
  return (
    <Stack sx={{ zIndex: 8, mt: { xs: -9, md: -12 }, alignItems: 'center' }}>
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
          width: { xs: 130, md: 180 },
          height: { xs: 130, md: 180 },
        }}
      >
        <Typography sx={{ fontSize: { xs: 80, md: 120 } }}>
          {user.name.charAt(0).toUpperCase()}
        </Typography>
      </Avatar>
      <Stack>
        <Typography sx={{ mt: 4 }} variant="h1">
          {user.name}
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h2">
          {user.email}
        </Typography>
      </Stack>
      <Button
        sx={{ my: 4, fontSize: 18, paddingX: 2 }}
        variant="text"
        endIcon={<ModeEditIcon />}
        onClick={onOpen}
      >
        Edit
      </Button>
      <UserEditProfileModal open={isOpen} handleClose={onClose} />
    </Stack>
  );
};

export default memo(UserInfo);
