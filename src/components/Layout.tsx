import React from 'react';
import { Theme, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

// styles used for main page and other children
import './styles.css';

// theme create for spacing of particular MUI-Components and properties of palette/typography
const theme = createTheme({
    components: {
        MuiTextField: {
          styleOverrides: {
            root: {
                backgroundColor: '#f1f1f1',
                marginRight: 30
            }
          }
        },
        MuiButton: {
            styleOverrides: {
              root: {
                  marginRight: 20,
                  marginTop: 50
              }
            }
        },
        MuiTypography: {
            styleOverrides: {
              root: {
                marginTop: 10,
                marginBottom: 10,
              }
            }
        },
        MuiGrid: {
            styleOverrides: {
              root: {
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 20
              }
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                }
              }
        }
    },
    palette: {
        primary: {
            light: '#489FB5',
            main: '#1B7587',
            dark: '#0A3E49'
        },
        secondary: {
            light: '#C8CCD6',
            main: '#A8AAB1',
            dark: '#74767B'

        }
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})

export function Layout( { children } : any ) {    
    return (
        <div className="root">
            {/* Main bar */}
            <AppBar className="appbar">               
                <Toolbar>
                    <Typography>
                        ICSTrack
                    </Typography>
                </Toolbar>    
            </AppBar>
            {/* Children components */}
            <div className="page">
            {/* Shift the contents down */}
            <div className="toolbar"></div>
                { children }
            </div>
        </div>
    );
}

export default theme;