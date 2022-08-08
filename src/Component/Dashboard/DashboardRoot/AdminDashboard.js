import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BluetoothDriveIcon from "@mui/icons-material/BluetoothDrive";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ScaleIcon from "@mui/icons-material/Scale";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import PublicIcon from "@mui/icons-material/Public";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ComputerIcon from "@mui/icons-material/Computer";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CableIcon from "@mui/icons-material/Cable";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsIcon from "@mui/icons-material/Settings";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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

const AdminDashboard = () => {
	const [expanded, setExpanded] = React.useState("");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const location = useLocation();
	return (
		<>
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
						{/* <Link className='link' to='branchusers'>
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
						</Link> */}
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
				expanded={expanded === "panel9"}
				onChange={handleChange("panel9")}>
				<AccordionSummary aria-controls='panel9d-content' id='panel9d-header'>
					<ListItemIcon className='listItemIcon'>
						<ManageHistoryIcon />
					</ListItemIcon>
					<Typography>Manage Orders</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<Link className='link' to='officeToOffice'>
							<ListItem
								button
								className={
									location?.pathname === "/officeToOffice" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<InstallDesktopIcon />
								</ListItemIcon>
								<ListItemText primary={"Office to Office Order"} />
							</ListItem>
						</Link>
						<Link className='link' to='officeToHome'>
							<ListItem
								button
								className={
									location?.pathname === "/officeToHome" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<LocalShippingIcon />
								</ListItemIcon>
								<ListItemText primary={"Office to Home Order"} />
							</ListItem>
						</Link>
						<Link className='link' to='createMerchantOrder'>
							<ListItem
								button
								className={
									location?.pathname === "/createMerchantOrder" &&
									"activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<NoteAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Create Merchant Order"} />
							</ListItem>
						</Link>
						<Link className='link' to='bookingParcelList'>
							<ListItem
								button
								className={
									location?.pathname === "/bookingParcelList" && "activeButton"
								}>
								<ListItemIcon className='listItemIcon'>
									<PlaylistAddCheckIcon />
								</ListItemIcon>
								<ListItemText primary={"Booking Parcel List"} />
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
						{/* <Link className='link' to='serviceAreaSetting'>
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
						</Link> */}
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
						{/* <Link className='link' to='upazila'>
							<ListItem
								button
								className={location?.pathname === "/upazila" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<FlagIcon />
								</ListItemIcon>
								<ListItemText primary={"Thana/Upazila"} />
							</ListItem>
						</Link> */}
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
						{/* <Link className='link' to='item'>
							<ListItem
								button
								className={location?.pathname === "/item" && "activeButton"}>
								<ListItemIcon className='listItemIcon'>
									<PostAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Item"} />
							</ListItem>
						</Link> */}
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
		</>
	);
};

export default AdminDashboard;
