import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress, Grid, Backdrop, Typography, Box, Button, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import ParcelModal from "../../AdminDashboard/Account/ParcelModal";

const RiderAccounts = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [modalData, setModalData] = useState();
	const [open, setOpen] = React.useState(false);
	const [selectionModel, setSelectionModel] = React.useState();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/riderOrders/${user?.email}`, {
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
	const sendMoneyToBranch = () => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				selectionModel.map((item) =>
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderPaymentsend/${item}`,
							{
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
						}),
				);
			}
		});
	};

	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<RemoveRedEyeIcon
					onClick={() => handleOpen(setModalData(params?.row))}
					sx={{ ml: 1.5, color: "#08A74C", cursor: "pointer" }}
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

	const [selectedStatus, setSelectedStatus] = useState("All");
	const filterData = data?.filter(
		(item) =>
			item?.paymentCollectionDetails?.collectionStatus === selectedStatus,
	);

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
			</Box>{" "}
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					All
				</Button>
				<Button
					className={
						selectedStatus === "Collected From Customer" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Collected From Customer")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Collected
				</Button>
				{selectedStatus === "Collected From Customer" &&
					selectionModel?.length > 0 && (
						<Button
							onClick={() => sendMoneyToBranch()}
							variant='contained'
							color='success'
							sx={{ fontWeight: "bold", p: 1 }}>
							Send Money To Branch
						</Button>
					)}
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{data && (
						<div style={{ height: "80vh", width: "100%" }} className='table'>
							<DataGrid
								rows={selectedStatus === "All" ? data : filterData}
								selectionModel={selectionModel}
								onSelectionModelChange={setSelectionModel}
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

export default RiderAccounts;
