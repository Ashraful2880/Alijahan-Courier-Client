import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress, Grid, Backdrop, Typography, Box, Button, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PaymentsIcon from "@mui/icons-material/Payments";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import ParcelModal from "../../AdminDashboard/Account/ParcelModal";

const DeliveryPaymentList = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [modalData, setModalData] = useState();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchantordersbyemail/${user?.email}`, {
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

	const receiveAndSendMoney = (id, paymentCollectionDetails, text) => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				if (text === "Money Received in Marchant") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
							{
								collectionStatus: text,
								marchantMoneyStatus: "Received",
								moneyReceivedInMarchantDate: new Date().toLocaleString(
									"en-US",
									{
										timeZone: "Asia/Dhaka",
									},
								),
								marchantRecAmount: paymentCollectionDetails.marchantRecAmount,
								companyRecAmount: paymentCollectionDetails.companyRecAmount,
								accountsMoneyStatus:
									paymentCollectionDetails?.accountsMoneyStatus,
								moneyReceivedInAccountsDate:
									paymentCollectionDetails?.moneyReceivedInAccountsDate,
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
				{params.row?.paymentCollectionDetails?.collectionStatus ===
					"Sending Money to Marchant" && (
						<Button
							onClick={() =>
								receiveAndSendMoney(
									params.row?._id,
									params.row?.paymentCollectionDetails,
									"Money Received in Marchant",
								)
							}
							sx={{ my: 1, px: 3, fontWeight: "bold", borderRadius: "25px", border: "2px solid ", }}>
							<PaymentsIcon sx={{ mr: 0.5 }} />
							Receive {params.row?.paymentCollectionDetails?.marchantRec} ৳ from
							Accounts
						</Button>
					)}
				<RemoveRedEyeIcon
					onClick={() => handleOpen(setModalData(params.row))}
					sx={{ ml: 1.5, color: "#08A74C", cursor: "pointer" }} />
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
			field: "collectedAmount",
			headerName: "Collected Amount",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.collectedAmount;
			},
			flex: 1,
		},
		{
			field: "totalCharges",
			headerName: "Total Charges",
			renderCell: (params) => {
				return params.row.orderSummaray.totalCharges;
			},
			flex: 1,
		},
		{
			field: "totalReceive",
			headerName: "Merchant Receive",
			renderCell: (params) => {
				return params.row.orderSummaray.totalReceive;
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
			width: 400,
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
					All Parcel List
				</Typography>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{data && (
						<div style={{ height: "80vh", width: "100%" }} className='table'>
							<DataGrid
								rows={data}
								getRowId={(row) => row?._id}
								columns={columns}
								pageSize={10}
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

export default DeliveryPaymentList;
