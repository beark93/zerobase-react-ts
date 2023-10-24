import React from 'react';

import { Typography, Stack, Button } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import BasicHeader from '@components/Header/BasicHeader';
import MiddleTypography from '@components/Typography/MiddleTypography';
import FullBackdrop from '@components/Backdrop/FullBackdrop';
import FlipPaper from '@components/Paper/FlipPaper';

import {
  useCardGameState,
  useCardGameTimer,
  useCardGameDispatch,
} from '@components/Provider/CardGameProvider';

const BackDropTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  [theme.breakpoints.down('max')]: {
    fontSize: '2rem',
  },
}));

const GameCard = () => {
  const { cards, gameState } = useCardGameState();
  const { viewTimer, gameTimer } = useCardGameTimer();
  const { onGameStart } = useCardGameDispatch();

  const isStart = !(
    gameState === 'INIT' ||
    gameState === 'VIEW' ||
    gameState === 'END'
  );

  return (
    <>
      <BasicHeader>
        <MiddleTypography variant='h6'>Card Game</MiddleTypography>
      </BasicHeader>
      <Typography
        align='center'
        sx={{
          fontSize: {
            zero: '1.2rem',
            max: 'h4.fontSize',
          },
        }}
        gutterBottom
      >
        {gameTimer.toFixed(2)}
      </Typography>
      <Stack
        position='relative'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        useFlexGap
        flexWrap='wrap'
        p={{ zero: 1, max: 4 }}
        spacing={{ zero: 1, max: 2 }}
      >
        <FullBackdrop open={!isStart}>
          {gameState === 'INIT' ? (
            <Button onClick={onGameStart} sx={{ color: '#fff' }}>
              <BackDropTypography>시작</BackDropTypography>
            </Button>
          ) : gameState === 'VIEW' ? (
            <BackDropTypography>{viewTimer}</BackDropTypography>
          ) : gameState === 'END' ? (
            <BackDropTypography>THE END</BackDropTypography>
          ) : (
            ''
          )}
        </FullBackdrop>
        {cards.map((_, index) => (
          <FlipPaper key={`card-${index}`} index={index} />
        ))}
      </Stack>
    </>
  );
};

export default React.memo(GameCard);
