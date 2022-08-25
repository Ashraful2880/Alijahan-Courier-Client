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
} from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import PaymentsIcon from "@mui/icons-material/Payments";
import ParcelModal from "../../AdminDashboard/Account/ParcelModal";

const ParcelList = () => {
	const email = "marchant2@gmail.com";
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [modalData, setModalData] = useState();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchantordersbyemail/${email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, submitting]);
	const changeStatus = (id, text) => {
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
							status: text,
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
	const confirmReceive = (id, text) => {
		Swal.fire({
			title: "Did you received the money?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				if (text === "Merchant Received Money") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentRecMerchant/${id}`,
							{
								collectionStatus: text,
								moneyReceivedInMerchantDate: new Date().toLocaleString(
									"en-US",
									{
										timeZone: "Asia/Dhaka",
									},
								),
								merchantMoneyStatus: "Received",
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
				if (text === "Merchant Paid Return Fee") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentReturnFee/${id}`,
							{
								collectionStatus: text,
								ReturnFeePaidDate: new Date().toLocaleString("en-US", {
									timeZone: "Asia/Dhaka",
								}),
								merchantReturnFeeStatus: "Paid",
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
				{params.row?.status === "Delivered To Customer By Rider" &&
					params.row?.paymentCollectionDetails?.collectionStatus ===
						"Sending Money To Merchant" && (
						<Button
							onClick={() =>
								confirmReceive(params.row?._id, "Merchant Received Money")
							}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<PaymentsIcon sx={{ mr: 0.5 }} />
							Confirm {params.row?.paymentCollectionDetails?.marchantRec} ৳
							Received
						</Button>
					)}

				{params.row?.status === "Delivered To Customer By Rider" &&
					params.row?.paymentCollectionDetails?.marchantMoneyStatus ===
						"Received" && (
						<Button
							onClick={() => {
								changeStatus(params.row?._id, "Successfully Completed");
							}}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<DoneAllIcon sx={{ mr: 0.5 }} />
							Mark As Completed
						</Button>
					)}
				{params.row?.status !== "Successfully Returned To Merchant" &&
					params.row?.paymentCollectionDetails?.merchantReturnFeeStatus ===
						"Paid" && (
						<Button
							onClick={() => {
								changeStatus(
									params.row?._id,
									"Successfully Returned To Merchant",
								);
							}}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<DoneAllIcon sx={{ mr: 0.5 }} />
							Accept Returned Parcel
						</Button>
					)}
				{params.row?.status === "Sending Returned Parcel to Merchant" &&
					params.row?.paymentCollectionDetails?.merchantReturnFeeStatus !==
						"Paid" && (
						<Button
							onClick={() =>
								confirmReceive(params.row?._id, "Merchant Paid Return Fee")
							}
							sx={{
								my: 1,
								px: 3,
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid ",
							}}>
							<PaymentsIcon sx={{ mr: 0.5 }} />
							Pay Return Fee {params.row?.orderSummaray?.returnCharge} ৳
						</Button>
					)}

				<RemoveRedEyeIcon
					onClick={() => handleOpen(setModalData(params.row))}
					sx={{ ml: 1.5, color: "green", cursor: "pointer" }}
				/>
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
			width: 350,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];

	const [selectedStatus, setSelectedStatus] = useState("All");
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
					All Parcel List
				</Typography>
			</Box>
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					All
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Customer By Rider" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Customer By Rider")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Delivered
				</Button>
				<Button
					className={
						selectedStatus === "Successfully Completed" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Successfully Completed")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Completed
				</Button>
				<Button
					className={
						selectedStatus === "Sending Returned Parcel to Merchant"
							? "active"
							: ""
					}
					onClick={() =>
						setSelectedStatus("Sending Returned Parcel to Merchant")
					}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Pending Returned Parcel
				</Button>
				<Button
					className={
						selectedStatus === "Successfully Returned To Merchant"
							? "active"
							: ""
					}
					onClick={() => setSelectedStatus("Successfully Returned To Merchant")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Returned Parcel
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
			<ParcelModal
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
				modalData={modalData}
			/>
		</Box>
	);
};

export default ParcelList;
