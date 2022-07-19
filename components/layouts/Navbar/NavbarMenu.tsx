import { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { NavMenu } from '../../ui/NavMenu';
import { useTranslation } from 'next-i18next';
import { mainMenu } from '../../../settings/navigation';

const useTranslateMenu = () => {
  const { t } = useTranslation('common');
  return useMemo(() => {
    return mainMenu.map((menuItem) => ({
      ...menuItem,
      title: t(menuItem.title),
    }));
  }, [t]);
};

const NavbarMenu = () => {
  const menuItems = useTranslateMenu();

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <NavMenu
        menu={menuItems}
        activeSx={{ fontWeight: 'bold' }}
        activeColor={'primary'}
      />
    </Box>
  );
};

export default memo(NavbarMenu);
