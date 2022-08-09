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
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useForm } from "react-hook-form";
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

const AddServiceArea = ({ open, setOpen, token, setSubmitting }) => {
	const [type, setType] = React.useState("");
	const handleChange = (event) => {
		setType(event.target.value);
	};
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		serviceAreaName,
		serviceAreaCODPercentage,
		serviceAreaCharge,
	}) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/serviceArea`,
				{
					serviceAreaName,
					serviceAreaCODPercentage,
					serviceAreaCharge,
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
							<AddTaskIcon sx={{ mr: 2 }} /> Add Service Area
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.7 }}
									fullWidth
									required
									label='Service Area Name'
									{...register("serviceAreaName", { required: true })}
								/>
								<TextField
									size='small'
									sx={{ my: 0.7 }}
									fullWidth
									required
									label='COD Percentage'
									{...register("serviceAreaCODPercentage", {
										required: true,
									})}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.7, width: "49%" }}
									fullWidth
									label='Charge'
									{...register("serviceAreaCharge", { required: true })}
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
									Add Area
								</Button>
								<Button
									onClick={() => setOpen(false)}
									type='reset'
									variant='contained'
									color="error"
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

export default AddServiceArea;
