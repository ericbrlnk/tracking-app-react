import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EditIcon from '@mui/icons-material/Edit';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { makeStyles } from '@mui/styles';
import { MarginOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
    btn: {
        marginTop: 100,
        marginBottom: 20,
    },
    title: {
        textDecoration: "underline",
        marginTop: 100,
        marginBottom: 100
    }
})

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Typography
                className={classes.title} 
                variant="h6"
                component="h2"
            >
                Home Page
            </Typography>

            <br />
            <Button
                className={classes.btn}
                onClick={() => console.log("Eingang click")} 
                variant="outlined" 
                endIcon={<LocalPostOfficeIcon fontSize="large"/>}
                href="eingang"
            >
                Eingang
            </Button>

            <Button
                onClick={() => console.log("Umbuchung click")} 
                variant="outlined" 
                endIcon={<EditIcon fontSize="large"/>}
                href="umbuchung"
            >
                Umbuchung
            </Button>

            {/*
            <br />
            <Button
                className={classes.btn}
                onClick={() => console.log("Eingang click")} 
                variant="outlined" 
                endIcon={<LocalPostOfficeIcon fontSize="large"/>}
            >
                Eingang
            </Button>
            {/* Part with useStyles
            <Typography 
                className={classes.title}
                variant="h6"
                component="h2"
            >
                Home Page
            </Typography>
            /*}

            <Link to="eingang"> Eingang </Link>
            <Link to="umbuchung"> Umbuchung </Link>

            {/*
            <br />
            <Button
                className={classes.btn}
                onClick={() => console.log("Eingang click")} 
                variant="outlined" 
                endIcon={<LocalPostOfficeIcon fontSize="large"/>}
            >
                Eingang
            </Button>
            */}

            {/* icons */}
            {/*
            <br />
            <TravelExploreIcon fontSize="large"/>
            <br />
            <LocalShippingIcon fontSize="large"/>
            <br />
            <LocalPostOfficeIcon fontSize="large"/>
            */}
        </div>
    );
}