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
    Grid,
    IconButton
} from "@mui/material"

import Modal from "../../../shared/components/modal/index"
// import Grid from '@mui/material/Unstable_Grid2';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Header from "../component/header"
import SelectHouse from "../component/selectHouse"
import TungstenIcon from '@mui/icons-material/Tungsten';
import { styled } from '@mui/material/styles';
import { homeList } from "./service";

import RoomCard from "../component/RoomCard"
import GeneralSetting from "../component/GeneralSetting"

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -60%)',
    width: 400,
    p: 4,
  };


function UserDashboard() {
    const navigate  = useNavigate();
    const [loading, setLoading] = React.useState(1);
    const [houses, setHouse] = React.useState([])
    const [selectedHouse, setSelectedHouse] = React.useState({})
    const [rooms, setRooms] = React.useState([]);
    const [controlType, setControlType] = React.useState("ALL");
    const [modal, setModal] = React.useState({
        status: false,
        type: "houseSetting"
    })

    React.useEffect(()=>{
        homeList()
            .then((res) => {
                if(res.length == 0){
                    
                }else {
                    setHouse(res);
                }
                setLoading(0)
            })
    }, [])

    React.useEffect(()=>{
        if(houses.length != 0) setSelectedHouse(houses[0])
    }, [houses])

    React.useEffect(()=>{
        if(selectedHouse) setRooms(selectedHouse["rooms"])
    }, [selectedHouse])

    const handleSelectHouse = (house) => setSelectedHouse(house)
    const handleControlType = (type) => setControlType(type)


    const handleOpenModal = () => {
        setModal({...modal, status: true});
    }
    const handleCloseModal = () => {
        setModal({...modal, status: false});
    }

    return (
    <>
        <Modal open={modal?.status} handleClose={handleCloseModal}>
            <GeneralSetting data={selectedHouse}/>
        </Modal>
        <Header />
        <Container maxWidth={"xl"} sx={{padding: "24px 24px"}} id="waa"> 
            <Box sx={{ width: '100%' }}>
                { loading ?  <>Loading .....</> 
                : <Grid container spacing={2}>
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        {houses.length != 0 && <SelectHouse houses={houses} selected={selectedHouse} setSelectedHouse={handleSelectHouse}/>}
                        <IconButton sx={{marginLeft: "10px"}} onClick={handleOpenModal}>
                            <SettingsIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#757575" }} >
                            Rooms 
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper sx={{
                                backgroundColor: "#e0e0e0",
                                height: "80px", 
                                padding: 2, 
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={() => handleControlType("ALL")}
                        >
                            <DashboardIcon sx={{fontSize: 55, color: (controlType == "ALL") ? "#039be5" : "#616161"}}/>
                            <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: (controlType == "ALL") ? "#039be5" : "#616161" }} >
                                ALL
                            </Typography>
                        </Paper>
                    </Grid>
                    { rooms && rooms.map((room, idx) => <RoomCard setControlType={handleControlType} controlType={controlType} name={room?.name} icon={room?.type}/>) }
                    <Grid item xs={12} sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="button" gutterBottom sx={{fontWeight: 600, marginBlock: 0.35, color: "#757575" }} >
                        {
                            (controlType.toUpperCase() + " Control Panel")
                        } 
                        </Typography>
                    </Grid>
                    
                    <>
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
                    </>

                </Grid>
            }
                
            </Box>
        </Container>
    </>
  );
}

export default UserDashboard;
