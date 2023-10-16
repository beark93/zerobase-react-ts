import { Grid, Skeleton, Typography } from '@mui/material';

const UberSkeleton = () => {
  return (
    <Grid item xs={12}>
      <Typography component='div' width='50%' variant='h6' gutterBottom>
        <Skeleton />
      </Typography>
      <Skeleton
        variant='rectangular'
        width='100%'
        sx={{ borderRadius: 5, height: { xs: 20, sm: 30 } }}
      />
    </Grid>
  );
};

export default UberSkeleton;
