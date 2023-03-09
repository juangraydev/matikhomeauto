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
import Header from "../component/header"
import SelectHouse from "../component/selectHouse"
import TungstenIcon from '@mui/icons-material/Tungsten';
import { styled } from '@mui/material/styles';

import RoomCard from "../component/RoomCard"

function UserDashboard() {
    const navigate  = useNavigate();
    const [loading, setLoading] = React.useState(1);
    const [houses, setHouse] = React.useState()
    const [selectedHouse, setSelectedHouse] = React.useState()
    const [rooms, setRooms] = React.useState([{name: "Kitchen", icon: 1},{name: "Living Room", icon: 2},{name: "Garage", icon: 5},{name: "Bed Room", icon: 3},{name: "Office", icon: 4}]);

    
    React.useEffect(()=>{
        setHouse([
            {id: 1, name: "Mansion"},
            {id: 2, name: "Subdivision"},
            {id: 3, name: "House"},
            {id: 4, name: "Farm House"}
        ])
        setSelectedHouse([
            {id: 1, name: "Mansion"},
            {id: 2, name: "Subdivision"},
            {id: 3, name: "House"},
            {id: 4, name: "Farm House"}
        ][0]);
        setLoading(0);
    }, [])

    const handleSelectHouse = (house) => {

        setSelectedHouse(house)
    }

    if (loading) {
        return <>Loading .....</>
    }
    return (
    <>
        <Header />
        <Container maxWidth={"xl"} sx={{padding: "24px 24px"}} id="waa"> 
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        <SelectHouse houses={houses} selected={selectedHouse} setSelectedHouse={handleSelectHouse}/>
                        <SettingsIcon sx={{marginLeft: "10px"}}/>
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#757575" }} >
                            Rooms 
                        </Typography>
                    </Grid>
                    { rooms.map((room, idx) => <RoomCard name={room?.name} icon={room?.icon}/>) }
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#757575" }} >
                            All Control Panel 
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#616161"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Channel 1 
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#616161" }} >
                                    Off
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                            backgroundColor: "#e0e0e0",
                            height: "80px", 
                            padding: 2, 
                            display: "flex",
                            // flexDirection: "column"
                        }}>
                            <TungstenIcon sx={{fontSize: 75, color: "#039be5"}}/>
                            <Box sx={{display: "flex", flexDirection: "column", paddingBlock: "10px"}}>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    Channel 2
                                </Typography>
                                <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#039be5" }} >
                                    On
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    </>
  );
}

export default UserDashboard;
