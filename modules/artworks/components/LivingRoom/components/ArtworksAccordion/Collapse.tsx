import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'next-i18next';
import { IArtwork } from '../../../../../../interfaces';
import { Box, Card } from '@mui/material';
import Image from 'next/image';
import CardMedia from '@mui/material/CardMedia';
import { useSelectedArtwork } from '../../../../../../context/artworks/selectedArtwork/SelectedArtworkContext';
import SpinLoader from '../../../../../../components/ui/Spinloader';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

type CollapseProps = {
  expanded: boolean;
  title: string;
  handleChange: any;
  data: IArtwork[] | [];
  isLoading: boolean;
};

const Collapse = ({
  expanded,
  handleChange,
  title,
  isLoading,
  data,
}: CollapseProps) => {
  const { t } = useTranslation('artworks');
  const { setSelectedArtwork } = useSelectedArtwork();

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary aria-controls={title} id={title}>
          <Typography>{t(title)}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 1 }}>
          {isLoading ? (
            <Box
              sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <SpinLoader />
            </Box>
          ) : (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexWrap={'wrap'}
            >
              {data?.map((artwork: IArtwork) => (
                <Card
                  key={artwork?._id}
                  /*@ts-ignore*/
                  onClick={() => setSelectedArtwork(artwork)}
                  sx={{
                    width: 200,
                    margin: { xs: 3, md: '20px' },
                    border: '5px solid black',
                    padding: 1,
                    cursor: 'pointer',
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 250,
                      width: '100%',
                      position: 'relative',
                    }}
                  >
                    <Image
                      blurDataURL={artwork?.url}
                      placeholder={artwork?.url ? 'blur' : undefined}
                      src={artwork?.url}
                      layout="fill"
                      objectFit="cover"
                      alt={artwork?.name}
                    />
                  </CardMedia>
                </Card>
              ))}
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapse;
