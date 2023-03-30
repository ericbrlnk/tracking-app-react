import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'

const useStyles = makeStyles((theme : Theme) => {
    return {
        navBar: { backgroundColor: theme.palette.secondary.light }
}
})

const NavigationBar = (props : any) => {
    const { history } = props;
    const classes = useStyles();

    const handleClick = (pageUrl : string) => {
    }

    return (
      <AppBar position="static">
        <Toolbar className = {classes.navBar} variant='dense'>
                {/*}
                <Button onClick={() => handleClick('/eingang')} color="inherit">Login</Button>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                    <Button onClick={() => handleClick('/eingang')} color="inherit">Login</Button>
                */}
                <Grid container sx={{ mt: -5, ml: -3 }} >
                            <Grid item>
                                <Button
                                    onClick={() => console.log('Test 1 click')} 
                                    variant='contained'
                                    sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}} 
                                    //startIcon={<CloseIcon />}
                                >
                                    Eingang
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => console.log('Test 2 click')} 
                                    variant='contained'
                                    sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}}
                                    //endIcon={<SaveIcon />}
                                > 
                                    Umbuchung
                                </Button>                                                       
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={() => console.log('Test 2 click')} 
                                    variant='contained'
                                    sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}}
                                    //endIcon={<SaveIcon />}
                                > 
                                    Zustellung
                                </Button>                                                       
                            </Grid>                              
                </Grid>
            </Toolbar>
      </AppBar>
  );
}

export default NavigationBar;