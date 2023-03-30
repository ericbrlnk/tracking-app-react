import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Theme, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import NavigationBar from './NavigationBar';

const useStyles = makeStyles((theme : Theme) => {
    return {
    root: {
        //display: 'flex'
    },
    page: {
        //backgroundColor: '#106066',
        backgroundColor: '#a4d5d3',
        width: '100%',
        //padding: 50
    },
    appbar: {
    },
    toolbar: theme.mixins.toolbar
}
})

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
                    //backgroundColor: '#2076A7'
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
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            {/* Main bar */}
            <AppBar className={ classes.appbar }>               
                <Toolbar>
                    <Typography>
                        ICSTrack
                    </Typography>
                </Toolbar>    
            </AppBar>
            {/* Children components */}
            <div className={ classes.page }>
            {/* Shift the contents down */}
            <div className={ classes.toolbar }></div>
                { children }
            </div>
        </div>
    );
}

export default theme;