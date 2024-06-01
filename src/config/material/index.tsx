import { createTheme } from '@mui/material/styles';

const material = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: '#00626C',
            light: '#00626C',
            dark: '#00626C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#EA8F48',
            light: '#EA8F48',
            dark: '#EA8F48',
            contrastText: '#00626C',
        },
        error: {
            main: '#D32F2F',
            light: '#D32F2F',
            dark: '#D32F2F',
            contrastText: '#fff',
        },
        warning: {
            main: '#ED6C02',
            light: '#ED6C02',
            dark: '#ED6C02',
            contrastText: '#fff',
        },
        info: {
            main: '#0288D1',
            light: '#0288D1',
            dark: '#0288D1',
            contrastText: '#fff',
        },
        success: {
            main: '#2E7D32',
            light: '#2E7D32',
            dark: '#2E7D32',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'unset',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },

});

export default material;