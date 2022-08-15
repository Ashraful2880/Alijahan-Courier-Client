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
	Autocomplete,
	TextField,
	Button,
} from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAuth from "../../../../FirebaseAuth/GetAuth.js";
import PaymentsIcon from "@mui/icons-material/Payments";

const BranchReceivedParcelList = () => {
	const email = "branch@gmail.com";
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [status, setStatus] = useState("");
	const [riders, setRiders] = useState();
	const [branch, setBranch] = useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branchbyemail/${email}`, {
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
			.get(
				`${process.env.REACT_APP_API_PATH}/receiverBranchOrders/${branch?.branchName}`,
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
	}, [token, submitting, branch]);
	const changeStatus = (event, id) => {
		Swal.fire({
			title: "Are You Sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				axios
					.put(
						`${process.env.REACT_APP_API_PATH}/merchantorderStatus/${id}`,
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
					})
					.catch((error) => {
						setSubmitting(false);
						console.log(error);
					});
			}
		});
	};
	const changeRider = (event, newValue, id) => {
		Swal.fire({
			title: "Are You Sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				axios
					.put(
						`${process.env.REACT_APP_API_PATH}/merchantorderRiderDeviler/${id}`,
						{
							deliverRiderInfo: newValue,
							status: "Assigned Rider For Delivery",
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						},
					)
					.then((response) => {
						setSubmitting(false);
						Swal.fire("", "Successfully Assigned!", "success");
					})
					.catch((error) => {
						setSubmitting(false);
						console.log(error);
					});
			}
		});
	};
	const receiveAndSendMoney = (id, paymentCollectionDetails, text) => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				if (text === "Money Received In Branch") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
							{
								collectionStatus: text,
								moneyReceivedInBranchDate: new Date().toLocaleString("en-US", {
									timeZone: "Asia/Dhaka",
								}),
								branchMoneyStatus: "Received",
								collectedFromCustomerDate:
									paymentCollectionDetails?.collectedFromCustomerDate,
								riderMoneyStatus: paymentCollectionDetails?.riderMoneyStatus,
								collectedAmount: paymentCollectionDetails?.collectedAmount,
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
						})
						.catch((error) => {
							setSubmitting(false);
							console.log(error);
						});
				}
				if (text === "Sending Money To Accounts") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
							{
								collectionStatus: text,
								moneyReceivedInBranchDate:
									paymentCollectionDetails?.moneyReceivedInBranchDate,
								branchMoneyStatus: paymentCollectionDetails?.branchMoneyStatus,
								collectedFromCustomerDate:
									paymentCollectionDetails?.collectedFromCustomerDate,
								riderMoneyStatus: paymentCollectionDetails?.riderMoneyStatus,
								collectedAmount: paymentCollectionDetails?.collectedAmount,
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
						})
						.catch((error) => {
							setSubmitting(false);
							console.log(error);
						});
				}
			}
		});
	};
	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				{((params.row?.status === "Assigned Rider For Delivery" &&
					!params.row?.deliverRiderInfo?.riderName) ||
					params.row?.status === "Cancelled By Delivery Rider") && (
					<Autocomplete
						onChange={(event, newValue) => {
							changeRider(event, newValue, params.row?._id);
						}}
						size='small'
						sx={{ my: 0.5 }}
						options={riders}
						getOptionLabel={(option) => option.riderName}
						style={{ width: 150 }}
						renderInput={(params) => (
							<TextField {...params} label='Select Rider' variant='outlined' />
						)}
					/>
				)}
				{params.row?.status === "Delivered To Customer By Rider" &&
					params.row?.paymentCollectionDetails?.collectionStatus ===
						"Sending Money To Branch" && (
						<Button
							onClick={() =>
								receiveAndSendMoney(
									params.row?._id,
									params.row?.paymentCollectionDetails,
									"Money Received In Branch",
								)
							}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<PaymentsIcon sx={{ mr: 0.5 }} />
							Receive {params.row?.paymentCollectionDetails?.collectedAmount} ৳
							from Rider
						</Button>
					)}
				{params.row?.status === "Delivered To Customer By Rider" &&
					params.row?.paymentCollectionDetails?.collectionStatus ===
						"Money Received In Branch" && (
						<Button
							onClick={() =>
								receiveAndSendMoney(
									params.row?._id,
									params.row?.paymentCollectionDetails,
									"Sending Money To Accounts",
								)
							}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<PaymentsIcon sx={{ mr: 0.5 }} />
							Send {params.row?.paymentCollectionDetails?.collectedAmount} ৳ to
							Accounts
						</Button>
					)}
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<Select
						size='small'
						value={status}
						onChange={(event) => {
							changeStatus(event, params.row?._id);
							setStatus(event.target.value);
						}}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}>
						{params.row?.status === "Delivered To Receiver Branch" && (
							<MenuItem value={"Assigned Rider For Delivery"}>
								Assign Rider For Delivery
							</MenuItem>
						)}
						{params.row?.status === "Delivered To Branch By Rider" && (
							<MenuItem value={"Received in Branch"}>
								Received in Branch
							</MenuItem>
						)}
					</Select>
				</FormControl>

				{/* 	<DeleteIcon
					className='iconBtn'
					sx={{ color: "#df0f00!important" }}
					onClick={() => {
						Swal.fire({
							title: "Do you want to Delete this?",
							showCancelButton: true,
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								setSubmitting(true);
								axios
									.delete(
										`${process.env.REACT_APP_API_PATH}/merchantorder/${params.row?._id}`,
										{
											headers: {
												Authorization: `Bearer ${token}`,
											},
										},
									)
									.then((response) => {
										setSubmitting(false);
										Swal.fire("", "Successfully Deleted!", "success");
									})
									.catch((error) => {
										setSubmitting(false);
										console.log(error);
									});
							}
						});
					}}
				/> */}
			</Box>
		);
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
		{
			field: "_id",
			headerName: "Action",
			width: 300,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];

	const [selectedStatus, setSelectedStatus] = useState();
	const filterData = data?.filter((item) => item?.status === selectedStatus);

	return (
		<Box sx={{ mx: 4, pt: 2, pb: 5 }}>
			<Box
				sx={{
					px: 2.5,
					pb: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
					Received Parcel List
				</Typography>
			</Box>
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					All
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Receiver Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Receiver Branch")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Delivered To Receiver Branch
				</Button>
				<Button
					className={
						selectedStatus === "Assigned Rider For Delivery" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Assigned Rider For Delivery")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Assigned Rider For Delivery
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Branch By Rider" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Branch By Rider")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Delivered To Branch By Rider
				</Button>
				<Button
					className={selectedStatus === "Received in Branch" ? "active" : ""}
					onClick={() => setSelectedStatus("Received in Branch")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Received in Branch
				</Button>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{filterData && (
						<div style={{ height: 400, width: "100%" }} className='table'>
							<DataGrid
								rows={selectedStatus === "All" ? data : filterData}
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
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
				open={submitting || !data}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default BranchReceivedParcelList;
