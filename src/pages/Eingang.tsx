import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    field: {
        backgroundColor: '#ffffff'
    },
    grid: {
        spacing: 5
    }
})

export default function Eingang() {
    const classes = useStyles();
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
            <form 
                noValidate
                autoComplete='false'
                onSubmit={handleSubmit}
            >
                <Grid container className={ classes.grid }>
                    <Grid item>
                        <Button 
                            onClick={() => console.log('Cancel click')} 
                            variant='outlined' 
                            color='secondary'
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
                <h3>Trackingnummer:</h3>
                <div>
                <TextField
                    id="outlined-error-helper-text"
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className={ classes.field }
                    label='trackingnumber'
                    variant='outlined'
                    error={trackingNumberErr}
                />
                <TextField
                    className={ classes.field } 
                    label='status'
                    variant='outlined'
                />
                </div>
            </form>
        </div>
    );
}