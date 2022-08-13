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
import PaymentsIcon from "@mui/icons-material/Payments";
import GetAuth from "../../../../FirebaseAuth/GetAuth";

const RiderAccounts = () => {
	const email = "rider2@gmail.com";
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [status, setStatus] = useState("");
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/riderOrders/${email}`, {
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

	const changePaymentStatus = (id, money) => {
		Swal.fire({
			title: "Did you collected the money?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				axios
					.put(
						`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
						{
							collectionStatus: "Collected From Customer",
							riderMoneyStatus: "Received",
							collectedFromCustomerDate: new Date().toLocaleString("en-US", {
								timeZone: "Asia/Dhaka",
							}),
							collectedAmount: money,
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
	const sendMoneyToBranch = (id, paymentCollectionDetails) => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				axios
					.put(
						`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
						{
							collectedFromCustomerDate:
								paymentCollectionDetails?.collectedFromCustomerDate,
							riderMoneyStatus: paymentCollectionDetails?.riderMoneyStatus,
							collectedAmount: paymentCollectionDetails?.collectedAmount,
							collectionStatus: "Sending Money To Branch",
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

	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				{params.row?.status === "Delivered To Customer By Rider" &&
					params.row?.paymentCollectionDetails?.collectionStatus ===
					"Collected From Customer" && (
						<Button
							onClick={() =>
								sendMoneyToBranch(
									params.row?._id,
									params.row?.paymentCollectionDetails,
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
							Send {params.row?.orderSummaray?.totalAmountWithCharges} ৳ To
							Branch
						</Button>
					)}
				{params.row?.status === "Parcel Received By Delivery Rider" &&
					params.row?.paymentCollectionDetails?.collectionStatus ===
					"Pending" && (
						<Button
							onClick={() =>
								changePaymentStatus(
									params.row?._id,
									params.row?.orderSummaray?.totalAmountWithCharges,
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
							Collect {params.row?.orderSummaray?.totalAmountWithCharges} ৳
						</Button>
					)}
				<DeleteIcon
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
				/>
			</Box>
		);
	};

	const columns = [
		{
			field: "orderId",
			headerName: "Order ID",
			renderCell: (params) => {
				return params.row.orderId;
			},
			flex: 1,
		},
		{
			field: "merchantName",
			headerName: "Merchant",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantName;
			},
			flex: 1,
		},
		{
			field: "collectedAmount",
			headerName: "Collected Amount",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.collectedAmount;
			},
			flex: 1,
		},
		{
			field: "branchMoneyStatus",
			headerName: "Branch Money Received?",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.branchMoneyStatus || "N/A";
			},
			flex: 1,
		},

		{
			field: "collectionStatus",
			headerName: "Collection Status",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.collectionStatus;
			},
			flex: 1,
		},
		{ field: "status", headerName: "Order Status", flex: 1 },
		{
			field: "_id",
			headerName: "Action",
			width: 250,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];
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
					Accounts
				</Typography>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{data && (
						<div style={{ height: 400, width: "100%" }} className='table'>
							<DataGrid
								rows={data}
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

export default RiderAccounts;
