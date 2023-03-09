import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Box,
	Link,
	Typography,
	Paper,
	TextField,
	Button
} from "@mui/material"

function Register() {
	const navigate  = useNavigate();

  return (
		<Container maxWidth="lg">
			<Paper elevation={3} sx={{  height: 'fit-content', width: 350, margin: "calc(100vh - 95vh + 10px) auto", padding: "35px", backdropFilter: "blur(5)"}} >
				<img src={require("../../../shared/images/matik_upper_2.png")} alt="logo" width={270} style={{margin: "auto",  display: "block"}}/>
				<Typography variant="h5" gutterBottom sx={{textAlign: "center", fontWeight: 600}} mt={3}>
					Register an Account
				</Typography>
				<TextField id="name" label="Name" variant="outlined" sx={{marginTop: "15px", width: "100%"}} />
				<TextField id="username" label="Username" variant="outlined" sx={{marginTop: "15px", width: "100%"}} />
				<TextField id="password" label="Password" variant="outlined" type={"password"} sx={{marginTop: "15px", width: "100%"}} />
				<TextField id="con-password" label="Confirm Password" variant="outlined" type={"password"} sx={{marginTop: "15px", width: "100%"}} />
				<Button variant="contained" sx={{marginTop: "15px", width: "100%"}}>
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
						onClick={() => navigate("/")}
					>
						Login now!
					</Link>
				</Typography>
			</Paper>
		</Container>
  );
}

export default Register;
