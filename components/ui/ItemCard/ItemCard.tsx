import { Card } from '@mui/material';
import React, { ReactNode } from 'react';

type ItemCardProps = {
  children: ReactNode;
  condition: boolean;
};

const ItemCard = ({ children, condition }: ItemCardProps) => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{ maxWidth: 345, padding: condition ? 0 : 1 }}
    >
      {children}
    </Card>
  );
};

export default ItemCard;
