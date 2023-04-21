import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import EditIcon from '@mui/icons-material/Edit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LoginIcon from '@mui/icons-material/Login';

// custom style for navigation bar
import './styles.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const NavigationBar = () => {
    // using react router for navigation
    const navigate = useNavigate();
    const currentLocation = useLocation();
    
    var sites: { [key: string]: string } = {
        'home': '/',
        'inbox': '/inbox',
        'orderchange': '/orderchange',
        'delivery': '/delivery',
        'pickup': '/pickup',
        'login': '/login'
    }

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
                        onClick={ () => navigate(sites['inbox']) }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: (currentLocation.pathname === sites['inbox']) ? 'primary.light' : 'primary.main', 
                            '&:hover': { bgcolor: 'primary.light' }}} 
                        startIcon={ <LocalPostOfficeIcon /> }
                    >
                        Eingang
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate(sites['orderchange']) }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: (currentLocation.pathname === sites['orderchange']) ? 'primary.light' : 'primary.main', 
                            '&:hover': { bgcolor: 'primary.light' }}}
                        startIcon={ <EditIcon /> }
                    > 
                        Umbuchung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate(sites['delivery']) }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: (currentLocation.pathname === sites['delivery']) ? 'primary.light' : 'primary.main', 
                            '&:hover': { bgcolor: 'primary.light' }}}
                        startIcon={ <LocalShippingIcon /> }
                    > 
                        Zustellung
                    </Button>                                                       
                </Grid>
                <Grid item>
                    <Button
                        onClick={ () => navigate(sites['pickup']) }
                        variant='contained'
                        sx={{ width: '100%', bgcolor: (currentLocation.pathname === sites['pickup']) ? 'primary.light' : 'primary.main', 
                            '&:hover': { bgcolor: 'primary.light' } }}
                        startIcon={ <ReceiptLongIcon /> }
                    > 
                        Abholung
                    </Button>                                                       
                </Grid>                                              
            </Grid>
            <Box>
                <Typography color={'secondary.dark'} sx={{ m: 2 }}>
                        { localStorage.getItem("currentUser") } 
                </Typography>
            </Box>
            <Box>
                <IconButton onClick={ () => navigate(sites['login']) } sx={{ mr: 1,  p: 0 }}>
                    <LoginIcon sx={{ mr: 1,  p: 0 }}></LoginIcon>
                    <Typography color={'secondary.dark'} sx={{ m: 1 }}>
                        login
                    </Typography>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;