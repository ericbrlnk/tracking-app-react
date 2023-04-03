import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CardTemplate = (props : any) => {    
    const { name, link, cardIcon } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea component={ RouterLink } to={ link }>
                <CardContent>
                    <CardHeader 
                        title={ name }
                    >
                    </CardHeader>
                    <Typography variant='body2'>
                        { cardIcon }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardTemplate