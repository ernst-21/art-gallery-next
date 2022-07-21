import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../../hooks/security/useUser';
import { sideBarUserMenu } from '../../../settings/navigation';
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { navigateTo } from '../../../utils/navigateTo';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import Cart from '../Cart/Cart';
import { AuthContext } from '../../../context';

type SidebarUserMenu = {
  onClose: () => void;
};

const SidebarUserMenu = ({ onClose }: SidebarUserMenu) => {
  const { t } = useTranslation('common');
  const { isAuthenticated, logout } = useUser();
  const router = useRouter();

  const handleNavigation = (url: string) => {
    navigateTo(router, url);
    onClose();
  };

  const handleDrawerLogout = () => {
    logout();
    onClose();
  };

  if (!isAuthenticated) {
    return (
      <List>
        <ListItem
          onClick={() => handleNavigation('/auth/login')}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <VpnKeyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    );
  }

  return (
    <List>
      {sideBarUserMenu.map((item: any) => {
        const Icon = item.icon;
        return (
          <ListItem
            onClick={() => handleNavigation(item.link)}
            key={item._id}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={t('Cart')} />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={handleDrawerLogout} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={t('logout')} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SidebarUserMenu;
