import { createTheme } from "@mui/material";

export const ThemePalette = createTheme({
    typography: {
        fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: {
        type: 'light',
        primary: {
            main: '#7673FE',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: 'white',
        },
    },
    shape: {
        borderRadius: 0,
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: 'none', // Remove the box shadow for contained buttons
            },
            outlined: {
                boxShadow: 'none', // Remove the box shadow for outlined buttons
            },
        },
    },
});
