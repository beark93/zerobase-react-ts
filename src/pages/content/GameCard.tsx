import { useState, useRef, useEffect } from 'react';

import { Typography, Stack, Backdrop, Button } from '@mui/material';

import BasicHeader from '@components/Header/BasicHeader';
import FlipPaper from '@components/Paper/FlipPaper';

const shuffledCard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8].toSorted(
  () => Math.random() - 0.5
);

const GameCard = () => {
  const [count, setCount] = useState(0);
  const [flips, setFlips] = useState<boolean[]>(new Array(16).fill(false));
  const [stack, setStack] = useState<number[]>([]);
  const [gameState, setGameState] = useState('INIT');
  const [gameTimer, setGameTimer] = useState(20);
  const [viewTimer, setViewTimer] = useState(3);

  const gameTimerInterval = useRef<NodeJS.Timeout>();
  const viewTimerInterval = useRef<NodeJS.Timeout>();

  const isStart = () => {
    if (gameState === 'INIT' || gameState === 'VIEW' || gameState === 'END') {
      return false;
    }

    return true;
  };

  const handleFlip = (index: number) => {
    if (gameState !== 'CHOICE') {
      return;
    }

    setStack((state) => [...state, index]);
    setFlips((state) =>
      state.map((flip, idx) => (idx === index ? true : flip))
    );
  };

  const onClickAllFlip = () => {
    if (gameState !== 'INIT') {
      return;
    }

    setGameState('VIEW');
  };

  useEffect(() => {
    if (gameState === 'INIT') {
      // 페이지 진입 시
    } else if (gameState === 'VIEW') {
      // 시작 버튼 클릭 : 3초간 전체 보여주고 다시 뒷면으로
      setFlips((state) => state.map(() => true));

      viewTimerInterval.current = setInterval(() => {
        setViewTimer((state) => state - 1);
      }, 1000);

      setTimeout(() => {
        setFlips((state) => state.map(() => false));
        setGameState('CHOICE');
        clearInterval(viewTimerInterval.current);

        gameTimerInterval.current = setInterval(() => {
          setGameTimer((state) => state - 0.02);
        }, 20);
      }, 3000);
    } else if (gameState === 'CHOICE') {
      // 게임 중
      setStack([]);
    } else if (gameState === 'CHECK') {
      // 카드 체크
    } else if (gameState === 'END') {
      // 게임 종료
      clearInterval(gameTimerInterval.current);
    }
  }, [gameState]);

  useEffect(() => {
    if (stack.length >= 2) {
      setGameState('CHECK');
      if (shuffledCard[stack[0]] === shuffledCard[stack[1]]) {
        // 같은 카드를 뒤집었을 경우
        setCount((state) => state + 1);
      } else {
        setTimeout(() => {
          setFlips((state) =>
            state.map((flip, idx) =>
              idx === stack[0] || idx === stack[1] ? false : flip
            )
          );
          setGameState('CHOICE');
        }, 500);
      }
    }
  }, [stack]);

  useEffect(() => {
    if (count >= 8) {
      setGameState('END');
    } else if (count > 0) {
      setGameState('CHOICE');
    }
  }, [count]);

  useEffect(() => {
    if (gameTimer <= 0.02) {
      setGameTimer(0);
      setGameState('END');
    }
  }, [gameTimer]);

  return (
    <>
      <BasicHeader>
        <Stack
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Typography variant='h6'>Card Game</Typography>
        </Stack>
      </BasicHeader>
      <Typography align='center' variant='h4' gutterBottom>
        {gameTimer.toFixed(2)}
      </Typography>
      <Stack
        p={4}
        spacing={2}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        useFlexGap
        flexWrap='wrap'
        position='relative'
      >
        <Backdrop
          open={!isStart()}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            color: '#fff',
            zIndex: 1,
          }}
        >
          {gameState === 'INIT' ? (
            <Button onClick={onClickAllFlip} sx={{ color: '#fff' }}>
              <Typography variant='h1'>시작</Typography>
            </Button>
          ) : gameState === 'VIEW' ? (
            <Typography variant='h1'>{viewTimer}</Typography>
          ) : gameState === 'END' ? (
            <Typography variant='h1'>THE END</Typography>
          ) : (
            ''
          )}
        </Backdrop>
        {shuffledCard.map((id, index) => (
          <FlipPaper
            onClick={() => handleFlip(index)}
            key={`card-${index}`}
            id={id}
            flip={flips[index]}
          />
        ))}
      </Stack>
    </>
  );
};

export default GameCard;
