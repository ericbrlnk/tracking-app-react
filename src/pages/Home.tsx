import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EditIcon from '@mui/icons-material/Edit';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { makeStyles } from '@mui/styles';
import { MarginOutlined } from "@mui/icons-material";
import CardTemplate from '../cards/CardTemplate'

const useStyles = makeStyles({
    heading: {
        color: '#ffffff'
    }
})

const CardIcon = () => {
    return <EditIcon />
};

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Typography
                className={classes.heading} 
                variant="h5"
            >
                Arbeitsablauf
            </Typography>
            <br />
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate name='Eingang' link='/eingang' cardIcon={CardIcon} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <CardTemplate name='Umbuchung' link='/umbuchung' />
                </Grid> 
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate />
                </Grid> 
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate />
                </Grid>                          
            </Grid>
            <br />
            <Typography
                className={classes.heading} 
                variant="h5"
            >
                Verfolgung
            </Typography>
            <br />
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate />
                </Grid>                         
            </Grid>
            <br />
            <Typography
                className={classes.heading} 
                variant="h5"
            >
                Administration
            </Typography>
            <br />
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardTemplate />
                </Grid>                       
            </Grid>

            {/* icons */}
            {/*
            <br />
            <TravelExploreIcon fontSize="large"/>
            <br />
            <LocalShippingIcon fontSize="large"/>
            <br />
            <LocalPostOfficeIcon fontSize="large"/>
            */}
        </div>
    );
}