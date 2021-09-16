import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#F6F6F8',
            main: '#e3e3e3',
            dark: '#99e9e9e',
            contrastText: 'black',
        },
        secondary: {
            main: '#c60021',
            light: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})
export default theme
