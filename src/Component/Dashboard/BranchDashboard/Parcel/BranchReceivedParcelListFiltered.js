import {
	CircularProgress,
	Grid,
	Backdrop,
	Typography,
	Box,
	FormControl,
	Select,
	MenuItem,
	Button,
	Fade,
	Modal,
	TextField,
	Autocomplete,
	TableRow,
	TableCell,
	TableBody,
	TableHead,
	Table,
	TableContainer,
} from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";
import PaymentsIcon from "@mui/icons-material/Payments";
import PrintIcon from "@mui/icons-material/Print";
import Badge from "@mui/material/Badge";
import Print from "../../Print/Print";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	width: "90vw",
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	textAlign: "center",
	backgroundColor: "white",
};

const BranchReceivedParcelListFiltered = ({
	opens,
	setOpens,
	marchantName,
	allParcels,
	selectedStatus,
}) => {
	const email = "branch2@gmail.com";
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

	useEffect(() => {
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
							`${process.env.REACT_APP_API_PATH}/merchantorderRiderDeviler/${item}`,
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
						Swal.fire("", "Successfully Done!", "success");
						setOpens(false);
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
					if (event.target.value === "Sending Returned Parcel to Warehouse") {
						axios
							.put(
								`${process.env.REACT_APP_API_PATH}/merchantorderReturnWarehouse/${item}`,
								{
									returnWarehouseInfo: Warehouse,
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
						style={{ width: 250 }}
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
	const [openPrint, setOpenPrint] = React.useState(false);
	const handleOpenPrint = () => {
		setOpenPrint(true);
		setSelected(data?.filter((e) => selectionModel?.find((n) => n === e._id)));
	};
	const handleClosePrint = () => setOpenPrint(false);
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
							top: "30px",
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
								{(selectedStatus === "Assigned Rider For Delivery" ||
									selectedStatus === "Cancelled By Delivery Rider") && (
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
										{selectedStatus === "Assigned Rider For Delivery" ||
										selectedStatus === "Cancelled By Delivery Rider" ? (
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
												{selectedStatus === "Delivered To Receiver Branch" && (
													<MenuItem value={"Received in Receiver Branch"}>
														Receive
													</MenuItem>
												)}
												{selectedStatus === "Received in Receiver Branch" && (
													<MenuItem value={"Assigned Rider For Delivery"}>
														Assign Rider For Delivery
													</MenuItem>
												)}
												{selectedStatus === "Delivered To Branch By Rider" && (
													<MenuItem value={"Received in Branch"}>
														Received in Branch
													</MenuItem>
												)}
												{selectedStatus === "Returning Parcel to Branch" && (
													<MenuItem
														value={"Returned Parcel Received in Branch"}>
														Returning Parcel Received
													</MenuItem>
												)}
												{selectedStatus ===
													"Returned Parcel Received in Branch" && (
													<MenuItem
														value={"Sending Returned Parcel to Warehouse"}>
														Sent Returned Parcel to Warehouse
													</MenuItem>
												)}
											</Select>
										</FormControl>
									</Box>
								)}
							</>
						) : (
							<>
								{selectedStatus !== "All" && (
									<Button
										disabled
										variant='contained'
										color='success'
										onClick={handleOpen}
										sx={{ fontWeight: "bold", p: 1 }}>
										Change Status
									</Button>
								)}
							</>
						)}
					</Box>
					<Grid
						container
						spacing={1}
						sx={{ justifyContent: "center", px: 2, position: "relative" }}>
						<Grid item xs={12} md={12}>
							<Badge badgeContent={selectionModel?.length} color='primary'>
								<PrintIcon
									onClick={handleOpenPrint}
									sx={{
										position: "absolute",
										top: "4.5%",
										left: "30%",
										fontSize: "20px",
										color: "#166534",
										cursor: "pointer",
										zIndex: "999",
									}}
								/>
							</Badge>
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
					{/* Print Component Here */}
					{
						<Print
							data={selected}
							handleClosePrint={handleClosePrint}
							openPrint={openPrint}
						/>
					}
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

export default BranchReceivedParcelListFiltered;
