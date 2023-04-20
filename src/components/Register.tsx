import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link  } from 'react-router-dom';

export default function Register() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };
  
    return (
        <Container component='main' maxWidth='xs' sx={{ marginLeft: 1 }}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid container spacing={ 1 }>
                <Grid item>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        Register
                    </Typography>
                </Grid>
            </Grid>
            <Box component="form" noValidate onSubmit={ handleSubmit }>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } sm={ 6 }>
                    <Typography>
                        Vorname
                    </Typography>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                    <Typography>
                        Nachname
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography>
                        Email
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography>
                        Passwort
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        name="pwd"
                        type="password"
                        id="password"
                    />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ ml: 6, mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
            </Grid>
            </Box>
          </Box>
        </Container>
    );
  }