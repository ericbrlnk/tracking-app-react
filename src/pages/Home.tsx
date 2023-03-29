import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import EditIcon from '@mui/icons-material/Edit';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { makeStyles } from '@mui/styles';
import CardTemplate from '../cards/CardTemplate'
import { Divider } from '@mui/material';

const useStyles = makeStyles({
    heading: {
        color: '#ffffff',
    }, 
    grid: {
        spacing: 5
    }
})

{/* icons */}
const IconEdit = () => {
    return <EditIcon fontSize='large' />;
};

const IconPostOffice = () => {
    return <LocalPostOfficeIcon fontSize='large' />;
};

const IconShipping = () => {
    return <LocalShippingIcon fontSize='large' />;
};

const IconReceipt = () => {
    return <ReceiptLongIcon fontSize='large' />;
};

const IconExplore = () => {
    return <TravelExploreIcon fontSize='large' />;
};

const IconChecklist = () => {
    return <FactCheckIcon fontSize='large' />;
};

const IconAdministration = () => {
    return <SettingsApplicationsIcon fontSize='large' />;
};

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Typography
                //className={ classes.heading } 
                variant="h4"
            >
                Arbeitsablauf
            </Typography>
            <Divider />
            <br />
            <Grid container className={ classes.grid }>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Eingang' link='/eingang' cardIcon={ IconPostOffice() } />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Umbuchung' link='/umbuchung' cardIcon={ IconEdit() } />
                </Grid> 
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Zustellung' link='/umbuchung' cardIcon={ IconShipping() } />
                </Grid> 
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Abholung' link='/umbuchung' cardIcon={ IconReceipt() } />
                </Grid>                         
            </Grid>
            <br />
            <Typography
                //className={ classes.heading } 
                variant="h4"
                gutterBottom
            >
                Verfolgung
            </Typography>
            <Divider />
            <br />
            <Grid container className={ classes.grid }>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Verfolgung' link='/umbuchung' cardIcon={ IconExplore() } />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Rollliste' link='/umbuchung' cardIcon={ IconChecklist() } />
                </Grid>                         
            </Grid>
            <br />
            <Typography
                //className={ classes.heading } 
                variant="h4"
            >
                Administration
            </Typography>
            <Divider />
            <br />
            <Grid container className={ classes.grid }>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Administration' link='/umbuchung' cardIcon={ IconAdministration() } />
                </Grid>                       
            </Grid>
        </div>
    );
}