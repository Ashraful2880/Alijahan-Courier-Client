import React, { useRef } from "react";
import {
	CircularProgress,
	Grid,
	Backdrop,
	Typography,
	Box,
	FormControl,
	Select,
	MenuItem,
	FormHelperText,
	Button,
	Fade,
	Modal,
	TextField,
	Autocomplete,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ReactToPrint from 'react-to-print';
import Badge from '@mui/material/Badge';

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	width: "75vw",
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	textAlign: "center",
	backgroundColor: "white",
};

const BranchParcelListFiltered = ({
	opens,
	setOpens,
	marchantName,
	allParcels,
	selectedStatus,
}) => {
	const email = "branch@gmail.com";
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const [data, setData] = useState();
	const [status, setStatus] = useState("");
	const [riders, setRiders] = useState();
	const [branch, setBranch] = useState();
	const [Warehouse, setWarehouse] = useState();
	const [selectionModel, setSelectionModel] = React.useState();
	const [selected, setSelected] = React.useState([]);

	const printData = () => {
		setSelected(data.filter((e) => selectionModel.find((n) => n === e._id)));
	};
	console.log(selected)

	let ref = useRef();
	const date = new Date();
	// Print Function Here
	function createData(id, orderInfo, merchant, contactName, contactNumber, contactAddress, area, amount, collected, status, paymentStatus, instruction) {
		return { id, orderInfo, merchant, contactName, contactNumber, contactAddress, area, amount, collected, status, paymentStatus, instruction };
	}
	const tableRows = [
		createData(
			"19649-3", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 580, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item",),
		createData(
			"18649-9", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mehvish Kainat Abdullah", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 500, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
		createData(
			"14643-9", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Eftekhar Alam", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 490, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
		createData(
			"11641-1", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 550, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
		createData(
			"28649-0", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 620, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
	];

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/senderBranchOrders/${branch?.branchName}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/ridersbybranch/${branch?.branchName}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setRiders(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branchbyemail/${email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setBranch(response.data);
				setWarehouse(response.data?.warehouseInfo);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, submitting, branch?.branchName]);

	const changeStatusMulti = (event, id) => {
		Swal.fire({
			title: "Are You Sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				// eslint-disable-next-line array-callback-return
				selectionModel.map((item) => {
					if (event.target.value === "Delivered To Warehouse") {
						axios
							.put(
								`${process.env.REACT_APP_API_PATH}/merchantorderWarehouse/${item}`,
								{
									warehouseInfo: Warehouse,
									status: event.target.value,
								},
								{
									headers: {
										Authorization: `Bearer ${token}`,
									},
								},
							)
							.then((response) => {
								setSubmitting(false);
								Swal.fire("", "Successfully Done!", "success");
								setOpens(false);
							})
							.catch((error) => {
								setSubmitting(false);
								console.log(error);
							});
					} else {
						axios
							.put(
								`${process.env.REACT_APP_API_PATH}/merchantorderStatus/${item}`,
								{
									status: event.target.value,
								},
								{
									headers: {
										Authorization: `Bearer ${token}`,
									},
								},
							)
							.then((response) => {
								setSubmitting(false);
								Swal.fire("", "Successfully Done!", "success");
								setOpens(false);
							})
							.catch((error) => {
								setSubmitting(false);
								console.log(error);
							});
					}
				});
			}
		});
	};

	const changeRiderMulti = (event, newValue) => {
		Swal.fire({
			title: "Are You Sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				selectionModel.map((item) =>
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderRiderCollect/${item}`,
							{
								collectRiderInfo: newValue,
								status: "Assigned for Pickup",
							},
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							},
						)
						.then((response) => {
							setSubmitting(false);
							Swal.fire("", "Successfully Done!", "success");
							setOpens(false);
						})
						.catch((error) => {
							setSubmitting(false);
							console.log(error);
						}),
				);
			}
		});
	};

	const columns = [
		{
			field: "merchantName",
			headerName: "Marchant Name",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantName;
			},
			width: 150,
		},
		{
			field: "receiverBranchArea",
			headerName: "Pickup Address",
			renderCell: (params) => {
				return ` ${params.row.receiverInfo.receiverBranchArea}(${params.row.receiverInfo.receiverBranchName})`;
			},
			width: 180,
		},
		{
			field: "receiverAddress",
			headerName: "Full Address",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverAddress;
			},
			width: 180,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverNumber;
			},
			width: 180,
		},
		{ field: "status", headerName: "Status", width: 250 },
	];

	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={opens}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={opens}>
				<Box sx={style}>
					<CancelIcon
						onClick={() => setOpens(false)}
						className='textColor'
						sx={{
							position: "fixed",
							top: "28px",
							right: "30px",
							zIndex: 999,
							cursor: "pointer",
							background: "White",
							borderRadius: "50%",
						}}
					/>
					<Box
						sx={{
							px: 2.5,
							pb: 1,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<Typography
							variant='h5'
							sx={{ fontWeight: "bold", color: "#1E793C" }}>
							All Parcel List
						</Typography>
					</Box>

					<Box sx={{ display: "flex", my: 1 }}>
						{selectionModel?.length > 0 ? (
							<>
								{(selectedStatus === "Assigned for Pickup" ||
									selectedStatus === "Cancelled by Pickup Rider") && (
										<Autocomplete
											onChange={(event, newValue) => {
												changeRiderMulti(event, newValue);
											}}
											size='small'
											sx={{ my: 0.5, width: 200 }}
											options={riders}
											getOptionLabel={(option) => option.riderName}
											renderInput={(params) => (
												<TextField
													{...params}
													label='Select Rider'
													variant='outlined'
												/>
											)}
										/>
									)}
								{selectedStatus !== "All" && (
									<Box>
										{selectedStatus === "Assigned for Pickup" ||
											selectedStatus === "Cancelled by Pickup Rider" ? (
											""
										) : (
											<Button
												variant='contained'
												color='success'
												onClick={handleOpen}
												sx={{ fontWeight: "bold", p: 1 }}>
												Change Status : {selectionModel?.length}
											</Button>
										)}

										<FormControl>
											<Select
												sx={{ visibility: "hidden", mr: 15 }}
												size='small'
												open={open}
												onClose={handleClose}
												onOpen={handleOpen}
												value={status}
												onChange={(event) => {
													changeStatusMulti(event);
													setStatus(event.target.value);
												}}
												displayEmpty
												inputProps={{ "aria-label": "Without label" }}>
												{selectedStatus === "Pickup Request Pending" && (
													<MenuItem value={"Pickup Request Accepted"}>
														Accept
													</MenuItem>
												)}
												{selectedStatus === "Pickup Request Accepted" && (
													<MenuItem value={"Assigned for Pickup"}>
														Assign for Pickup
													</MenuItem>
												)}
												{selectedStatus ===
													"Delivered To Branch By Pickup Rider" && (
														<MenuItem value={"Received in Pickup Branch"}>
															Received in Pickup Branch
														</MenuItem>
													)}
												{selectedStatus === "Received in Pickup Branch" && (
													<MenuItem value={"Delivered To Warehouse"}>
														Deliver To Warehouse
													</MenuItem>
												)}
												{selectedStatus ===
													"Sending Returned Parcel to Branch" && (
														<MenuItem
															value={"Returned Parcel Received in Branch"}>
															Returned Parcel Received
														</MenuItem>
													)}
												{selectedStatus ===
													"Returned Parcel Received in Branch" && (
														<MenuItem
															value={"Sending Returned Parcel to Merchant"}>
															Sent Returned Parcel to Merchant
														</MenuItem>
													)}
											</Select>
										</FormControl>
									</Box>
								)}
							</>
						) : (
							<Button
								disabled
								variant='contained'
								color='success'
								onClick={handleOpen}
								sx={{ fontWeight: "bold", p: 1 }}>
								Change Status
							</Button>
						)}
					</Box>

					<Grid container spacing={1} sx={{ justifyContent: "center", px: 2, position: "relative" }}>
						<Grid item xs={12} md={12}>
							<PrintIcon onClick={() => printData()}
								sx={{ position: "absolute", top: "4.5%", left: "30%", fontSize: "20px", color: "#166534", cursor: "pointer", zIndex: "999", }} />
							{data && (
								<div style={{ height: 400, width: "100%" }} className='table'>
									<DataGrid
										rows={allParcels?.filter(
											(item) => item.marchentInfo.merchantName === marchantName,
										)}
										selectionModel={selectionModel}
										onSelectionModelChange={setSelectionModel}
										getRowId={(row) => row?._id}
										columns={columns}
										pageSize={5}
										rowsPerPageOptions={[5]}
										checkboxSelection
										components={{ Toolbar: GridToolbar }}
									/>
								</div>
							)}
						</Grid>
					</Grid>
					<Box>
						<Box sx={{ my: 2 }} ref={(el) => (ref = el)}>
							<Box sx={{ pb: 2, margin: "auto", textAlign: "center" }}>
								<Typography variant="h5" sx={{ fontWeight: "bold", color: "#166534" }}>
									Alijahan Courier Service
								</Typography>
								<Typography component="div" variant="p">
									89/123 Maniknagar,R.K Mission Road,Dhaka-1203
								</Typography>
								<Typography component="div" variant="p">
									Email:alijahancourier@gmail.com
								</Typography>
								<Typography component="div" variant="p">
									www.alijahan.com
								</Typography>
							</Box>
							<Box sx={{ display: "flex", justifyContent: "space-between", px: 2, mb: 1 }}>
								<Box>
									<Typography variant="p" sx={{ fontSize: "17px", fontWeight: 600 }}>
										Total Order: {tableRows.length}
									</Typography>
								</Box>
								<Box>
									<Typography variant="p" sx={{ fontSize: "17px", fontWeight: 600 }}>
										Printed Date: {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
									</Typography>
								</Box>
							</Box>
							{/* Print Table Component */}
							<Box sx={{ position: "relative", mb: 2 }}>
								<img src="https://alijahan-courier.netlify.app/static/media/Logo.9068b4f56d43d41f4abd.png" alt="Main Logo" className="imagePosition" />
								<TableContainer component="div" sx={{ border: "1px solid #d9d9d9", borderRadius: "10px" }}>
									<Table sx={{ minWidth: 650 }} aria-label="simple table">
										<TableHead>
											<TableRow>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
													ID
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
													Order Info
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
													Merchant
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
													Contact Name
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Contact Number
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Contact Address
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Area
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Amount (BDT)
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Collected (BDT)
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Status
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Payment Status
												</TableCell>
												<TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
													Signature
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{tableRows.map((item) => (
												<TableRow
													key={item?.id}
													sx={{ border: 0 }}>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} component="th" scope="row">
														{item?.id}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.orderInfo}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.merchant}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.contactName}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.contactNumber}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.contactAddress}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.area}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.amount}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.collected}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.status}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
														{item?.paymentStatus}
													</TableCell>
													<TableCell sx={{ borderRight: "1px solid #d9d9d9", width: "9%" }} align="center">

													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
							<Typography variant="p" sx={{ fontSize: "13px" }}>
								This is an Auto Generated Report of <span style={{ color: "green", fontStyle: "italic" }}>Alijahan Courier</span>
							</Typography>
						</Box>
					</Box>
					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
						open={submitting || !data}>
						<CircularProgress color='inherit' />
					</Backdrop>
				</Box>
			</Fade>
		</Modal >
	);
};

export default BranchParcelListFiltered;
