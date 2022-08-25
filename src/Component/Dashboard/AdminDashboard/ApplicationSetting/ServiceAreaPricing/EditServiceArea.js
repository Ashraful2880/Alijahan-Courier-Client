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
	Select,
	MenuItem,
	FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
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

const EditServiceArea = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			serviceAreaName: "",
			serviceAreaCODPercentage: "",
			serviceAreaCharge: "",
			returnCharge: "",
		},
	});

	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/serviceArea/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				reset(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id, reset, token]);
	const onSubmit = ({
		serviceAreaName,
		serviceAreaCODPercentage,
		serviceAreaCharge,
		returnCharge,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/serviceArea/${id}`,
				{
					serviceAreaName,
					serviceAreaCODPercentage,
					serviceAreaCharge,
					returnCharge,
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
				Swal.fire("", "Successfully Updated!", "success");
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	};
	const [type, setType] = React.useState(data?.serviceAreaName);

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
						{data ? (
							<>
								<Typography
									variant='h6'
									sx={{
										mb: 3,
										textAlign: "left",
										background: "#1E793C",
										padding: "8px 20px",
										color: "#fff",
										borderRadius: "5px",
										display: "flex",
										alignItems: "center",
									}}>
									<BorderColorIcon sx={{ mr: 2 }} /> Edit Service Area
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<FormControl sx={{ my: 0.5, textAlign: "left" }} fullWidth>
											<Select
												size='small'
												value={type || data?.serviceAreaName}
												onChange={(e) => setType(e.target.value)}
												{...register("serviceAreaName", { required: true })}>
												<MenuItem value={"Inside Same City"}>
													Inside Same City
												</MenuItem>
												<MenuItem value={"City to City"}>City to City</MenuItem>
												<MenuItem value={"City to Sub City"}>
													City to Sub City
												</MenuItem>
												<MenuItem value={"City to Union Level"}>
													City to Union Level
												</MenuItem>
											</Select>
										</FormControl>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											label='COD Percentage'
											helperText='COD Percentage'
											{...register("serviceAreaCODPercentage", {
												required: true,
											})}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											label='Charge'
											helperText='Charge'
											{...register("serviceAreaCharge", { required: true })}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											label='Return Charge'
											helperText='Return Charge'
											{...register("returnCharge", { required: true })}
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
											Update
										</Button>
										<Button
											onClick={() => setOpen(false)}
											type='reset'
											variant='contained'
											color='error'
											sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
											<ReplayIcon sx={{ mr: 0.5 }} />
											Close
										</Button>
									</Box>
								</form>
							</>
						) : (
							<CircularProgress className='textColor' />
						)}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default EditServiceArea;
