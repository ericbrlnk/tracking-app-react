import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

export default function ButtonContainer() {    
    return (
        <div>
            <Grid container sx={{ mt: 4}}>
                    <Grid item>
                        <Button 
                            variant='outlined' 
                            color='primary'
                            startIcon={ <CloseIcon /> }
                        >
                            Abbrechen
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            endIcon={ <SaveIcon /> }
                        > 
                            Speichern 
                        </Button>                       
                    </Grid>                         
                </Grid>
        </div>
    );
}