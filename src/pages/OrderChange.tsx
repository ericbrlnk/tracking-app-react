import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import ButtonContainer from '../components/ButtonContainer';

export default function OrderChange() {    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <form
                noValidate
                autoComplete='false'
                // onSubmit={ handleSubmit }
            >
                <ButtonContainer></ButtonContainer>   
                <div>
                <Grid container>
                    <Grid item>
                        <Typography>
                            ID *
                        </Typography>
                        <TextField
                            id='outlined-error-helper-text'
                            // onChange={ (e) => setTrackingNumber(e.target.value) }
                            variant='outlined'
                            // error={ trackingNumberErr }
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Trackingnummer
                        </Typography>
                        <TextField
                            variant='outlined'
                            // onChange={ (e) => setStatus(e.target.value) }
                        />
                    </Grid>
                </Grid>
                <Grid container>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Typography>
                            Container ID *
                        </Typography>
                        <TextField
                            variant='outlined'
                            // onChange={ (e) => setHandling(e.target.value) }
                        />
                    </Grid>
                </Grid>
                </div>
            </form>
        </div>
    );
}