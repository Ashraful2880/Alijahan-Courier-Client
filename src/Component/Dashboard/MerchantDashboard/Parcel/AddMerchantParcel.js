import React, { useEffect, useState } from "react";
import {
	Autocomplete,
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DoneIcon from "@mui/icons-material/Done";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import GetAuth from "../../../../FirebaseAuth/GetAuth";

const AddMerchantParcel = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const [selectedDistricts, setSelectedDistricts] = useState("");
	const [branch, setBranch] = useState();
	const [productCategory, setProductCategory] = useState();
	const [weight, setWeight] = useState();
	const [selectWeight, setSelectWeight] = useState();
	const [cashCollection, setCashCollection] = useState();
	const [districts, setDistricts] = useState();
	const [marchant, setMarchant] = useState();
	const [areas, setAreas] = useState();
	const [selectedArea, setSelectedArea] = useState();
	const [serviceAreas, setServiceAreas] = useState();

	const senderBranch = branch?.find(
		(b) => b.branchName === marchant?.merchantBranchName,
	);
	const receiverBranch = branch?.find((d) =>
		d.branchArea.find((c) => c?.area === selectedArea?.area),
	);

	const [selectArea, setSelectArea] = useState();
	useEffect(() => {
		if (marchant?.merchantDistrict === receiverBranch?.branchDistrict) {
			const findArea = receiverBranch?.branchArea?.find(
				(a) => a?.area === selectedArea?.area,
			);
			if (findArea?.area === marchant?.merchantArea) {
				setSelectArea("Inside Same City");
			}
			if (findArea?.area !== marchant?.merchantArea) {
				setSelectArea("City to " + findArea?.areaType);
			}
		} else {
			setSelectArea("City to City");
		}
	}, [marchant, receiverBranch, selectedArea]);

	const serviceArea = serviceAreas?.find(
		(s) => s.serviceAreaName === selectArea,
	);

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
			.get(`${process.env.REACT_APP_API_PATH}/serviceAreas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setServiceAreas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/areas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setAreas(response.data);
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
				setBranch(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/itemCategories`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setProductCategory(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/weightPackages`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setWeight(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchants/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setMarchant(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, user?.email]);

	const returnCharge = parseFloat(selectedArea?.returnCharge) || 0;
	const cashCollected = parseFloat(cashCollection) || 0;
	const deliveryCharge = parseFloat(serviceArea?.serviceAreaCharge);
	const codPercentage = parseFloat(serviceArea?.serviceAreaCODPercentage) || 0;
	const weightCharge = parseFloat(selectWeight?.weightPackageRate) || 0;
	const totalAmount = deliveryCharge + weightCharge + cashCollected || 0;
	const codAmount = totalAmount * (codPercentage / 100) || 0;
	const totalCharges = deliveryCharge + weightCharge + codAmount || 0;
	const totalAmountWithCharges = cashCollected + totalCharges || 0;
	const totalReceive = cashCollected - totalCharges || 0;
	const onSubmit = ({
		receiverName,
		receiverNumber,
		receiverBranchDistrict,
		receiverBranchArea,
		receiverAddress,
		productCategory,
		productWeight,
		receiverServiceArea,
		referenceId,
		instructions,
	}) => {
		const data = {
			orderId: "AJC" + Math.floor(Math.random() * 1000000000),
			marchentInfo: marchant,
			senderBranchInfo: senderBranch,
			orderDetails: { productCategory, productWeight, receiverServiceArea },
			receiverInfo: {
				receiverAddress,
				receiverName,
				receiverNumber,
				receiverBranchDistrict,
				receiverBranchArea,
				receiverBranchName: receiverBranch?.branchName,
			},
			referenceId,
			instructions,
			orderSummaray: {
				deliveryCharge,
				weightCharge,
				codAmount,
				totalCharges,
				totalAmountWithCharges,
				totalReceive,
				returnCharge,
			},
			paymentCollectionDetails: {
				collectionStatus: "Pending",
				collectionDate: "",
				collectedAmount: 0,
				companyRec: totalCharges,
				marchantRec: totalReceive,
			},
			collectRiderInfo: {},
			deliverRiderInfo: {},
			warehouseInfo: {},
			bookingDate: new Date().toLocaleString("en-US", {
				timeZone: "Asia/Dhaka",
			}),
			status: "Pickup Request Pending",
		};
		console.log(data);
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/merchantorder`,
				{
					data,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setSubmitting(false);
				reset();
				Swal.fire("", "Successfully Added!", "success").then(function () {
					window.location.reload();
				});
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<Box
			sx={{
				mt: 2.5,
				mx: 2.5,
				border: "1px solid gray",
				borderRadius: 2,
				boxShadow: "0px 0px 10px gray",
				pt: 2,
				pb: 5,
			}}>
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
					mx: 2,
				}}>
				<CreateNewFolderIcon sx={{ mr: 2 }} /> Create a New Parcel Order
				(Merchant)
			</Typography>
			<Box sx={{ mx: 3 }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={1} sx={{ justifyContent: "center" }}>
						<Grid item xs={12} md={8} lg={8}>
							{/* Receiver Info Here */}
							<Typography
								component='p'
								sx={{
									fontWeight: "bold",
									textAlign: "left",
									my: 1,
									mx: 2,
									color: "#009688",
									fontSize: "18px",
								}}>
								Receiver Information
							</Typography>
							<Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Receiver Name'
									helperText='Receiver Name'
									{...register("receiverName", { required: true })}
								/>
								<TextField
									size='small'
									type='number'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Mobile Number'
									helperText='Reciever Mobile Number'
									{...register("receiverNumber", { min: 11, max: 11 }, { required: true })}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
								<Autocomplete
									onChange={(event, newValue) => {
										setSelectedDistricts(newValue);
									}}
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={districts}
									getOptionLabel={(option) => option?.district}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("receiverBranchDistrict", {
												required: true,
											})}
											{...params}
											label='Districts Name'
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
									options={areas?.filter(
										(area) => area.district === selectedDistricts?.district,
									)}
									getOptionLabel={(option) => option.area}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("receiverBranchArea", { required: true })}
											{...params}
											label='Select Area'
											variant='outlined'
											helperText='Area'
										/>
									)}
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									multiline
									rows={2}
									label='Address'
									helperText='Address'
									{...register("receiverAddress", { required: true })}
								/>
							</Box>
							{/* Order Info Here */}
							<Typography
								component='p'
								sx={{
									fontWeight: "bold",
									textAlign: "left",
									my: 1,
									mx: 2,
									color: "#009688",
									fontSize: "18px",
								}}>
								Order Information
							</Typography>
							<Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
								<Autocomplete
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={productCategory}
									getOptionLabel={(option) => option.itemCategoryName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("productCategory", { required: true })}
											{...params}
											label='Product Category'
											variant='outlined'
											helperText='Select Product category'
										/>
									)}
								/>
								<Autocomplete
									onChange={(event, newValue) => {
										setSelectWeight(newValue);
									}}
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									options={weight}
									getOptionLabel={(option) => option.weightPackageName}
									style={{ width: 300 }}
									renderInput={(params) => (
										<TextField
											{...register("productWeight", { required: true })}
											{...params}
											label='Product Weight'
											variant='outlined'
											helperText='Select Product Weight'
										/>
									)}
								/>

								<TextField
									size='small'
									sx={{ my: 0.5, width: "100% !important" }}
									value={serviceArea?.serviceAreaName}
									{...register("receiverServiceArea", { required: true })}
									variant='outlined'
									helperText='Service Area'
								/>
							</Box>
							<Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
								<TextField
									type='number'
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									required
									label='Cash Collection'
									helperText='Cash Collection'
									{...register("cashCollection", { min: 11, max: 11 }, { required: true })}
									value={cashCollection}
									onChange={(e) => setCashCollection(e.target.value)}
								/>
								<TextField
									size='small'
									sx={{ my: 0.5 }}
									fullWidth
									label='Reference Id'
									helperText='Reference Id'
									{...register("referenceId")}
								/>
							</Box>
							<TextField
								size='small'
								sx={{ my: 0.5, width: "97%" }}
								label='Instructions'
								multiline
								rows={3}
								helperText='Any Instructions'
								{...register("instructions")}
							/>
						</Grid>
						<Grid item xs={12} md={4} lg={4}>
							<Typography
								component='p'
								sx={{
									fontWeight: "bold",
									textAlign: "left",
									my: 1,
									mx: 2,
									color: "#009688",
									fontSize: "18px",
								}}>
								Order Summary
							</Typography>
							<TableContainer component={Paper}>
								<Table aria-label='simple table'>
									<TableBody>
										<TableRow>
											<TableCell component='th' scope='row'>
												<Typography
													component='p'
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Cash Collection
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{cashCollected} ৳
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component='th' scope='row'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Weight Charge
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{weightCharge} ৳
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component='th' scope='row'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Delivery Charge
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{deliveryCharge || 0} ৳
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell component='th' scope='row'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Cash On Delivery Charge
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{codAmount} ৳
												</Typography>
											</TableCell>
										</TableRow>

										<TableRow style={{ background: "rgb(233 233 224 / 43%)" }}>
											<TableCell component='th' scope='row'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Total Charges
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{totalCharges} ৳
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow style={{ background: "#e9e9e9" }}>
											<TableCell component='th' scope='row'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													Total Receive
												</Typography>
											</TableCell>
											<TableCell align='right'>
												<Typography
													sx={{
														fontWeight: "600",
														color: "gray",
														fontSize: "15px",
													}}>
													{totalReceive} ৳
												</Typography>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</Grid>
					<Box sx={{ display: "flex", gap: "15px", mx: 1, mt: 2 }}>
						<Button
							type='submit'
							variant='contained'
							color='success'
							sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
							<DoneIcon sx={{ mr: 0.5 }} />
							Place
						</Button>
						<Button
							type='reset'
							variant='contained'
							color='error'
							sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
							<RestartAltIcon sx={{ mr: 0.5 }} />
							Reset
						</Button>
					</Box>
				</form>
			</Box>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default AddMerchantParcel;
