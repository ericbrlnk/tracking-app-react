import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createEndPoint, ENDPOINTS } from '../api'

interface dataType {
    trackingNumber: string,
    status: string
}

export default function Tracking() {    
    const [id, setID] = React.useState('');

    // tracking number error
    const [idErr, setIDErr] = React.useState(false);
    const [errorTextID, setErrorTextID] = React.useState('');

    const [data, setData] = React.useState<dataType>()

    const handleTrack = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIDErr(false);
        setErrorTextID('');

        if (id === '') {
            setIDErr(true);
            setErrorTextID('Trackingnummer wird benötigt!');
        }

        if (id) {
            createEndPoint(ENDPOINTS.inbox)
            .fetchById(Number(id))
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            }) 
            .catch(err => console.log(err))
        }
    }

    var result: string = `Trackingnummer: ${ data?.trackingNumber } \nStatus: ${ data?.status }`;

    return (
        <div>
            <NavigationBar />
            <Container sx={{ marginLeft: 1 }}>
                <form
                    noValidate
                    autoComplete='false'
                    onSubmit={ handleTrack }
                >
                    <Grid container sx={{ mt: 7}}>
                        <Grid item>
                            <Typography>
                                ID *
                            </Typography>
                            <FormControl>
                                <TextField
                                    id='outlined-error-helper-text'
                                    onChange={ (e) => setID(e.target.value) }
                                    variant='outlined'
                                />
                                <FormHelperText error= { idErr }> { errorTextID } </FormHelperText>
                            </ FormControl>
                        </Grid>
                        <Grid item>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                            > 
                                Verfolgen 
                            </Button> 
                        </Grid>
                    </Grid>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 5, width: '500px' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                value={ result }
                                multiline
                                rows={7}
                                variant="outlined"
                                sx={{ bgcolor: 'secondary.light' }}
                                inputProps={{ 
                                    readOnly: true
                                }}
                            >
                            </TextField> 
                        </div>
                    </Box>
                </form>
            </Container>
        </div>
    );
}