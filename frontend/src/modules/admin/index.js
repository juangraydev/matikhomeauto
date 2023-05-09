// import DashboardComponent from "./DashboardAdmin";


// export const DashboardAdmin = DashboardComponent



import * as React from 'react';
import { useNavigate } from "react-router-dom";
import {
	Box,
	IconButton, Paper, Grid
} from "@mui/material"
import Header from "../user/component/header"


import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import Dashboard from './DashboardAdmin';
import DeviceManagement from './DeviceManagement';
import UserManagement from './UserManagement';
import HomeManagement from './HomeManagement';

const drawerWidth = 240;

const settings = ['Account Setting', 'Logout'];
const pages = ['Dashboard', 'Home Management', 'Device Management', 'User Management'];

function Admin() {
	const navigate  = useNavigate();
    let location = useLocation();
	const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [pageType, setPageType] = React.useState(1);


    React.useEffect(()=>{
        console.log("location:",pageType);
    }, [pageType])
  
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	
	const handleSelectUserMenu = (value) => {
		handleCloseUserMenu()
		if(value == "Logout"){
		localStorage.clear()
		navigate("/")
		}
	}
	

    
    return (
	<React.Fragment>
		<Box  sx={{ display: 'flex' }} >
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Box component="div" sx={{ flexGrow: 1 }}>
						<img src={require("../../shared/images/matik-upper.png")} alt="logo" width={200} style={{margin: "auto",  display: "block"}}/>
					</Box>
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={handleOpenUserMenu} 
						>
							<AccountCircleIcon/>
						</IconButton>
						<Menu
						sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
							>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={(e) => handleSelectUserMenu(setting)}>
								<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
				<List>
					{pages.map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton onClick={()=>setPageType(index)}>
							<ListItemIcon sx={{minWidth: 35}}>
								{index == 0 ? <DashboardIcon/> : (index == 1 ? <OtherHousesIcon /> : index == 2 ? <DeviceHubIcon /> : <RecentActorsIcon /> ) }
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
					))}
				</List>
				
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, mt: 8, p: 2 }}>
				<Typography variant="h6" gutterBottom>Admin / {pages[pageType]}</Typography>
				
				{
                    pageType === 0 && <Dashboard/>
                }
                {
                    pageType === 1 && <HomeManagement/>
                }
                {
                    pageType === 2 && <DeviceManagement/>
                }
                {
                    pageType === 3 && <UserManagement/>
                }
			</Box>
		</Box>

	</React.Fragment>
  );
}

export default Admin;
