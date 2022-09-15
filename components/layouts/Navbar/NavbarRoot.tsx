import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { FunctionComponent, memo, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import PageWidthContainer from '../PageWidthContainer';

interface NavbarProps {
  children?: ReactNode | any;
  extraStyle?: {};
}

const NavbarStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...(theme.palette.mode === 'light'
    ? {
        boxShadow: theme.shadows[3],
      }
    : {
        backgroundColor: theme.palette.background.paper,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        boxShadow: 'none',
      }),
}));

const NavbarRoot: FunctionComponent<NavbarProps> = ({
  children,
  extraStyle,
  ...props
}) => {
  return (
    <NavbarStyle sx={{ ...extraStyle }}>
      <PageWidthContainer>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
          }}
        >
          {children}
        </Toolbar>
      </PageWidthContainer>
    </NavbarStyle>
  );
};

export default memo(NavbarRoot);
