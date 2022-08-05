import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
	Button,
	TextField,
	Backdrop,
	Typography,
	CircularProgress,
	Autocomplete,
	InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Swal from "sweetalert2";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	width: { md: "50vw", sm: "70vw", xs: "90vw" },
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	textAlign: "center",
	backgroundColor: "white",
};

const AddMerchants = ({ open, setOpen, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm();
	const [thanas, setThanas] = useState();
	const [areas, setAreas] = useState();
	const [districts, setDistricts] = useState([]);
	const [branches, setBranches] = useState([]);
	const [selectedBranches, setSelectedBranches] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/thanas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setThanas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/areas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setAreas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/districts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setDistricts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branches`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setBranches(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token]);
	const onSubmit = ({
		merchantName,
		merchantCompanyName,
		merchantAddress,
		merchantBusinessAddress,
		merchantBranchName,
		merchantContact,
		pickupArea,
		merchantEmail,
		/* merchantDistrict,
		merchantThana,
		merchantArea,
		merchantFacebook,
		merchantWebsite,
		merchantImage,
		merchantPass,
		merchatCODPercentage,
		merchantServChargeInsideCity,
		merchanttServChargeSubCity,
		merchanttServChargeOutsideCity,
		merchantRetChargeInsideCity,
		merchantRetChargeSubCity,
		merchantRetChargeOutsideCity,
		bankAccName,
		bankAccNumber,
		bankName,
		bkashAccNumber,
		nagadAccNumber,
		rocketAccNumber,
		nidCard,
		tradeLicense,
		tinCertificate, */
	}) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/merchant`,
				{
					merchantName,
					merchantCompanyName,
					merchantAddress,
					merchantBusinessAddress,
					merchantBranchName,
					merchantContact,
					pickupArea,
					merchantEmail,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setSubmitting(false);
				setOpen(false);
				Swal.fire("", "Successfully Added!", "success");
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<CancelIcon
							onClick={() => setOpen(false)}
							className='textColor'
							sx={{
								position: "fixed",
								top: "30px",
								right: "30px",
								cursor: "pointer",
								background: "White",
								borderRadius: "50%"
							}}
						/>

						<Typography variant='h6' sx={{ fontWeight: "bold", mb: 2, textAlign: "left", background: "green", padding: "8px 20px", color: "#fff", borderRadius: "5px", display: "flex", alignItems: "center" }}>
							<AddTaskIcon sx={{ mr: 2 }} /> Add New Merchant
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Merchant Name'
									helperText="Name"
									{...register("merchantName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Company Name'
									helperText="Company Name"
									{...register("merchantCompanyName", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									multiline
									rows={2}
									label='Merchant Address'
									helperText="Full Address"
									{...register("merchantAddress", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									multiline
									rows={2}
									label='Business Address'
									helperText="Business Address"
									{...register("merchantBusinessAddress", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<Autocomplete
									onChange={(e) => setSelectedBranches(e.target.innerText)}
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={branches}
									getOptionLabel={(option) => option.branchName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("merchantBranchName", { required: true })}
											{...params}
											label='Select Branch'
											variant='outlined'
											helperText="Branch"
										/>
									)}
								/>
								<TextField
									type="number"
									helperText="Contact Number"
									id="filled-start-adornment"
									placeholder="Merchant Contact Number"
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									InputProps={{
										startAdornment: <InputAdornment position="start">+88</InputAdornment>,
									}}
									{...register("merchantContact", { required: true })}
									variant="outlined"
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<Autocomplete
									onChange={(e) => setSelectedBranches(e.target.innerText)}
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={branches}
									getOptionLabel={(option) => option.branchName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("pickupArea", { required: true })}
											{...params}
											label='Pickup Area'
											variant='outlined'
											helperText="Your Location"
										/>
									)}
								/>
								<TextField
									type="email"
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Email'
									helperText="Email"
									{...register("merchantCompanyName", { required: true })}
								/>
							</Box>
							<Box sx={{ mb: 4 }}>
								<Button
									type='submit'
									variant='contained'
									color="success"
									// className='button'
									sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<SaveIcon sx={{ mr: 0.5 }} />Save
								</Button>
								<Button
									onClick={() => setOpen(false)}
									type='reset'
									variant='contained'
									// className='button'
									sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<ReplayIcon sx={{ mr: 0.5 }} />Close
								</Button>
							</Box>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div >
	);
};

export default AddMerchants;
