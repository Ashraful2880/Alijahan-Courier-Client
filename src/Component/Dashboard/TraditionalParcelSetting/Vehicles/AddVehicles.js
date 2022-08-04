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
	MenuItem,
	Select,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
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

const AddVehicles = ({ open, setOpen, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		vehicleName,
		vehicleSLNo,
		vehicleNo,
		vehicleDriverName,
		vehicleDriverContact,
		vehicleRoot,
	}) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/vehicle`,
				{
					vehicleName,
					vehicleSLNo,
					vehicleNo,
					vehicleDriverName,
					vehicleDriverContact,
					vehicleRoot,
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
								top: "5px",
								right: "5px",
								cursor: "pointer",
							}}
						/>

						<Typography variant='h5' sx={{ fontWeight: "bold", mb: 1.5 }}>
							Add Vehicle
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								required
								label='Vehicle Name'
								{...register("vehicleName", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								required
								label='SL No'
								{...register("vehicleSLNo", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Vehicle No'
								{...register("vehicleNo", { required: true })}
							/>

							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Driver Name'
								{...register("vehicleDriverName", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Driver Contact'
								{...register("vehicleDriverContact", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Vehicle Root'
								{...register("vehicleRoot", { required: true })}
							/>

							<Button
								type='submit'
								variant='contained'
								className='button'
								sx={{ my: 0.7, fontWeight: "bold", px: 2.5 }}>
								Add <SendIcon sx={{ ml: 1.5 }} />
							</Button>
						</form>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default AddVehicles;
