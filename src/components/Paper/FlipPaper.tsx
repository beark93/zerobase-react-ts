import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  })};
  transform-style: preserve-3d;
  & .front, .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .front {
    transform: rotateY(180deg);
  }
  &.flip {
    transform: rotateY(180deg);
  }
  `}
`;

type PropsType = {
  id: number;
  flip: boolean;
  onClick: () => void;
};

const FlipPaper = ({ id, flip, onClick }: PropsType) => {
  return (
    <Box
      sx={{
        perspective: '500px',
        width: { xs: '90px', sm: '100px' },
        height: { xs: '115px', sm: '130px' },
      }}
      onClick={onClick}
    >
      <StyledPaper className={flip ? 'flip' : ''}>
        <Paper className='front'>
          <Typography variant='h1'>{id}</Typography>
        </Paper>
        <Paper className='back' sx={{ backgroundColor: '#aaaaaa' }}></Paper>
      </StyledPaper>
    </Box>
  );
};

export default FlipPaper;
