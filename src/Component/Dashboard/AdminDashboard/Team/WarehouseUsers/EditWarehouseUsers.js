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

const EditWarehouseUsers = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			warehouseUserName: "",
			warehouseUserAddress: "",
			wareHouseName: "",
			warehouseUserContact: "",
			warehouseUserEmail: "",
			warehouseUserPassword: "",
			warehouseUserImage: "",
		},
	});
	const [warehouses, setWarehouses] = useState();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouses`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setWarehouses(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token]);
	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouseUser/${id}`, {
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
		warehouseUserName,
		warehouseUserAddress,
		wareHouseName,
		warehouseUserContact,
		warehouseUserEmail,
		warehouseUserPassword,
		warehouseUserImage,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/warehouseUser/${id}`,
				{
					warehouseUserName,
					warehouseUserAddress,
					wareHouseName,
					warehouseUserContact,
					warehouseUserEmail,
					warehouseUserPassword,
					warehouseUserImage,
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
									<BorderColorIcon sx={{ mr: 2 }} /> Edit Warehouse
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											label='Warehouse Name'
											helperText='Warehouse Name'
											{...register("warehouseUserName", { required: true })}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											multiline
											rows={1}
											label='Warehouse Address'
											helperText='Warehouse Address'
											{...register("warehouseUserAddress", { required: true })}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<Autocomplete
											size='small'
											sx={{ my: 1, width: "100% !important" }}
											options={warehouses}
											defaultValue={
												warehouses[
												warehouses?.findIndex(
													(x) => x.warehouseName === data?.wareHouseName,
												)
												]
											}
											getOptionLabel={(option) => option.warehouseName}
											style={{ width: 300 }}
											renderInput={(params) => (
												<TextField
													{...register("wareHouseName", { required: true })}
													{...params}
													label='Warehouse Name'
													helperText='Warehouse Name'
													variant='outlined'
												/>
											)}
										/>

										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											label='Warehouse Contact'
											helperText='Warehouse Contact'
											{...register("warehouseUserContact", { required: true })}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											label='Warehouse Email'
											helperText='Warehouse Email'
											{...register("warehouseUserEmail", { required: true })}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											label='Warehouse Password'
											helperText='Warehouse Password'
											{...register("warehouseUserPassword", { required: true })}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5, width: "50%" }}
											fullWidth
											label='Warehouse Image'
											helperText='Warehouse Image'
											{...register("warehouseUserImage", { required: true })}
										/>
									</Box>
									<Box sx={{ mb: 2 }}>
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

export default EditWarehouseUsers;
