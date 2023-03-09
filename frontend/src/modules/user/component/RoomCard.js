import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Box,
	Link,
	Typography,
	Paper,
	TextField,
	Button,
    Grid
} from "@mui/material"
// import Grid from '@mui/material/Unstable_Grid2';
import SettingsIcon from '@mui/icons-material/Settings';
import Header from "./header"
import SelectHouse from "./selectHouse"
import TungstenIcon from '@mui/icons-material/Tungsten';
import { styled } from '@mui/material/styles';

import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import GarageIcon from '@mui/icons-material/Garage';
import BusinessIcon from '@mui/icons-material/Business';

function UserDashboard(props) {
	const navigate  = useNavigate();
    
    return (
    <>
        <Grid item xs={2}>
            <Paper sx={{
                backgroundColor: "#e0e0e0",
                height: "80px", 
                padding: 2, 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"

            }}>
                {{
                    1: (
                        <KitchenIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    ),
                    2: (
                        <ChairIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    ),
                    3: (
                        <SingleBedIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    ),
                    4: (
                        <BusinessIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    ),
                    5: (
                        <GarageIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    ),
                    default: (
                        <ChairIcon sx={{fontSize: 55, color: "#039be5"}}/>
                    )
                }[props.icon]}
                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                    {props.name}
                </Typography>
            </Paper>
        </Grid>
    </>
    );
}

export default UserDashboard;
