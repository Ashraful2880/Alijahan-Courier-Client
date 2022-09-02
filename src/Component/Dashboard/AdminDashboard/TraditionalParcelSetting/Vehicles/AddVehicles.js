import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField, Backdrop, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DoneIcon from '@mui/icons-material/Done';
import ReplayIcon from "@mui/icons-material/Replay";
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
				BackdropProps={{ timeout: 500, }}>
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
							<AddTaskIcon sx={{ mr: 2 }} /> Add Vehicle
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Vehicle Name'
									helperText='Enter Vehicle Name'
									{...register("vehicleName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='SL No'
									helperText='Enter SL No'
									{...register("vehicleSLNo", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>

								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Vehicle No'
									helperText='Enter Vehicle No'
									{...register("vehicleNo", { required: true })}
								/>

								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Driver Name'
									helperText='Driver Name'
									{...register("vehicleDriverName", { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Driver Contact'
									helperText='Driver Contact Number'
									{...register("vehicleDriverContact", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Vehicle Root'
									helperText='Vehicle Route'
									{...register("vehicleRoot", { required: true })}
								/>
							</Box>
							<Box sx={{ my: 2 }}>
								<Button
									type='submit'
									variant='contained'
									color='success'
									sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
									<DoneIcon sx={{ mr: 0.5 }} />
									Add Branch
								</Button>
								<Button
									onClick={() => setOpen(false)}
									type='reset'
									variant='contained'
									color="error"
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

export default AddVehicles;
