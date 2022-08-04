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

const AddWeightPackage = ({ open, setOpen, token, setSubmitting }) => {
	const [type, setType] = React.useState("");
	const handleChange = (event) => {
		setType(event.target.value);
	};
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = ({
		weightPackageId,
		weightPackageName,
		weightPackageTitle,
		weightPackageType,
		weightPackageDescription,
		weightPackageRate,
	}) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/weightPackage`,
				{
					weightPackageId,
					weightPackageName,
					weightPackageTitle,
					weightPackageType,
					weightPackageDescription,
					weightPackageRate,
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
							Add WeightPackage
						</Typography>
						<form onSubmit={handleSubmit(onSubmit)}>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								required
								label='Weight Package ID'
								{...register("weightPackageId", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								required
								label='Weight Package Name'
								{...register("weightPackageName", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Weight Package Title'
								{...register("weightPackageTitle", { required: true })}
							/>

							<Select
								sx={{ width: "100%", textAlign: "left", my: 0.8 }}
								{...register("weightPackageType", { required: true })}
								size='small'
								value={type}
								onChange={handleChange}
								displayEmpty
								inputProps={{ "aria-label": "Without label" }}>
								<MenuItem value=''>
									<em>Select Type</em>
								</MenuItem>
								<MenuItem value={"KG"}>KG</MenuItem>
								<MenuItem value={"CFT"}>CFT</MenuItem>
							</Select>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Weight Package Description'
								{...register("weightPackageDescription", { required: true })}
							/>
							<TextField
								size='small'
								sx={{ my: 0.7 }}
								fullWidth
								label='Weight Package Rate'
								{...register("weightPackageRate", { required: true })}
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

export default AddWeightPackage;
