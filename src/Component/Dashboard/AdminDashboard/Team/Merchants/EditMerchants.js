import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, TextField, Backdrop, Typography, CircularProgress, Autocomplete, } from "@mui/material";
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

const EditMerchants = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset, watch } = useForm({
		defaultValues: {
			merchantName: "",
			merchantCompanyName: "",
			merchantAddress: "",
			merchantBusinessAddress: "",
			merchantBranchName: "",
			merchantArea: "",
			merchantContact: "",
			merchantEmail: "",
			merchantPassword: "",
		},
	});
	const [error, setError] = useState(false);
	const [selectedBranch, setSelectedBranch] = useState();
	const [branches, setBranches] = useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branches`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setBranches(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token]);
	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchant/${id}`, {
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
		merchantName,
		merchantCompanyName,
		merchantAddress,
		merchantBusinessAddress,
		merchantBranchName,
		merchantContact,
		merchantArea,
		merchantEmail,
		merchantPassword,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/merchant/${id}`,
				{
					merchantName,
					merchantCompanyName,
					merchantAddress,
					merchantBusinessAddress,
					merchantBranchName,
					merchantContact,
					merchantArea,
					merchantEmail,
					merchantPassword,
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
						{data && branches ? (
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
									<BorderColorIcon sx={{ mr: 2 }} /> Edit Merchant
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											label='Merchant Name'
											helperText='Name'
											{...register("merchantName", { required: true })}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											label='Company Name'
											helperText='Company Name'
											{...register("merchantCompanyName", { required: true })}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											multiline
											rows={2}
											label='Merchant Address'
											helperText='Full Address'
											{...register("merchantAddress", { required: true })}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											multiline
											rows={2}
											label='Business Address'
											helperText='Business Address'
											{...register("merchantBusinessAddress", {
												required: true,
											})}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<Autocomplete
											onChange={(event, newValue) => {
												setSelectedBranch(newValue);
											}}
											size='small'
											sx={{ my: 0.5, width: "100% !important" }}
											options={branches}
											getOptionLabel={(option) => option.branchName}
											style={{ width: 300 }}
											defaultValue={
												branches[
												branches?.findIndex(
													(x) => x.branchName === data?.merchantBranchName,
												)
												]
											}
											renderInput={(params) => (
												<TextField
													{...register("merchantBranchName", {
														required: true,
													})}
													{...params}
													label='Select Branch'
													variant='outlined'
													helperText='Branch'
												/>
											)}
										/>
										<Autocomplete
											size='small'
											sx={{ my: 0.5, width: "100% !important" }}
											options={
												selectedBranch ||
												branches?.find(
													(x) => x.branchName === data?.merchantBranchName,
												)?.branchArea
											}
											getOptionLabel={(option) => option.area}
											style={{ width: 300 }}
											defaultValue={branches
												?.find((x) => x.branchName === data?.merchantBranchName)
												?.branchArea?.find(
													(xy) => xy.area === data?.merchantArea,
												)}
											renderInput={(params) => (
												<TextField
													{...register("merchantArea", { required: true })}
													{...params}
													label='Select Area'
													variant='outlined'
													helperText='Area'
												/>
											)}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											type='number'
											helperText='Contact Number'
											id='filled-start-adornment'
											placeholder='Merchant Contact Number'
											size='small'
											sx={{ my: 0.5, width: "100% !important" }}
											{...register("merchantContact", { required: true })}
											variant='outlined'
										/>
										<TextField
											type='email'
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											label='Email'
											helperText='Email'
											{...register("merchantCompanyName", { required: true })}
										/>
									</Box>
									<Box sx={{ display: "flex", gap: "20px" }}>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											fullWidth
											required
											type='password'
											label='User Password'
											helperText='User Password'
											defaultValue={data?.merchantPassword}
											{...register("password", {
												required: true,
											})}
										/>
										<TextField
											size='small'
											sx={{ my: 0.5 }}
											type='password'
											fullWidth
											required
											label='Confirm Password'
											helperText={
												error ? (
													<span style={{ color: "red" }}>
														Your password didn't matched.
													</span>
												) : (
													"Confirm Password"
												)
											}
											{...register("merchantPassword", {
												required: true,
												validate: (val) => {
													if (watch("password") !== val) {
														setError(true);
														return "false";
													}
												},
											})}
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

export default EditMerchants;
