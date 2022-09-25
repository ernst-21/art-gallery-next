import React, { memo } from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { ListItem } from '@mui/material';
import { IFooterMenu } from '../../../../settings/navigation';

type CollapseItemProps = {
  menu: IFooterMenu;
};

const CollapseItem = ({ menu }: CollapseItemProps) => {
  return (
    <Accordion
      variant={'outlined'}
      sx={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        borderBottom: '1px solid gray',
        ml: 1,
        mr: 1,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          {menu.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {menu.menuList?.map((item: any) => (
          <ListItem sx={{ fontSize: '14px', color: 'white' }} key={item.title}>
            {item.title}
          </ListItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(CollapseItem);
