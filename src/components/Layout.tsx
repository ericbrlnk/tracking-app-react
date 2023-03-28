import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme : Theme) => {
    return {
    root: {
        display: 'flex'
    },
    page: {
        //backgroundColor: '#106066',
        backgroundColor: '#82C0CC',
        width: '100%',
        padding: 50
    },
    appbar: {
        
    },
    toolbar: theme.mixins.toolbar
    }
})

export default function Layout( { children } : any ) {    
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