import React from 'react';

import { Stack, Typography } from '@mui/material';

type PropsType = {
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  text: string;
};

const MiddleTypography = ({ variant, text }: PropsType) => {
  return (
    <Stack
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <Typography variant={variant}>{text}</Typography>
    </Stack>
  );
};

export default React.memo(MiddleTypography);
