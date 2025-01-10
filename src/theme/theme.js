import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC', // Purple
    },
    secondary: {
      main: '#03DAC6', // Teal
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1F1B24',   // Slightly lighter for cards/sections
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
        },
      },
    },
  },
});

export default theme;
