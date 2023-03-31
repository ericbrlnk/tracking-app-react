import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/NavigationBar';
import { createEndPoint, ENDPOINTS } from '../api'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Inbox() {

    const [trackingNumber, setTrackingNumber] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [handling, setHandling] = React.useState('');
    const [delay, setDelay] = React.useState('');
    const [dispatchNote, setDispatchNote] = React.useState('');

    const [trackingNumberErr, setTrackingNumberErr] = React.useState(false);

    const [kep, setKEP] = React.useState('');

    let helpertext = '';

    const handleChange = (event: SelectChangeEvent) => {
        setKEP(event.target.value);
    };

    const handleSubmit = (e : any) => { 
        // prevent reloading the page
        e.preventDefault();
        setTrackingNumberErr(false);

        if (trackingNumber === '')
        {
            setTrackingNumberErr(true);
        }

        const  data = { 
            trackingnumber: trackingNumber, 
            status: status,
            handling: handling,
            delay: delay,
            dispatchNote: dispatchNote
        };

        if (trackingNumber) {
            createEndPoint(ENDPOINTS.inbox)
                .post(data)
                .then(res => console.log(res))
                .catch(err => console.log(err));
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
                            error={ trackingNumberErr }
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Status
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            KEP-DL
                        </Typography>
                        <Select
                            variant='filled'
                            value={kep}
                            label="KEP-DL"
                            onChange={handleChange}
                            sx={{width: 200}}
                            >
                            <MenuItem value="DHL">
                                <em>DHL</em>
                            </MenuItem>
                            <MenuItem value={ 'Hermes' }>Hermes</MenuItem>
                            <MenuItem value={ 'Deutsche Post' }>Deutsche Post</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Handhabung
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={(e) => setHandling(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Rutsche 
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={(e) => setDelay(e.target.value)}
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
                            onChange={(e) => setDispatchNote(e.target.value)}
                        />
                    </Grid>
                </Grid>
                </div>
            </form>
        </div>
    );
}