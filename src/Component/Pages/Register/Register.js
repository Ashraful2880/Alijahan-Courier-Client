import {
	Autocomplete,
	Backdrop,
	Box,
	Button,
	CircularProgress,
	TextField,
} from "@mui/material";
import React from "react";
import logo from "../../../Assets/Image/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import Swal from "sweetalert2";
import auth2 from "../../../FirebaseAuth/firebase.config2";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const Register = ({ token }) => {
	const [data, setData] = useState();
	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset, watch } = useForm();
	const [errors, setErrors] = useState(false);
	const [branches, setBranches] = useState();
	const [selectedDistricts, setSelectedDistricts] = useState();
	const [districts, setDistricts] = useState();
	const [area, setArea] = useState();
	const [num, setNum] = React.useState();
	const [selectedArea, setSelectedArea] = React.useState();
	console.log("Data", data);
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/areas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setArea(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
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
	}, [token]);

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth2);
	if (loading) {
		<p>Loading.....</p>;
	}
	if (error) {
		Swal.fire({
			title: "Error",
			text: error.message,
			icon: "error",
			confirmButtonText: "Ok",
		});
	}

	useEffect(() => {
		if (user) {
			axios
				.post(
					`${process.env.REACT_APP_API_PATH}/merchant`,
					{
						...data,
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
					Swal.fire("", "Successfully Added!", "success");
					signOut(auth2);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [data, token, user]);

	const onSubmit = ({
		merchantName,
		merchantCompanyName,
		merchantAddress,
		merchantBusinessAddress,
		merchantDistrict,
		merchantBranchName,
		merchantContact,
		merchantArea,
		merchantEmail,
		merchantPassword,
	}) => {
		setData({
			id: "merchant-" + Math.floor(Math.random() * 1000000000),
			merchantName,
			merchantCompanyName,
			merchantAddress,
			merchantBusinessAddress,
			merchantBranchName,
			merchantDistrict,
			merchantContact,
			merchantArea,
			merchantEmail: merchantEmail.toLowerCase(),
			merchantPassword,
			status: "Inactive",
		});
		setSubmitting(true);
		createUserWithEmailAndPassword(merchantEmail, merchantPassword);
	};
	return (
		<Box className='registerBackground' style={{ paddingBottom: "100px" }}>
			<Box
				sx={{ width: { lg: "50%", md: "70%", sm: "95%" }, margin: "auto" }}
				className='center'
				style={{
					borderRadius: "10px",
					padding: "30px 30px",
					backgroundColor: "white",
					boxShadow: "0px 0px 30px green",
				}}>
				<h3 style={{ color: "green", fontSize: "20px", fontWeight: "bold" }}>
					Welcome To Alijahan Courier
				</h3>
				<img src={logo} alt='Main logo' />
				<h3
					style={{
						color: "black",
						fontSize: "25px",
						fontWeight: "bold",
						marginBottom: "25px",
					}}>
					Become a Merchant
				</h3>
				<form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
					<Box
						sx={{
							display: { lg: "flex", md: "flex", sm: "block" },
							gap: "20px",
						}}>
						<TextField
							size='small'
							sx={{ my: 0.5, width: "100%" }}
							fullWidth
							required
							label='Merchant Name'
							{...register("merchantName", { required: true })}
						/>
						<TextField
							size='small'
							sx={{ my: 0.5 }}
							fullWidth
							required
							label='Company Name'
							{...register("merchantCompanyName", { required: true })}
						/>
					</Box>
					<Box
						sx={{
							display: { lg: "flex", md: "flex", sm: "block" },
							gap: "20px",
						}}>
						<TextField
							size='small'
							sx={{ my: 0.5 }}
							fullWidth
							required
							multiline
							rows={2}
							label='Merchant Address'
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
							{...register("merchantBusinessAddress", { required: true })}
						/>
					</Box>
					<Box
						sx={{
							display: { lg: "flex", md: "flex", sm: "block" },
							gap: "20px",
						}}>
						<Autocomplete
							onChange={(event, newValue) => {
								setSelectedDistricts(newValue);
							}}
							size='small'
							sx={{ my: 0.5, width: "100% !important" }}
							options={districts}
							getOptionLabel={(option) => option.district}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...register("merchantDistrict", {
										required: true,
									})}
									{...params}
									label='Select District'
									variant='outlined'
								/>
							)}
						/>
						<Autocomplete
							onChange={(event, newValue) => {
								setSelectedArea(newValue);
							}}
							size='small'
							sx={{ my: 0.5, width: "100% !important" }}
							options={area?.filter(
								(a) => a?.district === selectedDistricts?.district,
							)}
							getOptionLabel={(option) => option.area}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...register("merchantArea", { required: true })}
									{...params}
									label='Select Area'
									variant='outlined'
								/>
							)}
						/>
					</Box>
					<Autocomplete
						onChange={(event, newValue) => {
							setSelectedDistricts(newValue);
						}}
						size='small'
						sx={{ my: 0.5, width: "100% !important" }}
						options={branches?.filter((e) =>
							e?.branchArea?.find((n) => n?.area === selectedArea?.area),
						)}
						getOptionLabel={(option) => option.branchName}
						style={{ width: 300 }}
						renderInput={(params) => (
							<TextField
								{...register("merchantBranchName", {
									required: true,
								})}
								{...params}
								label='Select Branch'
								variant='outlined'
							/>
						)}
					/>
					<Box
						sx={{
							display: { lg: "flex", md: "flex", sm: "block" },
							gap: "20px",
						}}>
						<Box style={{ width: "100%" }}>
							<input
								type='text'
								placeholder='Merchant Contact'
								name='merchantContact'
								style={{
									width: "100%",
									padding: "10px 12px",
									margin: "4px 0px",
									fontSize: "16px",
									borderRadius: "5px",
									border: "1px solid gray",
								}}
								value={num}
								onChange={(e) => setNum(e.target.value.replace(/[^0-9]/g, ""))}
								maxLength='11'
								minLength='11'
								{...register("merchantContact", { required: true })}
							/>
						</Box>
						<TextField
							type='email'
							size='small'
							sx={{ my: 0.5 }}
							fullWidth
							required
							label='Email'
							{...register("merchantEmail", { required: true })}
						/>
					</Box>
					<Box
						sx={{
							display: { lg: "flex", md: "flex", sm: "block" },
							gap: "20px",
						}}>
						<TextField
							size='small'
							sx={{ my: 0.5 }}
							fullWidth
							required
							type='password'
							label='User Password'
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
								errors ? (
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
										setErrors(true);
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
							sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
							<DoneIcon sx={{ mr: 0.5 }} />
							Register
						</Button>
						<Button
							type='reset'
							variant='contained'
							color='error'
							sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
							<ReplayIcon sx={{ mr: 0.5 }} />
							Clear
						</Button>
					</Box>
				</form>
				{/* redirect to reg page */}
				<Box>
					<p style={{ fontWeight: 500, color: "#B2B1B1" }}>
						Already have an account?
						<Link to='/login' style={{ color: "black", marginLeft: 10 }}>
							LOGIN
						</Link>
					</p>
				</Box>
			</Box>{" "}
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme?.zIndex?.drawer + 999 }}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default Register;
