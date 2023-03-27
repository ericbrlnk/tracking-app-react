import * as React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block"
    }
})

export default function Eingang() {
    const classes = useStyles();
    const [trackingnumber, setTrackingNumber] = React.useState('')
    const handleSubmit = (e : any) => { 
        e.preventDefault()

        if (trackingnumber) {
            console.log(trackingnumber);
        }
    }

    return (
        <div>
            <h1>Eingang</h1>
            <Button 
                onClick={() => console.log('Cancel click')} 
                variant='outlined' 
                color='primary'
            >
                Abbrechen
            </Button>
            <Button
                onClick={() => console.log('Save click')} 
                variant='contained'
                color='secondary'
                endIcon={<SaveIcon/>}
            > 
                Speichern 
            </Button>

            <br />
            <form 
                noValidate
                autoComplete='false'
                onSubmit={handleSubmit}
            >
                <h3>Trackingnummer:</h3>
                <TextField
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className={classes.field} 
                    label='trackingnumber'
                    variant='outlined'
                />
                <TextField
                    className={classes.field} 
                    label='status'
                    variant='outlined'
                />
            </form>
        </div>
    );
}