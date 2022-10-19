import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#2C3333"
        },
        primary: {
            main: '#E7F6F2'
        },
        secondary: {
            main: '#DCD7C9'
        },
        error: {
            main: red.A400
        },
        },

        components: {
            MuiAppBar: {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        backgroundColor: '#395B64'
                    }
                }
            }
        }
});
