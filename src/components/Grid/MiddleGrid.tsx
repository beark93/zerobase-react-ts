import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const MiddleGrid = styled(Grid)<GridProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export default MiddleGrid;
