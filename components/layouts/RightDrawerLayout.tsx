import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';
import { MainLayout } from './MainLayout';
import { styled } from '@mui/material/styles';
import { Box, Toolbar } from '@mui/material';

type Props = {
  children: ReactNode;
  open?: boolean;
  onClose: () => void;
  rightDrawerChildren: ReactNode;
};

const LayoutRoot = styled('main')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

const RightDrawerLayout = ({
  children,
  open,
  onClose,
  rightDrawerChildren,
}: Props) => {
  return (
    <LayoutRoot>
      <MainLayout
        extraStyle={{
          width: { xs: '100%', md: '75%', lg: '80%' },
          left: 0,
        }}
      >
        {children}
      </MainLayout>
      <Drawer
        sx={{
          display: { xs: 'none', md: 'block' },
          padding: '20px 10px',
          width: { md: '25%', lg: '20%' },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { md: '25%', lg: '20%' },
            boxSizing: 'border-box',
            padding: '20px 10px',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        {rightDrawerChildren}
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'block', md: 'none' },
          height: '60vh',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            height: '60vh',
            padding: '10px',
            boxSizing: 'border-box',
          },
        }}
        anchor="bottom"
        open={open}
        onClose={onClose}
      >
        <Toolbar sx={{ position: 'sticky' }} />
        <Box sx={{ overflowY: 'auto' }}>{rightDrawerChildren}</Box>
      </Drawer>
    </LayoutRoot>
  );
};

export default RightDrawerLayout;
