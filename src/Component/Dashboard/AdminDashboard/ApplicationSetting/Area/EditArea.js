import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
	Button,
	TextField,
	Backdrop,
	Typography,
	CircularProgress,
	Select,
	MenuItem,
	FormControl,
	Autocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
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

const EditArea = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			district: "",
			areaType: "",
			area: "",
		},
	});

	const [data, setData] = React.useState([]);
	const [districts, setDistricts] = useState([]);

	console.log(data);
	useEffect(() => {
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

		axios
			.get(`${process.env.REACT_APP_API_PATH}/area/${id}`, {
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
	const onSubmit = ({ district, areaType, area }) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/area/${id}`,
				{
					district,
					areaType,
					area,
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
									<BorderColorIcon sx={{ mr: 2 }} /> Edit Area
								</Typography>
								<form
									onSubmit={handleSubmit(onSubmit)}
									style={{ display: "flex", flexGrow: "0.5", mx: 4 }}>
									<Autocomplete
										size='small'
										sx={{ my: 1, width: "100% !important" }}
										options={districts}
										getOptionLabel={(option) => option.district}
										defaultValue={
											districts[
											districts?.findIndex(
												(x) => x.district === data?.district,
											)
											]
										}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...register("district", { required: true })}
												{...params}
												variant='outlined'
											/>
										)}
									/>
									<Autocomplete
										size='small'
										sx={{ my: 1, ml: 2, width: "100% !important" }}
										options={[
											{ areaType: "City" },
											{ areaType: "Sub City" },
											{ areaType: "Union Level" },
										]}
										getOptionLabel={(option) => option.areaType}
										defaultValue={
											[
												{ areaType: "City" },
												{ areaType: "Sub City" },
												{ areaType: "Union Level" },
											][
											[
												{ areaType: "City" },
												{ areaType: "Sub City" },
												{ areaType: "Union Level" },
											]?.findIndex((x) => x.areaType === data?.areaType)
											]
										}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...register("areaType", { required: true })}
												{...params}
												variant='outlined'
											/>
										)}
									/>
									<TextField
										size='small'
										sx={{ my: 1, ml: 2 }}
										fullWidth
										required
										{...register("area", { required: true })}
									/>
									<Button
										type='submit'
										variant='contained'
										color='success'
										sx={{
											my: 1,
											fontWeight: "bold",
											px: 2.5,
											width: "50%",
											ml: 2,
										}}>
										Update <DownloadDoneIcon sx={{ ml: 1.5 }} />
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

export default EditArea;
