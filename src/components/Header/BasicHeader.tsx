import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import BackButton from '@components/Buuton/BackButton';

type PropsType = {
  children: React.ReactNode;
  right?: React.ReactNode;
};

const BasicHeader = ({ children, right }: PropsType) => {
  const navigate = useNavigate();

  const onClickGoBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Grid container spacing={2} sx={{ xs: 12, mb: 5 }}>
      <Grid item xs={1.5}>
        <BackButton onClick={onClickGoBack} />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
      <Grid item xs={1.5}>
        {right}
      </Grid>
    </Grid>
  );
};

export default BasicHeader;
