import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E',
    },
    secondary: {
      main: '#3A64D8',
      light: '#f2f6f7',
    },
    info: {
      main: '#fff',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    // MuiAppBar: {
    //   defaultProps: {
    //     elevation: 0,
    //     position: "fixed",
    //   },
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "white",
    //       height: 60,
    //     },
    //   },
    // },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 20,
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
        //color: "primary",
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 7,
          ':hover': {
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
  },
});
