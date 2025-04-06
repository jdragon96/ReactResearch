// theme.ts 또는 theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      contrastText: "#F1F1F1",
    },
    secondary: {
      main: '#dc004e',

    },
    background: {
      default: '#f4f4f4',
    },
    text: {
      primary: "#f1f1f1",
      secondary: "a1a1a1"
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;