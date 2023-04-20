import React, { MouseEvent } from 'react'
import NavigationBar from '../components/NavigationBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import ButtonContainer from '../components/ButtonContainer';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

export default function OrderChange() {    
    const [readOnly, setReadOnly] = React.useState(true);

    const handleClick = (e: MouseEvent) => {
        setReadOnly(!readOnly);
    }

    return (
        <div>
            <NavigationBar />
            <Container sx={{ marginLeft: 1 }}>
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
                                variant='outlined'
                            />
                        </Grid>
                        <Grid item>
                            <Typography>
                                Trackingnummer
                            </Typography>
                            <TextField
                                variant='outlined'
                                inputProps={{ 
                                    readOnly: Boolean(readOnly)
                                }}
                                sx={{ bgcolor: (Boolean(readOnly)) ? 'secondary.light' : null }}
                            />
                            <IconButton 
                                aria-label='edit' 
                                size="small"
                                sx={{ ml: -2, mt: 1 }}
                                onClick={ handleClick }
                            >

                                <EditIcon />
                            </IconButton>
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
            </Container>
        </div>
    );
}