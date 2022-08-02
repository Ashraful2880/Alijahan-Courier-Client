import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Avatar, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BluetoothDriveIcon from '@mui/icons-material/BluetoothDrive';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ScaleIcon from '@mui/icons-material/Scale';
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import CropRotateIcon from '@mui/icons-material/CropRotate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ComputerIcon from '@mui/icons-material/Computer';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CableIcon from '@mui/icons-material/Cable';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import auth from "../../FirebaseAuth/firebase.config";
import logo from "../../Assets/Image/logo.png";

const drawerWidth = 268;

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
}));

function Dashboard(props) {
	const [expanded, setExpanded] = React.useState("");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const location = useLocation();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawer = (
		<Box className='dashboard'>
			<Box
				sx={{
					padding: "2px 0px 0px 0px",
					backgroundColor: "#fff",
					border: "1px solid green",
				}}>
				<img src={logo} alt='Main Logo' />
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					py: 1.5,
				}}></Box>
			<Link className='link' to=''>
				<ListItem
					button
					className={location?.pathname === "/" && "activeButton"}>
					<ListItemIcon className='listItemIcon'>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={"Home"} />
				</ListItem>
			</Link>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<ListItemIcon className='listItemIcon'>
						<GroupIcon />
					</ListItemIcon>
					<Typography>Team</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='branches'>
							<ListItem
								button
								className={
									location?.pathname === "/branches" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LocalOfferIcon />
								</ListItemIcon>
								<ListItemText primary={"Branch"} />
							</ListItem>
						</Link>
						<Link className='link' to='branchusers'>
							<ListItem
								button
								className={
									location?.pathname === "/branchusers" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<PersonIcon />
								</ListItemIcon>
								<ListItemText primary={"Branch User"} />
							</ListItem>
						</Link>
						<Link className='link' to='merchants'>
							<ListItem
								button
								className={
									location?.pathname === "/merchants" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LocalMallIcon />
								</ListItemIcon>
								<ListItemText primary={"Merchant"} />
							</ListItem>
						</Link>
						<Link className='link' to='riders'>
							<ListItem
								button
								className={location?.pathname === "/riders" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<BluetoothDriveIcon />
								</ListItemIcon>
								<ListItemText primary={"Rider"} />
							</ListItem>
						</Link>
						<Link className='link' to='warehouses'>
							<ListItem
								button
								className={
									location?.pathname === "/warehouses" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<AddBusinessIcon />
								</ListItemIcon>
								<ListItemText primary={"Warehouse"} />
							</ListItem>
						</Link>
						<Link className='link' to='warehouseusers'>
							<ListItem
								button
								className={
									location?.pathname === "/warehouseusers" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<SupervisedUserCircleIcon />
								</ListItemIcon>
								<ListItemText primary={"Warehouse User"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}>
				<AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
					<ListItemIcon className='listItemIcon'>
						<LocalShippingIcon />
					</ListItemIcon>
					<Typography>Parcel</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='parcelList'>
							<ListItem
								button
								className={
									location?.pathname === "/parcelList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<FormatListNumberedIcon />
								</ListItemIcon>
								<ListItemText primary={"Parcel List"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}>
				<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
					<ListItemIcon className='listItemIcon'>
						<SettingsSuggestIcon />
					</ListItemIcon>
					<Typography>Application Setting</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='weightPackage'>
							<ListItem
								button
								className={
									location?.pathname === "/weightPackage" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<ScaleIcon />
								</ListItemIcon>
								<ListItemText primary={"Weight Package"} />
							</ListItem>
						</Link>
						<Link className='link' to='serviceArea'>
							<ListItem
								button
								className={
									location?.pathname === "/serviceArea" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LeakAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Service Area"} />
							</ListItem>
						</Link>
						<Link className='link' to='serviceAreaSetting'>
							<ListItem
								button
								className={
									location?.pathname === "/serviceAreaSetting" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<RoomPreferencesIcon />
								</ListItemIcon>
								<ListItemText primary={"Service Area Setting"} />
							</ListItem>
						</Link>
						<Link className='link' to='district'>
							<ListItem
								button
								className={
									location?.pathname === "/district" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<PublicIcon />
								</ListItemIcon>
								<ListItemText primary={"District"} />
							</ListItem>
						</Link>
						<Link className='link' to='upazila'>
							<ListItem
								button
								className={location?.pathname === "/upazila" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<FlagIcon />
								</ListItemIcon>
								<ListItemText primary={"Thana/Upazila"} />
							</ListItem>
						</Link>
						<Link className='link' to='area'>
							<ListItem
								button
								className={location?.pathname === "/area" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<CropRotateIcon />
								</ListItemIcon>
								<ListItemText primary={"Area"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}>
				<AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
					<ListItemIcon className='listItemIcon'>
						<GifBoxIcon />
					</ListItemIcon>
					<Typography>Traditional Parcel Book</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='bookingParcelList'>
							<ListItem
								button
								className={
									location?.pathname === "/bookingParcelList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<FeaturedPlayListIcon />
								</ListItemIcon>
								<ListItemText primary={"Booking Parcel List"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}>
				<AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
					<ListItemIcon className='listItemIcon'>
						<SettingsApplicationsIcon />
					</ListItemIcon>
					<Typography>Traditional Parcel Setting</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='vehicle'>
							<ListItem
								button
								className={location?.pathname === "/vehicle" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<LocalShippingIcon />
								</ListItemIcon>
								<ListItemText primary={"Vehicle"} />
							</ListItem>
						</Link>
						<Link className='link' to='itemCategory'>
							<ListItem
								button
								className={
									location?.pathname === "/itemCategory" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<CategoryIcon />
								</ListItemIcon>
								<ListItemText primary={"Item Category"} />
							</ListItem>
						</Link>
						<Link className='link' to='unit'>
							<ListItem
								button
								className={location?.pathname === "/unit" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<CableIcon />
								</ListItemIcon>
								<ListItemText primary={"Unit"} />
							</ListItem>
						</Link>
						<Link className='link' to='item'>
							<ListItem
								button
								className={location?.pathname === "/item" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<PostAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Item"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel6"}
				onChange={handleChange("panel6")}>
				<AccordionSummary aria-controls='panel6d-content' id='panel6d-header'>
					<ListItemIcon className='listItemIcon'>
						<SettingsIcon />
					</ListItemIcon>
					<Typography>Setting</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='adminUser'>
							<ListItem
								button
								className={
									location?.pathname === "/adminUser" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<AdminPanelSettingsIcon />
								</ListItemIcon>
								<ListItemText primary={"Admin User"} />
							</ListItem>
						</Link>
						<Link className='link' to='application'>
							<ListItem
								button
								className={
									location?.pathname === "/application" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<ComputerIcon />
								</ListItemIcon>
								<ListItemText primary={"Application"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>

			{/* Merchant Dashboard Code Here */}
			<Typography variant='h6' className='title' sx={{ color: "gray" }}>
				Merchant Dashboard From Here
			</Typography>

			<Link className='link' to='/merchantDashboard'>
				<ListItem
					button
					className={location?.pathname === "/" && "activeButton"}>
					<ListItemIcon className='listItemIcon'>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={"Home"} />
				</ListItem>
			</Link>
			<Link className='link' to='/merchantDashboard/profile'>
				<ListItem
					button
					className={location?.pathname === "/" && "activeButton"}>
					<ListItemIcon className='listItemIcon'>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={"Profile"} />
				</ListItem>
			</Link>
			<Accordion
				expanded={expanded === "panel7"}
				onChange={handleChange("panel7")}>
				<AccordionSummary aria-controls='panel7d-content' id='panel7d-header'>
					<ListItemIcon className='listItemIcon'>
						<SettingsIcon />
					</ListItemIcon>
					<Typography>Parcel</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='merchantDashboard/addParcel'>
							<ListItem
								button
								className={
									location?.pathname === "/addParcel" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<AdminPanelSettingsIcon />
								</ListItemIcon>
								<ListItemText primary={"Add Parcel"} />
							</ListItem>
						</Link>
						<Link className='link' to='merchantDashboard/parcelList'>
							<ListItem
								button
								className={
									location?.pathname === "merchantDashboard/ParcelList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<ComputerIcon />
								</ListItemIcon>
								<ListItemText primary={"Parcel List"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel8"}
				onChange={handleChange("panel8")}>
				<AccordionSummary aria-controls='panel8d-content' id='panel8d-header'>
					<ListItemIcon className='listItemIcon'>
						<SettingsIcon />
					</ListItemIcon>
					<Typography>Account</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='merchantDashboard/deliveryPaymentList'>
							<ListItem
								button
								className={
									location?.pathname === "/deliveryPaymentList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<AdminPanelSettingsIcon />
								</ListItemIcon>
								<ListItemText primary={"Delivery Payment List"} />
							</ListItem>
						</Link>
						<Link className='link' to='merchantDashboard/deliveryParcelList'>
							<ListItem
								button
								className={
									location?.pathname === "/deliveryParcelList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<ComputerIcon />
								</ListItemIcon>
								<ListItemText primary={"Delivery Parcel List"} />
							</ListItem>
						</Link>
					</List>
				</AccordionDetails>
			</Accordion>

		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

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
						<Typography variant='h6'>DASHBOARD</Typography>
					</Box>
					<Box>
						<Typography variant='p' style={{ color: "white", fontWeight: "bold", margin: "0px 10px" }}>
							John Doe
						</Typography>
					</Box>
					<Box>
						<Avatar
							sx={{ border: "2px solid #44ba06", }}
							alt=''
							src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'
						/>
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
