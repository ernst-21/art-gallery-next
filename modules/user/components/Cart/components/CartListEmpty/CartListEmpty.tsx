import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';

const CartListEmpty = () => {
  return (
    <Grid sx={{ my: 12, minHeight: '300px' }} item xs={12}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingX: 2,
        }}
      >
        <Card>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={'/images/cart/no-results.png'}
                alt={'No products'}
              />
            </CardActionArea>
          </Link>
        </Card>
        <Typography
          sx={{ lineHeight: 1.5, mt: 2 }}
          color={'text.secondary'}
          variant="h2"
        >
          Your cart seems to be empty
        </Typography>
        <Typography color={'text.secondary'} paragraph>
          Explore artworks and add them to your shopping cart.
        </Typography>
      </Box>
    </Grid>
  );
};

export default CartListEmpty;
