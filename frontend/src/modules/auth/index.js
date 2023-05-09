// import LoginComponent from "./login/index";
// import RegisterComponent from "./register/index";


// export const Login = LoginComponent
// export const Register = RegisterComponent

import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
    Grid,
	Box,
	Link,
	Typography,
	Paper,
	TextField,
    Modal,
	Button,
    IconButton,
    Alert
} from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';
import {loginAPI, registerAPI} from "./service"
import jwt_decode from "jwt-decode"

import "./style.css"

function LandingPage() {
	const navigate  = useNavigate();
    

    return (
		<Container maxWidth={"false"} className="Container" sx={{backgroundColor: "#38a0ff", height: "100vh", width: "100vw", margin: 0, paddingInline: 45}}>
            <Grid container spacing={2} >
                
                
                <Grid item xs={6} mt={15}>
                   <Typography variant="h1">
                    Home automation system
                   </Typography>
                </Grid>
                <Grid item xs={6} paddingX={3} mt={15} >
                    <img width={"90%"} src={require("../../shared/images/landing.png")} />
                </Grid>
            </Grid>
            
            
		</Container>
  );
}

export default LandingPage;
