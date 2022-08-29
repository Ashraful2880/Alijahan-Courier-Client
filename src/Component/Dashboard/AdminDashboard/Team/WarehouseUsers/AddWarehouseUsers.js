import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
	Button,
	TextField,
	Backdrop,
	Typography,
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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth2 from "../../../../../FirebaseAuth/firebase.config2";
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

const AddWarehouseUsers = ({ open, setOpen, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm();
	const warehouses = [
		{ id: 1, warehouseName: "District Warehouse" },
		{ id: 2, warehouseName: "Central Warehouse" },
	];
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
	useEffect(() => {
		if (user) {
			axios
				.post(
					`${process.env.REACT_APP_API_PATH}/warehouseUser`,
					{ ...data, status: "Active" },
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
		}
	}, [data, setOpen, setSubmitting, token, user]);

	const onSubmit = ({
		warehouseUserName,
		warehouseUserAddress,
		wareHouseName,
		warehouseUserContact,
		warehouseUserEmail,
		warehouseUserPassword,
		warehouseUserImage,
	}) => {
		setData({
			id: "warehouse-" + Math.floor(Math.random() * 1000000000),
			warehouseUserName,
			warehouseUserAddress,
			wareHouseName,
			warehouseUserContact,
			warehouseUserEmail,
			warehouseUserPassword,
			warehouseUserImage,
		});
		setSubmitting(true);
		createUserWithEmailAndPassword(warehouseUserEmail, warehouseUserPassword);
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
								top: "28px",
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
							<AddTaskIcon sx={{ mr: 2 }} /> Add New Warehouse User
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Warehouse Name'
									helperText=' Warehouse Name'
									{...register("warehouseUserName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									multiline
									rows={1}
									label='Warehouse Address'
									helperText=' Warehouse Address'
									{...register("warehouseUserAddress", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<Autocomplete
									size='small'
									sx={{ my: 1, width: "100% !important" }}
									options={warehouses}
									getOptionLabel={(option) => option.warehouseName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											required
											{...register("wareHouseName", { required: true })}
											{...params}
											label='Warehouse Name'
											helperText=' Warehouse Name'
											variant='outlined'
										/>
									)}
								/>

								<TextField
									size='small'
									sx={{ my: 1 }}
									fullWidth
									label='Warehouse Contact'
									helperText=' Warehouse Contact'
									{...register("warehouseUserContact", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Warehouse Email'
									helperText=' Warehouse Email'
									{...register("warehouseUserEmail", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Warehouse Password'
									helperText=' Warehouse Password'
									{...register("warehouseUserPassword", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "10px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5, width: "49%" }}
									fullWidth
									label='Warehouse Image'
									helperText=' Warehouse Image'
									{...register("warehouseUserImage", { required: true })}
								/>
							</Box>
							<Box sx={{ mt: 2, mb: 1 }}>
								<Button
									type='submit'
									variant='contained'
									color='success'
									// className='button'
									sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<DoneIcon sx={{ mr: 0.5 }} />
									Add User
								</Button>
								<Button
									onClick={() => setOpen(false)}
									type='reset'
									variant='contained'
									color='error'
									// className='button'
									sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
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

export default AddWarehouseUsers;
