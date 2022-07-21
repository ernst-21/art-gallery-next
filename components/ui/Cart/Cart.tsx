import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useUser } from '../../../hooks/security/useUser';

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

type CartProps = {
  isInDrawer?: boolean;
};

const Cart = ({ isInDrawer = false }: CartProps) => {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <IconButton sx={{ ml: isInDrawer ? 0 : 1 }} aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;
