import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useLocation, Navigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
	Avatar,
	Button,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import auth from "../../../FirebaseAuth/firebase.config";
import logo from "../../../Assets/Image/logo.png";
import AdminDashboard from "./AdminDashboard";
import MerchantDashboard from "./MerchantDashboard";
import WarehouseDashboard from "./WarehouseDashboard";
import RiderDashboard from "./RiderDashboard";
import BranchDashboard from "./BranchDashboard";
import GetAuth from "../../../FirebaseAuth/GetAuth";
import axios from "axios";

const drawerWidth = 268;

function Dashboard(props) {
	const { user, loading, token } = GetAuth();
	const [data, setData] = React.useState();
	const [merchant, setMerchant] = React.useState();
	const [branch, setBranch] = React.useState();
	const [riders, setRiders] = React.useState();
	const [warehouse, setwarehouse] = React.useState();
	const location = useLocation();

	React.useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/userByEmail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchants/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setMerchant(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branchbyemail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setBranch(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/riderByEmail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setRiders(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/warehouseUserByEmail/${user?.email}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setwarehouse(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, user?.email]);

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box className='dashboard'>
			<Link to='/'>
				<Box
					sx={{
						padding: "2px 0px 0px 0px",
						backgroundColor: "white",
						border: "1px solid #1E793C",
					}}>
					<img src={logo} alt='Main Logo' />
				</Box>
			</Link>
			<Link to='/dashboard'>
				<ListItem
					button
					className={
						location?.pathname === "/dashboard" && "activeButton"
					}>
					<ListItemIcon className='listItemIcon'>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={"Home"} />
				</ListItem>
			</Link>
			{data?.userRole === "Admin" && (<AdminDashboard />)}
			{data?.userRole === "Branch" && (<BranchDashboard />)}
			{data?.userRole === "Merchant" && (<MerchantDashboard />)}
			{data?.userRole === "Warehouse" && (<WarehouseDashboard />)}
			{data?.userRole === "Rider" && (<RiderDashboard />)}
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	console.log(merchant?.status);
	console.log(branch?.status);
	console.log(riders?.status);
	console.log(warehouse?.status);
	if (
		!loading &&
		user &&
		data &&
		(merchant?.status === "Inactive" ||
			branch?.status === "Inactive" ||
			riders?.status === "Inactive" ||
			warehouse?.status === "Inactive")
	) {
		return (
			<>
				<Navigate to={"/login"} state={{ from: location }} replace />
			</>
		);
	}
	if (!loading && user && data && data === "N/A") {
		return (
			<>
				<Navigate to={"/login"} state={{ from: location }} replace />
			</>
		);
	} else
		return (
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position='fixed'
					className='bgColor'
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						padding: 0,
						ml: { sm: `${drawerWidth}px` },
					}}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}>
							<MenuIcon />
						</IconButton>
						<Box display='flex' sx={{ flexGrow: 1, alignItems: "center" }}>
							<DashboardIcon sx={{ mr: 1 }} />
							<Typography variant='h6'>Welcome {data?.userRole}</Typography>
						</Box>
						<Box>
							<Typography
								variant='p'
								style={{
									color: "white",
									fontWeight: "bold",
									margin: "0px 10px",
								}}>
								{data?.name}
							</Typography>
						</Box>
						<Box className='logout'>
							<Button onClick={() => signOut(auth)}>
								<LogoutIcon />
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
				<Box
					onClick={() => setMobileOpen(false)}
					component='nav'
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label='mailbox folders'>
					<Drawer
						container={container}
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						className='dashboard'
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
							backgroundColor: "transparent",
						}}>
						{drawer}
					</Drawer>
					<Drawer
						variant='permanent'
						className='dashboard'
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
							backgroundColor: "transparent",
						}}
						open>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}>
					<Toolbar />
					<Outlet></Outlet>
				</Box>
			</Box>
		);
}

Dashboard.propTypes = {
	window: PropTypes.func,
};

export default Dashboard;
