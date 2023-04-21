import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const storedEmail = localStorage.getItem("email");
    const storedPwd = localStorage.getItem("pwd");
    
    // Login Handler
    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (email === storedEmail && pwd === storedPwd)
        {
            localStorage.setItem("currentUser", email);
            alert("User logged-in");
            window.location.reload();
        }
        else
        {
            alert("Incorrect data");
        }
    };

    // Logout Handler
    const HandleLogout = () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
  
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
                    <Typography variant='h5'>
                        Anmelden
                    </Typography>
                </Grid>
            </Grid>
            <Box component='form' noValidate onSubmit={ handleLogin }>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 }>
                    <Typography>
                        Email
                    </Typography>
                    <TextField
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        id='email'
                        name='email'
                        autoComplete='email'
                    />
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography>
                        Passwort
                    </Typography>
                    <TextField
                        value={ pwd }
                        onChange={ (e) => { setPwd(e.target.value) }}
                        required
                        fullWidth
                        name='pwd'
                        type='password'
                        id='password'
                    />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ ml: 6, mt: 3, mb: 2 }}
              >
                Anmelden
              </Button>
              <Button
                onClick={ () => HandleLogout() }
                fullWidth
                variant='outlined'
                sx={{ ml: 6, mt: 1, mb: 2 }}
              >
                Abmelden
              </Button>
            </Box>
          </Box>
        </Container>
    );
  }