import React from 'react';

import {
  Card,
  CardContent,
  CardActionArea,
  Paper,
  Typography,
} from '@mui/material';

type PropsType = {
  title: string;
  background: string;
  onClick?: () => void;
};

const IconCard = ({ title, background, onClick }: PropsType) => {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Paper
            sx={{
              width: '100px',
              height: '100px',
              backgroundColor: background,
              mb: 1,
            }}
          />
          <Typography fontSize={16} color='inherit' textAlign='center'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(IconCard);
