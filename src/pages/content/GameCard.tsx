import React from 'react';

import { Typography, Stack, Button } from '@mui/material';

import BasicHeader from '@components/Header/BasicHeader';
import MiddleTypography from '@components/Typography/MiddleTypography';
import FullBackdrop from '@components/Backdrop/FullBackdrop';
import FlipPaper from '@components/Paper/FlipPaper';

import {
  useCardGameState,
  useCardGameTimer,
  useCardGameDispatch,
} from '@components/Provider/CardGameProvider';

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
        <MiddleTypography variant='h6' text='Card Game' />
      </BasicHeader>
      <Typography align='center' variant='h4' gutterBottom>
        {gameTimer.toFixed(2)}
      </Typography>
      <Stack
        position='relative'
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        useFlexGap
        flexWrap='wrap'
        p={4}
        spacing={2}
      >
        <FullBackdrop open={!isStart}>
          {gameState === 'INIT' ? (
            <Button onClick={onGameStart} sx={{ color: '#fff' }}>
              <Typography variant='h1'>시작</Typography>
            </Button>
          ) : gameState === 'VIEW' ? (
            <Typography variant='h1'>{viewTimer}</Typography>
          ) : gameState === 'END' ? (
            <Typography variant='h1'>THE END</Typography>
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
