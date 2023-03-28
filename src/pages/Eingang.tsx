import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    field: {
        color: '#ffffff'
    },
    heading: {
        color: '#ffffff'
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
            <Typography
                className={classes.heading} 
                variant="h6"
            >
                Eingang
            </Typography>
            <br />
            <form 
                noValidate
                autoComplete='false'
                onSubmit={handleSubmit}
            >
                            <Button 
                onClick={() => console.log('Cancel click')} 
                variant='outlined' 
                color='secondary'
                startIcon={<CloseIcon />}
            >
                Abbrechen
            </Button>
            <Button
                onClick={() => console.log('Save click')} 
                type='submit'
                variant='contained'
                color='secondary'
                endIcon={<SaveIcon />}
            > 
                Speichern 
            </Button>
                <h3>Trackingnummer:</h3>
                <TextField
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className={ classes.field } 
                    label='trackingnumber'
                    variant='outlined'
                    error={trackingNumberErr}
                    sx={{
                        fieldset: { borderColor: "white" }
                    }}
                />
                <TextField
                    className={ classes.field } 
                    label='status'
                    variant='outlined'
                    sx={{
                        fieldset: { borderColor: "white" }
                    }}
                />
            </form>
        </div>
    );
}