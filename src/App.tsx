import Routes from './routes';

import { CssBaseline, GlobalStyles, Container, Box } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default App;
