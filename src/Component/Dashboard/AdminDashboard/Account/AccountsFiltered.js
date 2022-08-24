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
import PaymentsIcon from "@mui/icons-material/Payments";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import PrintIcon from "@mui/icons-material/Print";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";

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

const AccountsFiltered = ({
	opens,
	setOpens,
	marchantName,
	allParcels,
	selectedStatus,
}) => {
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

	const receiveAndSendMoney = (text) => {
		Swal.fire({
			title: "Are you sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				// eslint-disable-next-line array-callback-return
				selectionModel.map((item) => {
					if (text === "Money Received in Accounts") {
						axios
							.put(
								`${process.env.REACT_APP_API_PATH}/merchantorderPaymentaccRec/${item}`,
								{
									collectionStatus: text,
									accountsMoneyStatus: "Received",
									moneyReceivedInAccountsDate: new Date().toLocaleString(
										"en-US",
										{
											timeZone: "Asia/Dhaka",
										},
									),
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
					if (text === "Sending Money to Marchant") {
						axios
							.put(
								`${process.env.REACT_APP_API_PATH}/merchantorderPaymentsend/${item}`,
								{
									collectionStatus: text,
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

	const columns = [
		{
			field: "merchantName",
			headerName: "Marchant Name",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantName;
			},
			flex: 1,
		},
		{
			field: "merchantBusinessAddress",
			headerName: "Marchant Address",
			renderCell: (params) => {
				return `${params.row.marchentInfo.merchantBusinessAddress}(${params.row.marchentInfo.merchantArea})`;
			},
			flex: 1,
		},
		{
			field: "merchantContact",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantContact;
			},
			flex: 1,
		},
		{
			field: "collectedAmount",
			headerName: "Amount",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails?.collectedAmount;
			},
			width: 180,
		},
		{
			field: "collectionStatus",
			headerName: "Status",
			renderCell: (params) => {
				return params.row.paymentCollectionDetails?.collectionStatus;
			},
			width: 250,
		},
		/* 	{
			field: "_id",
			headerName: "Action",
			width: 300,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		}, */
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
						{selectionModel?.length > 0 && (
							<>
								{selectedStatus === "Money Received in Accounts" && (
									<Button
										onClick={() =>
											receiveAndSendMoney("Sending Money to Marchant")
										}
										sx={{
											my: 1,
											px: 3,
											fontWeight: "bold",
											borderRadius: "25px",
											border: "2px solid ",
										}}>
										<PaymentsIcon sx={{ mr: 0.5 }} />
										Send to Marchant
									</Button>
								)}
								{selectedStatus === "Sending Money To Accounts" && (
									<Button
										onClick={() =>
											receiveAndSendMoney("Money Received in Accounts")
										}
										sx={{
											my: 1,
											px: 3,
											fontWeight: "bold",
											borderRadius: "25px",
											border: "2px solid ",
										}}>
										<PaymentsIcon sx={{ mr: 0.5 }} />
										Receive
									</Button>
								)}
							</>
						)}
					</Box>

					<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
						<Grid item xs={12} md={12}>
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

					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
						open={submitting || !data}>
						<CircularProgress color='inherit' />
					</Backdrop>
				</Box>
			</Fade>
		</Modal>
	);
};

export default AccountsFiltered;
