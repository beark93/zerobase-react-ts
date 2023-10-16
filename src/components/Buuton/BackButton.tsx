import React from 'react';

import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type PropsType = {
  onClick: () => void;
};

const BackButton = ({ onClick }: PropsType) => {
  return (
    <IconButton size='large' color='inherit' onClick={onClick}>
      <ArrowBackIosNewIcon fontSize='inherit' />
    </IconButton>
  );
};

export default React.memo(BackButton);
