import React from 'react';

import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

type PropsType = {
  onClick: () => void;
};

const RefreshButton = ({ onClick }: PropsType) => {
  return (
    <IconButton size='large' color='inherit' onClick={onClick}>
      <RefreshIcon fontSize='inherit' />
    </IconButton>
  );
};

export default React.memo(RefreshButton);
