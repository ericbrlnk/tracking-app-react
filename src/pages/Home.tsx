import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import EditIcon from '@mui/icons-material/Edit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CardTemplate from '../cards/CardTemplate'
import { Container, Divider } from '@mui/material';

export default function Home() {
    return (
        <div>
            <Container maxWidth="xl" sx={{ marginLeft: 1 }}>
                <Typography
                    variant="h4" 
                    ml={ 5 }
                >
                    Arbeitsablauf
                </Typography>
                <Divider />
                <br />
                <Grid container>
                    {/* splitting the grid according to the size of the screen, example: for small screens number of columns = 12/12 = 1 */}
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Eingang' link='/inbox' cardIcon={ <LocalPostOfficeIcon fontSize='large' /> } />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Umbuchung' link='/orderchange' cardIcon={ <EditIcon fontSize='large' /> } />
                    </Grid> 
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Zustellung' link='/delivery' cardIcon={ <LocalShippingIcon fontSize='large' /> } />
                    </Grid> 
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Abholung' link='/pickup' cardIcon={ <ReceiptLongIcon fontSize='large' /> } />
                    </Grid>                         
                </Grid>
                <br />
                <Typography
                    variant="h4"
                    ml={ 5 } 
                >
                    Verfolgung
                </Typography>
                <Divider />
                <br />
                <Grid container>
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Verfolgung' link='/' cardIcon={ <TravelExploreIcon fontSize='large' /> } />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Rollliste' link='/' cardIcon={ <FactCheckIcon fontSize='large' /> } />
                    </Grid>                         
                </Grid>
                <br />
                <Typography
                    variant="h4"
                    ml={ 5 }
                >
                    Administration
                </Typography>
                <Divider />
                <br />
                <Grid container>
                    <Grid item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <CardTemplate name='Administration' link='/administration' cardIcon={ <SettingsApplicationsIcon fontSize='large' /> } />
                    </Grid>                       
                </Grid>
            </Container>
        </div>
    );
}