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

const EditServiceArea = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			serviceAreaName: "",
			serviceAreaCODPercentage: "",
			serviceAreaCharge: "",
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
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/serviceArea/${id}`,
				{
					serviceAreaName,
					serviceAreaCODPercentage,
					serviceAreaCharge,
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
	const [type, setType] = React.useState(data?.weightPackageType);
	const handleChange = (event) => {
		setType(event.target.value);
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
						{data ? (
							<>
								<Typography variant='h5' sx={{ fontWeight: "bold", mb: 1.5 }}>
									Edit Service Area
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
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
									<TextField
										size='small'
										sx={{ my: 0.7 }}
										fullWidth
										label='Charge'
										{...register("serviceAreaCharge", { required: true })}
									/>

									<Button
										type='submit'
										variant='contained'
										className='button'
										sx={{ my: 0.7, fontWeight: "bold", px: 2.5 }}>
										Update <SendIcon sx={{ ml: 1.5 }} />
									</Button>
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
