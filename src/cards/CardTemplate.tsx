import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { Link as RouterLink } from 'react-router-dom';

const CardTemplate = (props : any) => {    
    const { name, link, cardIcon } = props
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea component={RouterLink} to={link}>
                <CardContent>
                    <CardHeader 
                        title={ name }
                    >
                    </CardHeader>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardTemplate