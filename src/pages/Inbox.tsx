import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/NavigationBar';
import { createEndPoint, ENDPOINTS } from '../api'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ButtonContainer from '../components/ButtonContainer';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

export default function Inbox() {

    const [trackingNumber, setTrackingNumber] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [kep, setKEP] = React.useState('');
    const [handling, setHandling] = React.useState('');
    const [delay, setDelay] = React.useState('');
    const [dispatchNote, setDispatchNote] = React.useState('');

    // tracking number error
    const [trackingNumberErr, setTrackingNumberErr] = React.useState(false);
    const [errorTextTNr, setErrorTextTNr] = React.useState('');

    // KEP-DL error
    const [kepErr, setKEPErr] = React.useState(false);
    const [errorTextKEP, setErrorTextKEP] = React.useState('');

    const handleSubmit = (e : any) => { 
        // prevent reloading the page
        e.preventDefault();
        setTrackingNumberErr(false);
        setKEPErr(false);
        setErrorTextTNr('');
        setErrorTextKEP('');

        if (trackingNumber === '')
        {
            setTrackingNumberErr(true);
            setErrorTextTNr('Das Feld Trackingnummer wird benötigt');
        }

        if (kep === '')
        {
            setKEPErr(true);
            setErrorTextKEP('Das Feld KEP-DL wird benötigt');
        }

        const  data = { 
            trackingnumber: trackingNumber, 
            status: status,
            kep: kep,
            handling: handling,
            delay: delay,
            dispatchNote: dispatchNote
        };

        if (trackingNumber && kep) {
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
                onSubmit={ handleSubmit }
            >
                <ButtonContainer></ButtonContainer>                
                <div>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Trackingnummer *
                        </Typography>
                        <FormControl>
                            <TextField
                                id='outlined-error-helper-text'
                                onChange={ (e) => setTrackingNumber(e.target.value) }
                                variant='outlined'
                            />
                            <FormHelperText error= { trackingNumberErr } > { errorTextTNr } </FormHelperText>
                        </ FormControl>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Status
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={ (e) => setStatus(e.target.value) }
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            KEP-DL *
                        </Typography>
                        <FormControl>
                            <Select
                                variant='filled'
                                value={ kep }
                                label='KEP-DL'
                                onChange={ (e) => setKEP(e.target.value) }
                                sx={{ width: 200, bgcolor: '#f1f1f1' }}
                                >
                                <MenuItem value='DHL'>
                                    <em>DHL</em>
                                </MenuItem>
                                <MenuItem value={ 'Hermes' }>Hermes</MenuItem>
                                <MenuItem value={ 'Deutsche Post' }>Deutsche Post</MenuItem>
                            </Select>
                            <FormHelperText error={ kepErr }> { errorTextKEP } </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Handhabung
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={ (e) => setHandling(e.target.value) }
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Rutsche 
                        </Typography>
                        <TextField
                            variant='outlined'
                            onChange={ (e) => setDelay(e.target.value) }
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
                            onChange={ (e) => setDispatchNote(e.target.value) }
                        />
                    </Grid>
                </Grid>
                </div>
            </form>
        </div>
    );
}