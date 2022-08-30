import { Autocomplete, Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import loginsidebanner from "../../../Assets/Image/loginsidebanner.png";
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
	const { register, handleSubmit, reset, watch } = useForm();
	const [errors, setErrors] = useState(false);
	const [branches, setBranches] = useState([]);
	const [selectedDistricts, setSelectedDistricts] = useState([]);
	const [districts, setDistricts] = useState();
	const [area, setArea] = useState();
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
			merchantEmail,
			merchantPassword,
		});
		createUserWithEmailAndPassword(merchantEmail, merchantPassword);
	};
	return (
		<Box sx={{ mt: 10 }}>
			<Grid container spacing={3}>
				<Grid item md={6} xs={12}>
					<img src={loginsidebanner} width={"100%"} alt='loginsidebanner' />
				</Grid>
				<Grid item md={6} xs={12} sx={{ mt: 5 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<Box
							sx={{
								backgroundColor: "#08A74C",
								color: "white",
								pr: 3,
								pl: 3,
								borderRadius: 5,
								fontSize: { md: 14, xs: 11 },
								ml: { md: 0, xs: 3 },
							}}>
							<h4>Welcome To Alijahan Courier Service</h4>
						</Box>

						<Box>
							<img src={logo} width={"100%"} alt='' />
						</Box>
					</Box>
					{/* login Form section */}
					<Box sx={{ p: { md: 7, xs: 6 } }}>
						<h3>Become a Merchant</h3>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
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
							<Box sx={{ display: "flex", gap: "20px" }}>
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
							<Box sx={{ display: "flex", gap: "20px" }}>
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
							<Box sx={{ display: "flex", gap: "20px" }}>
								<TextField
									minlength="11"
									maxlength="11"
									type='number'
									id='filled-start-adornment'
									placeholder='Merchant Contact Number'
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									{...register(
										"merchantContact",
										{ required: true },
									)}
									variant='outlined'
								/>
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
							<Box sx={{ display: "flex", gap: "20px" }}>
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
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Register;
