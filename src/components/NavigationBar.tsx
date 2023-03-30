import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import EditIcon from '@mui/icons-material/Edit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

const useStyles = makeStyles((theme : Theme) => {
    return {
        navBar: { backgroundColor: theme.palette.secondary.light }
}
})

const NavigationBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
      <AppBar position="static">
        <Toolbar className = {classes.navBar} variant='dense'>
            <Grid container sx={{ mt: -5, ml: -3 }} >
                <Grid item>
                    <Button
                        onClick={() => navigate('/eingang')}
                        variant='contained'
                        sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}} 
                        startIcon={<LocalPostOfficeIcon />}
                    >
                        Eingang
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => navigate('/umbuchung')}
                        variant='contained'
                        sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}}
                        startIcon={<EditIcon />}
                    > 
                        Umbuchung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => navigate('/zustellung')}
                        variant='contained'
                        sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}}
                        startIcon={<LocalShippingIcon />}
                    > 
                        Zustellung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => console.log('Test 2 click')} 
                        variant='contained'
                        sx={{width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light'}}}
                        startIcon={<ReceiptLongIcon />}
                    > 
                        Abholung
                    </Button>                                                       
                </Grid>                                              
            </Grid>
        </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;