import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import EditIcon from '@mui/icons-material/Edit';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CardTemplate from '../cards/CardTemplate'
import { Divider } from '@mui/material';

export default function Home() {
    return (
        <div>
            <Typography
                variant="h4" 
                ml={5}
            >
                Arbeitsablauf
            </Typography>
            <Divider />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Eingang' link='/eingang' cardIcon={ <LocalPostOfficeIcon fontSize='large' /> } />
                </Grid>
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Umbuchung' link='/umbuchung' cardIcon={ <EditIcon fontSize='large' /> } />
                </Grid> 
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Zustellung' link='/umbuchung' cardIcon={ <LocalShippingIcon fontSize='large' /> } />
                </Grid> 
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Abholung' link='/umbuchung' cardIcon={ <ReceiptLongIcon fontSize='large' /> } />
                </Grid>                         
            </Grid>
            <br />
            <Typography
                variant="h4"
                ml={5}
            >
                Verfolgung
            </Typography>
            <Divider />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Verfolgung' link='/umbuchung' cardIcon={ <TravelExploreIcon fontSize='large' /> } />
                </Grid>
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Rollliste' link='/umbuchung' cardIcon={ <FactCheckIcon fontSize='large' /> } />
                </Grid>                         
            </Grid>
            <br />
            <Typography
                variant="h4"
                ml={5}
            >
                Administration
            </Typography>
            <Divider />
            <br />
            <Grid container>
                <Grid item xs={12} sm={6} md={2.5}>
                    <CardTemplate name='Administration' link='/umbuchung' cardIcon={ <SettingsApplicationsIcon fontSize='large' /> } />
                </Grid>                       
            </Grid>
        </div>
    );
}