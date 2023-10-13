import Routes from './routes';

import { CssBaseline, GlobalStyles, Container, Box } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth='sm'
        sx={{
          backgroundColor: '#fff',
          height: '100vh',
          py: {
            xs: 6,
            sm: 2,
          },
        }}
      >
        <GlobalStyles styles={{ body: { backgroundColor: '#ececec' } }} />
        <Box sx={{ width: '100%', height: '100%', display: 'inline-block' }}>
          <Routes />
        </Box>
      </Container>
    </>
  );
};

export default App;
