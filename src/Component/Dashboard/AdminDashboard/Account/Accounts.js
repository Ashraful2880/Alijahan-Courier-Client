import {
	CircularProgress,
	Grid,
	Backdrop,
	Typography,
	Box,
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
import PaymentsIcon from "@mui/icons-material/Payments";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import ParcelModal from "./ParcelModal";

const Accounts = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [modalData, setModalData] = useState();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchantorders`, {
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

	const receiveAndSendMoney = (
		id,
		paymentCollectionDetails,
		totalRec,
		text,
	) => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				if (text === "Money Received in Accounts") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
							{
								collectionStatus: text,
								accountsMoneyStatus: "Received",
								moneyReceivedInAccountsDate: new Date().toLocaleString(
									"en-US",
									{
										timeZone: "Asia/Dhaka",
									},
								),
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
				if (text === "Sending Money to Marchant") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentCollection/${id}`,
							{
								collectionStatus: text,
								marchantRecAmount: totalRec.totalReceive,
								companyRecAmount: totalRec.totalCharges,
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
			<Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
				{params.row?.paymentCollectionDetails?.collectionStatus ===
					"Money Received in Accounts" && (
						<Button
							onClick={() =>
								receiveAndSendMoney(
									params.row?._id,
									params.row?.paymentCollectionDetails,
									params.row?.orderSummaray,
									"Sending Money to Marchant",
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
							Send {params.row?.orderSummaray.totalReceive} ৳ to Marchant
						</Button>
					)}
				{params.row?.paymentCollectionDetails?.collectionStatus ===
					"Sending Money To Accounts" && (
						<Button
							onClick={() =>
								receiveAndSendMoney(
									params.row?._id,
									params.row?.paymentCollectionDetails,
									params.row?.orderSummaray,
									"Money Received in Accounts",
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
							from Branch
						</Button>
					)}
				{/* 		<DeleteIcon
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
				<RemoveRedEyeIcon onClick={() => handleOpen(setModalData(params.row))} sx={{ ml: 1.5, color: "green", cursor: "pointer" }} />
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
			width: 180,
		},
		{
			field: "merchantName",
			headerName: "Merchant",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantName;
			},
			width: 180,
		},
		{
			field: "collectedAmount",
			headerName: "Collected Amount",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.collectedAmount;
			},
			width: 150,
		},
		{
			field: "totalCharges",
			headerName: "Total Charges",
			renderCell: (params) => {
				return params.row.orderSummaray.totalCharges;
			},
			width: 150,
		},
		{
			field: "totalReceive",
			headerName: "Merchant Receive",
			renderCell: (params) => {
				return params.row.orderSummaray.totalReceive;
			},
			width: 180,
		},
		{
			field: "collectionStatus",
			headerName: "Collection Status",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails.collectionStatus;
			},
			width: 200,
		},
		{ field: "status", headerName: "Order Status", width: 200 },
		{
			field: "_id",
			headerName: "Action",
			width: 250,
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
					All Delivery Payment List
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
						selectedStatus === "Sending Money To Accounts" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Sending Money To Accounts")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Send To Accounts
				</Button>
				<Button
					className={
						selectedStatus === "Money Received in Accounts" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Money Received in Accounts")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Received
				</Button>
				<Button
					className={
						selectedStatus === "Sending Money to Marchant" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Sending Money to Marchant")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Send to Marchant
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

			<ParcelModal open={open} handleOpen={handleOpen} handleClose={handleClose} modalData={modalData} />
		</Box>
	);
};

export default Accounts;
