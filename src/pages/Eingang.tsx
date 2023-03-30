import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/NavigationBar';

export default function Eingang() {
    const [trackingNumber, setTrackingNumber] = React.useState('')
    const [trackingNumberErr, setTrackingNumberErr] = React.useState(false)
    const handleSubmit = (e : any) => { 
        e.preventDefault();
        setTrackingNumberErr(false);

        if (trackingNumber === '')
        {
            setTrackingNumberErr(true);
        }

        if (trackingNumber) {
            // console.log(trackingNumber);
            fetch('http://localhost:4000/eingang', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify( { trackingNumber })
            })
        }
    }
    return (
        <div>
            <NavigationBar></NavigationBar>
            <form
                noValidate
                autoComplete='false'
                onSubmit={handleSubmit}
            >
                <Grid container>
                    <Grid item>
                        <Button 
                            onClick={() => console.log('Cancel click')} 
                            variant='outlined' 
                            color='primary'
                            startIcon={<CloseIcon />}
                        >
                            Abbrechen
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() => console.log('Save click')} 
                            type='submit'
                            variant='contained'
                            color='primary'
                            endIcon={<SaveIcon />}
                        > 
                            Speichern 
                        </Button>                       
                    </Grid>                         
                </Grid>
                <div>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Trackingnummer
                        </Typography>
                        <TextField
                            id="outlined-error-helper-text"
                            onChange={(e) => setTrackingNumber(e.target.value)}
                            variant='outlined'
                            error={trackingNumberErr}
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Status
                        </Typography>
                        <TextField
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Handhabung
                        </Typography>
                        <TextField
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Rutsche 
                        </Typography>
                        <TextField
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Lieferschein 
                        </Typography>
                        <TextField
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
                </div>
            </form>
        </div>
    );
}