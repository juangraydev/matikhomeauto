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

import "./style.css"

function LandingPage() {
	const navigate  = useNavigate();
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleLoginOpen = () => {
        setOpenLogin(true)
        setFormData(logInitState);
        setFormError({});
    };
    const handleLoginClose = () => setOpenLogin(false);

    const [openRegister, setOpenRegister] = React.useState(false);
    const handleRegisterOpen = () => {
        setOpenRegister(true);
        setFormData(regInitState);
        setFormError({});
    }
    const handleRegisterClose = () => setOpenRegister(false);

    const logInitState = {
        username: "",
        password: ""
    }
    const regInitState = {
        name: "",
        username: "",
        password: "",
        cpassword: ""
    }
    

    const [formData, setFormData] = React.useState({})

    const [formError, setFormError] = React.useState({})

    const handleOnChange = (event) => {
        console.log("event", formData);
        setFormData({...formData, [event.target.id]: event.target.value})
    }

    const handleSubmitForm = () => {
        setFormError({})
        const error = validateForm(formData);
        setFormError(error)
        if(!Object.keys(error).length && openLogin){
            LoginAPI(formData);
        }else if(!Object.keys(error).length  && openRegister){
            RegisterAPI(formData);
        }
    }
    
    const validateForm = () => {
        let Error = {};
        Object.keys(formData).map((data) => {
            if(formData[data].length === 0 || formData[data] === ""){
                Error = {...Error, [data]: "This Field is Required!"};
            }else if(data === "cpassword"){
                if(formData[data] != formData['password']){
                    Error = {...Error, [data]: "Password Do Not Match!"}
                }
            }
        })
        return Error;
    }

    const LoginAPI = (data) => {
        // alert("api login")
        loginAPI(data)
    }
    const RegisterAPI = (data) => {

        registerAPI(data)
        // alert("api regsiter")
    }

    return (
		<Container maxWidth={"false"} className="Container" sx={{backgroundColor: "#38a0ff", height: "100vh", width: "100vw", margin: 0, paddingInline: 45}}>
            <Grid container spacing={2} >
                <Grid item xs={12} mt={3} paddingX={3} sx={{height: 100}}>
                    <Grid container spacing={2} >
                        <Grid item xs={6} paddingX={3}>
                            <img src={require("../../shared/images/matik-upper.png")} alt="logo" width={300} />
                        </Grid>
                        <Grid item xs={6} paddingX={3} sx={{display: "block"}}>
                            <div style={{float: "right"}}>
                                <Button variant="contained" sx={{marginInline: 1}} onClick={handleLoginOpen}>Login</Button>
                                <Button variant="contained" onClick={handleRegisterOpen}>Register</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                   <Typography variant="h1">
                    Home automation system
                   </Typography>
                </Grid>
                <Grid item xs={6} paddingX={3} mt={7} sx={{display: "block"}}>
                    <img width={"90%"} src={require("../../shared/images/landing.png")} />
                </Grid>
            </Grid>
            
            {   // Login Form Modal
                <Modal
                    open={openLogin}
                    onClose={handleLoginClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    
                    <Paper elevation={3} sx={{  position: "relative", height: 'fit-content', width: 350, margin: "calc(100vh - 95vh + 10px) auto", padding: "35px", backdropFilter: "blur(5)"}} >
                        
                        <IconButton sx={{ position: "absolute", right: 20, top: 20}} onClick={handleLoginClose}>
                            <CloseIcon/>
                        </IconButton>
                        <img src={require("../../shared/images/matik_upper_2.png")} alt="logo" width={270} style={{margin: "auto",  display: "block"}}/>
                        <Typography variant="h5" gutterBottom sx={{textAlign: "center", fontWeight: 600}} mt={3}>
                            Login to Your Account
                        </Typography>
                        <TextField 
                            id="username" 
                            label="Username" 
                            variant="outlined" 
                            onChange={handleOnChange}
                            sx={{marginTop: "15px", width: "100%"}} 
                            error={formError?.username}
                            helperText={formError?.username}
                        />
                        <TextField 
                            id="password" 
                            label="Password" 
                            variant="outlined" 
                            type={"password"} 
                            onChange={handleOnChange}
                            sx={{marginTop: "15px", width: "100%"}} 
                            error={formError?.password}
                            helperText={formError?.password}
                        />
                        <Button 
                            variant="contained"
                            onClick={handleSubmitForm}
                            sx={{marginTop: "15px", width: "100%"}}
                        >
                            <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35 }} >
                                Login 
                            </Typography>
                        </Button>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 400, marginBlock: 0.8, display: "block", textAlign: "right"}} >
                            Don't have an account?  
                            <Link
                                component="button"
                                variant="button"
                                sx={{marginLeft: "5px"}}
                                onClick={() => {handleRegisterOpen(); handleLoginClose()}}
                            >
                                Register now!
                            </Link>
                        </Typography>
                    </Paper>
                </Modal>
            }
            {   // Register Form Modal
                <Modal
                    open={openRegister}
                    onClose={handleRegisterClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Paper elevation={3} sx={{  position: "relative", height: 'fit-content', width: 350, margin: "calc(100vh - 95vh + 10px) auto", padding: "35px", backdropFilter: "blur(5)"}} >
                        <IconButton sx={{ position: "absolute", right: 20, top: 20}} onClick={handleRegisterClose}>
                            <CloseIcon/>
                        </IconButton>
                        <img src={require("../../shared/images/matik_upper_2.png")} alt="logo" width={270} style={{margin: "auto",  display: "block"}}/>
                        <Typography variant="h5" gutterBottom sx={{textAlign: "center", fontWeight: 600}} mt={3}>
                            Register an Account
                        </Typography>
                        <TextField 
                            id="name" 
                            label="Name" 
                            variant="outlined" 
                            onChange={handleOnChange}
                            sx={{marginTop: "15px", width: "100%"}} 
                            error={formError?.name}
                            helperText={formError?.name}
                        />
                        <TextField 
                            id="username" 
                            label="Username" 
                            variant="outlined" 
                            sx={{marginTop: "15px", width: "100%"}} 
                            onChange={handleOnChange}
                            error={formError?.username}
                            helperText={formError?.username}
                        />
                        <TextField 
                            id="password" 
                            label="Password" 
                            variant="outlined" 
                            type={"password"} 
                            sx={{marginTop: "15px", width: "100%"}} 
                            onChange={handleOnChange}
                            error={formError?.password}
                            helperText={formError?.password}
                        />
                        <TextField 
                            id="cpassword" 
                            label="Confirm Password" 
                            variant="outlined" 
                            type={"password"} 
                            sx={{marginTop: "15px", width: "100%"}} 
                            onChange={handleOnChange}
                            error={formError?.cpassword}
                            helperText={formError?.cpassword}
                        />
                        <Button 
                            variant="contained"
                            sx={{marginTop: "15px", width: "100%"}} 
                            onClick={handleSubmitForm}
                        >
                            <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35 }} >
                                Register 
                            </Typography>
                        </Button>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 400, marginBlock: 0.8, display: "block", textAlign: "right"}} >
                            Already have an account?  
                            <Link
                                component="button"
                                variant="button"
                                sx={{marginLeft: "5px"}}
                                onClick={() => {handleRegisterClose(); handleLoginOpen()}}
                            >
                                Login now!
                            </Link>
                        </Typography>
                    </Paper>
                </Modal>
            }
            
		</Container>
  );
}

export default LandingPage;
