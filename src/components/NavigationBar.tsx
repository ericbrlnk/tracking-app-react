import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import EditIcon from '@mui/icons-material/Edit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

// custom style for navigation bar
import './styles.css';

const NavigationBar = () => {
    // using react router for navigation
    const navigate = useNavigate();

    return (
      <AppBar position='fixed' sx={{ mt: 8 }}>
        <Toolbar className = "navBar">
            <Grid container sx={{ mt: -5, ml: -3 }}>
                <Grid item>
                    <Button
                        onClick={ () => navigate('/') }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }} 
                        startIcon={<HomeIcon />}
                    >
                        Home
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate('/inbox') }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: 'primary.main', '&:hover': {bgcolor: 'primary.light' }}} 
                        startIcon={ <LocalPostOfficeIcon /> }
                    >
                        Eingang
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate('/orderchange') }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }}
                        startIcon={ <EditIcon /> }
                    > 
                        Umbuchung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate('/delivery') }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }}
                        startIcon={ <LocalShippingIcon /> }
                    > 
                        Zustellung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate('/pickup') }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }}
                        startIcon={ <ReceiptLongIcon /> }
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