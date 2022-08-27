import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField, Backdrop, Typography, CircularProgress, Select, MenuItem, } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from '@mui/icons-material/BorderColor';
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

const EditWeightPackage = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			weightPackageId: "",
			weightPackageName: "",
			weightPackageTitle: "",
			weightPackageType: "",
			weightPackageDescription: "",
			weightPackageRate: "",
		},
	});

	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/weightPackage/${id}`, {
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
		weightPackageId,
		weightPackageName,
		weightPackageTitle,
		weightPackageType,
		weightPackageDescription,
		weightPackageRate,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/weightPackage/${id}`,
				{
					weightPackageId,
					weightPackageName,
					weightPackageTitle,
					weightPackageType,
					weightPackageDescription,
					weightPackageRate,
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
									<BorderColorIcon sx={{ mr: 2 }} /> Edit Weight Package
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.7 }}
											fullWidth
											required
											label='Weight Package ID'
											helperText='Weight Package ID'
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
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.7 }}
											fullWidth
											label='Weight Package Title'
											helperText='Weight Package Title'
											{...register("weightPackageTitle", { required: true })}
										/>

										<Select
											sx={{ width: "100%", textAlign: "left", height: 40, mt: 0.5 }}
											{...register("weightPackageType", { required: true })}
											size='small'
											value={type || data?.weightPackageType}
											onChange={handleChange}>
											<MenuItem value={"KG"}>KG</MenuItem>
											<MenuItem value={"CFT"}>CFT</MenuItem>
										</Select>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.7 }}
											fullWidth
											label='Weight Package Description'
											helperText='Weight Package Description'
											{...register("weightPackageDescription", {
												required: true,
											})}
										/>
										<TextField
											size='small'
											sx={{ my: 0.7 }}
											fullWidth
											label='Weight Package Rate'
											helperText='Weight Package Rate'
											{...register("weightPackageRate", { required: true })}
										/>
									</Box>

									<Box sx={{ mt: 2, mb: 1 }}>
										<Button
											type='submit'
											variant='contained'
											color='success'
											// className='button'
											sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
											<DoneIcon sx={{ mr: 0.5 }} />
											Update
										</Button>
										<Button
											onClick={() => setOpen(false)}
											type='reset'
											variant='contained'
											color='error'
											sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
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

export default EditWeightPackage;
