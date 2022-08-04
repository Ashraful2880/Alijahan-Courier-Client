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

const AddRiders = ({ open, setOpen, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm();
	const [thanas, setThanas] = useState();
	const [areas, setAreas] = useState();
	const [districts, setDistricts] = useState([]);
	const [selectedDistricts, setSelectedDistricts] = useState("");
	const [selectedThana, setSelectedThana] = useState("");

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
	}, [token]);
	const onSubmit = ({
		riderName,
		riderAddress,
		userEmail,
		riderContact,
		riderNID,
		riderLicense,
		userPassword,
		confirmUserPassword,
		riderDOB,
		riderStatus,
	}) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/rider`,
				{
					riderName,
					riderAddress,
					userEmail,
					riderContact,
					riderNID,
					riderLicense,
					userPassword,
					confirmUserPassword,
					riderDOB,
					riderStatus,
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
							<AddTaskIcon sx={{ mr: 2 }} /> Add New Rider
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Rider Name'
									helperText="Rider Name"
									{...register("riderName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Address'
									helperText="Rider Address"
									{...register("riderAddress", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									type="email"
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='User Email'
									helperText="User Email"
									{...register("userEmail", { required: true })}
								/>
								<TextField
									type="number"
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Mobile Number'
									helperText="Mobile Number"
									{...register("riderContact", { required: true })}
								/>
							</Box>

							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									type="number"
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Rider NID'
									helperText="Rider NID"
									{...register("riderNID", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Driving License'
									helperText="Deriving License"
									{...register("riderLicense", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									type="password"
									label='User Password'
									helperText="User Password"
									{...register("userPassword", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									type="password"
									fullWidth
									required
									label='Confirm Password'
									helperText="Confirm Password"
									{...register("confirmuserPassword", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									type="date"
									helperText="Date of Birth"
									{...register("riderDOB", { required: true })}
								/>
								<Autocomplete
									onChange={(e) => setSelectedThana(e.target.innerText)}
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={thanas?.filter(
										(item) => item.district === selectedDistricts,
									)}
									getOptionLabel={(option) => option.thana}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("riderStatus", { required: true })}
											{...params}
											label='Status'
											helperText="Status"
											variant='outlined'
										/>
									)}
								/>
							</Box>

							{/* <Autocomplete
								onChange={(e) => setSelectedThana(e.target.innerText)}
								size='small'
								sx={{ my: 1, width: "100% !important" }}
								options={thanas?.filter(
									(item) => item.district === selectedDistricts,
								)}
								getOptionLabel={(option) => option.thana}
								style={{ width: 300 }}
								renderInput={(params) => (
									<TextField
										{...register("branchThana", { required: true })}
										{...params}
										label='Thana Name'
										variant='outlined'
									/>
								)}
							/>
							<Autocomplete
								size='small'
								sx={{ my: 1, width: "100% !important" }}
								options={areas?.filter((item) => item.thana === selectedThana)}
								getOptionLabel={(option) => option.area}
								style={{ width: 300 }}
								renderInput={(params) => (
									<TextField
										{...register("branchArea", { required: true })}
										{...params}
										label='Area Name'
										variant='outlined'
									/>
								)}
							/> */}

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
		</div>
	);
};

export default AddRiders;
