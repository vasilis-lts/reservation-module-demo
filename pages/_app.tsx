import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'geomanist-regular, Arial',
  },
  palette: {
    success: {
      main: "#46ad48",
      contrastText: "#fff"
    },
    warning: {
      main: "#e05556",
      contrastText: "#fff"
    },

  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
