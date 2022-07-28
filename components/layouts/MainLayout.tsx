import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import useToggle from '../../hooks/utils/useToggle';
import { Footer } from './Footer';
import { SideBar } from './Sidebar';

const LayoutRoot = styled('main')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 65,
}));

export type MainLayoutRootProps = {
  children?: ReactNode;
  extraStyle?: {};
};

export const MainLayoutRoot = (props: MainLayoutRootProps) => {
  const { children, extraStyle } = props;
  const { isOpen, onOpen, onClose } = useToggle(false);

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
          <Footer />
        </Box>
      </LayoutRoot>
      <Navbar extraStyle={{ ...extraStyle }} onOpenSidebar={onOpen} />
      <SideBar
        activeSx={{ fontWeight: 'bold' }}
        open={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export const MainLayout = ({ children, ...props }: MainLayoutRootProps) => (
  <MainLayoutRoot {...props}>{children}</MainLayoutRoot>
);

export default MainLayout;
