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
import LinkIcon from "@mui/icons-material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import auth from "../FirebaseAuth/firebase.config";

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
			<Typography
				variant='h6'
				sx={{
					py: 1,
					backgroundColor: "#44ba06",
					color: "white",
					width: "100%",
					fontWeight: "bold",
				}}>
				LOGO HERE
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					py: 1.5,
				}}>
				<Avatar
					sx={{ border: "2px solid #44ba06", mb: 0.7 }}
					alt=''
					src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'
				/>
				<Typography variant='h5' style={{ color: "white" }}>
					John Doe
				</Typography>
				<Typography style={{ color: "#44ba06", fontWeight: "bold" }}>
					Admin
				</Typography>
			</Box>

			<Link className='link' to=''>
				<ListItem
					button
					className={location?.pathname === "/" && "activeButton"}>
					<ListItemIcon className='listItemIcon'>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary={"Dashboard"} />
				</ListItem>
			</Link>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<ListItemIcon className='listItemIcon'>
						<LinkIcon />
					</ListItemIcon>
					<Typography>Common Settings</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='CompanyWings'>
							<ListItem
								button
								className={
									location?.pathname === "/CompanyWings" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Company Wings"} />
							</ListItem>
						</Link>
						<Link className='link' to='CompanyBranch'>
							<ListItem
								button
								className={
									location?.pathname === "/CompanyBranch" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Company Branch Office"} />
							</ListItem>
						</Link>
						<Link className='link' to='Departments'>
							<ListItem
								button
								className={
									location?.pathname === "/Departments" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Department"} />
							</ListItem>
						</Link>
						<Link className='link' to='Sections'>
							<ListItem
								button
								className={
									location?.pathname === "/Sections" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Sections"} />
							</ListItem>
						</Link>
						<Link className='link' to='Designations'>
							<ListItem
								button
								className={
									location?.pathname === "/Designations" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Designations"} />
							</ListItem>
						</Link>
						<Link className='link' to='Grades'>
							<ListItem
								button
								className={location?.pathname === "/Grades" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Grades"} />
							</ListItem>
						</Link>
						<Link className='link' to='PaymentTypes'>
							<ListItem
								button
								className={
									location?.pathname === "/PaymentTypes" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Salary Payment Types"} />
							</ListItem>
						</Link>
						<Link className='link' to='Schedules'>
							<ListItem
								button
								className={
									location?.pathname === "/Schedules" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Office Time Schedules"} />
							</ListItem>
						</Link>
						<Link className='link' to='AuthorizedSignatures'>
							<ListItem
								button
								className={
									location?.pathname === "/AuthorizedSignatures" &&
									"activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LinkIcon />
								</ListItemIcon>
								<ListItemText primary={"Authorized Signatures"} />
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
