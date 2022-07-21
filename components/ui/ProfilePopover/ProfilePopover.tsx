import React, { useContext, memo, useCallback } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../../context';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';

type PopoverProps = {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
};

const ProfilePopover = ({ open, anchorEl, handleClose }: PopoverProps) => {
  const { logout } = useContext(AuthContext);
  const router = useRouter();
  const { t } = useTranslation('common');

  const navigateTo = useCallback(
    async (url: string) => {
      await router.push(url);
    },
    [router]
  );

  return (
    <Menu
      id={'fade-menu'}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      MenuListProps={{
        'aria-labelledby': 'fade-button',
      }}
    >
      <MenuItem
        sx={{ display: 'flex', alignItems: 'center' }}
        onClick={() => navigateTo('/auth/profile')}
      >
        <AccountCircleIcon sx={{ mr: 1, color: 'gray' }} />
        <span>{t('profile')}</span>
      </MenuItem>
      <MenuItem onClick={() => navigateTo('/auth/my-purchases')}>
        <MonetizationOnIcon sx={{ mr: 1, color: 'gray' }} />
        <span>{t('myPurchases')}</span>
      </MenuItem>
      <Divider />
      <MenuItem onClick={logout}>
        <LogoutIcon sx={{ mr: 1, color: 'gray' }} />
        <span>{t('logout')}</span>
      </MenuItem>
    </Menu>
  );
};

export default memo(ProfilePopover);
