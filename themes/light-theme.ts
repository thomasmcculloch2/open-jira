import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const lightTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#FFF8EA"
        },
        primary: {
            main: '#fff'
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
                        backgroundColor: '#121212'
                    }
                }
            }
        }
});
