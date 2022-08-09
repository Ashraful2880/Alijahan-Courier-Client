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
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Swal from "sweetalert2";
import auth2 from "../../../../../FirebaseAuth/firebase.config2";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
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
	const { register, handleSubmit, reset, watch } = useForm();
	const [branch, setBranch] = useState();
	const [errors, setErrors] = useState(false);
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branches`, {
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
	}, [token]);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth2);
	if (loading) {
		setSubmitting(true);
	}
	if (error) {
		setSubmitting(false);
		Swal.fire({
			title: "Error",
			text: error.message,
			icon: "error",
			confirmButtonText: "Ok",
		});
	}
	const [data, setData] = useState();
	if (user) {
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/rider`,
				{
					...data,
					status: "Active",
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
				signOut(auth2);
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	}
	const onSubmit = ({
		riderName,
		riderBranch,
		riderAddress,
		userEmail,
		riderContact,
		riderNID,
		riderLicense,
		riderPassword,
		riderDOB,
	}) => {
		setData({
			riderName,
			riderBranch,
			riderAddress,
			userEmail,
			riderContact,
			riderNID,
			riderLicense,
			riderPassword,
			riderDOB,
		});
		setSubmitting(true);
		createUserWithEmailAndPassword(userEmail, riderPassword);
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
								borderRadius: "50%",
							}}
						/>
						<Typography
							variant='h6'
							sx={{
								mb: 2,
								textAlign: "left",
								background: "#1E793C",
								padding: "8px 20px",
								color: "#fff",
								borderRadius: "5px",
								display: "flex",
								alignItems: "center",
							}}>
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
									helperText='Rider Name'
									{...register("riderName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Address'
									helperText='Rider Address'
									{...register("riderAddress", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									type='date'
									helperText='Date of Birth'
									{...register("riderDOB", { required: true })}
								/>
								<Autocomplete
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={branch}
									getOptionLabel={(option) => option.branchName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("riderBranch", { required: true })}
											{...params}
											label='Rider Branch'
											helperText='Rider Branch'
											variant='outlined'
										/>
									)}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									type='email'
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='User Email'
									helperText='User Email'
									{...register("userEmail", { required: true })}
								/>
								<TextField
									type='number'
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Mobile Number'
									helperText='Mobile Number'
									{...register("riderContact", { required: true })}
								/>
							</Box>

							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									type='number'
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Rider NID'
									helperText='Rider NID'
									{...register("riderNID", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Driving License'
									helperText='Deriving License'
									{...register("riderLicense", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									type='password'
									label='User Password'
									helperText='User Password'
									{...register("password", {
										required: true,
									})}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									type='password'
									fullWidth
									required
									label='Confirm Password'
									helperText={
										errors ? (
											<span style={{ color: "red" }}>
												Your password didn't matched.
											</span>
										) : (
											"Confirm Password"
										)
									}
									{...register("riderPassword", {
										required: true,
										validate: (val) => {
											if (watch("password") !== val) {
												setErrors(true);
												return "false";
											}
										},
									})}
								/>
							</Box>

							<Box sx={{ my: 2 }}>
								<Button
									type='submit'
									variant='contained'
									color='success'
									// className='button'
									sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<DoneIcon sx={{ mr: 0.5 }} />
									Save
								</Button>
								<Button
									onClick={() => setOpen(false)}
									type='reset'
									variant='contained'
									color='error'
									// className='button'
									sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<ReplayIcon sx={{ mr: 0.5 }} />
									Close
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
