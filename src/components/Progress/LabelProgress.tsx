import { Grid, LinearProgress, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

type PropsType = {
  label: string;
  value: number;
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
};

const LabelProgress = ({ label, value, color }: PropsType) => {
  return (
    <Grid item xs={12}>
      <Typography variant='h6' gutterBottom>
        <DoneIcon fontSize='inherit' color='inherit' />
        &nbsp;{label}
      </Typography>
      <LinearProgress
        sx={{ height: { xs: 20, sm: 30 }, borderRadius: 5 }}
        variant='determinate'
        value={value}
        color={color}
      />
    </Grid>
  );
};

export default LabelProgress;
