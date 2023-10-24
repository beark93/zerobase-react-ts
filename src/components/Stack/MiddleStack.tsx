import Stack, { StackProps } from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const MiddleStack = styled(Stack)<StackProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

export default MiddleStack;
