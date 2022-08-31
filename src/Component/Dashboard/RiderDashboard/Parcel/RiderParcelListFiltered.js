import React from "react";
import { useState, useEffect } from "react";
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
	Badge,
} from "@mui/material";
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarColumnsButton,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import PrintIcon from "@mui/icons-material/Print";
import PaymentsIcon from "@mui/icons-material/Payments";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";
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

const RiderParcelListFiltered = ({
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
	const [selectionModel, setSelectionModel] = React.useState();
	const [selected, setSelected] = React.useState([]);
	const [openPrint, setOpenPrint] = React.useState(false);

	const handleOpenPrint = () => {
		setOpenPrint(true);
		setSelected(data?.filter((e) => selectionModel?.find((n) => n === e._id)));
	};
	const handleClosePrint = () => setOpenPrint(false);
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/riderCollectOrders/${user?.email}`,
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
	}, [token, submitting, user?.email]);

	const changeStatusMulti = (event, id) => {
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
							`${process.env.REACT_APP_API_PATH}/merchantorderStatus/${item}`,
							{
								status: event.target.value,
								time: new Date().toLocaleString("en-US", {
									timeZone: "Asia/Dhaka",
								}),
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
			width: 170,
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
			width: 400,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];

	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarColumnsButton />
				<GridToolbarFilterButton />
				{selectionModel?.length > 0 && (
					<Badge
						badgeContent={selectionModel?.length}
						color='primary'
						sx={{
							mx: 2,
							fontSize: "20px",
							color: "#166534",
							cursor: "pointer",
							zIndex: "999",
						}}>
						<PrintIcon onClick={handleOpenPrint} />
					</Badge>
				)}
			</GridToolbarContainer>
		);
	}
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			open={opens}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{ timeout: 500 }}>
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
								{selectedStatus !== "All" && (
									<Box>
										<Button
											variant='contained'
											color='success'
											onClick={handleOpen}
											sx={{ fontWeight: "bold", p: 1 }}>
											Change Status : {selectionModel?.length}
										</Button>

										<FormControl sx={{ m: 1 }}>
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
												{selectedStatus === "Assigned for Pickup" && (
													<MenuItem value={"Cancelled by Pickup Rider"}>
														Cancel
													</MenuItem>
												)}
												{selectedStatus === "Assigned for Pickup" && (
													<MenuItem value={"Accepted by Pickup Rider"}>
														Accept
													</MenuItem>
												)}
												{selectedStatus === "Accepted by Pickup Rider" && (
													<MenuItem value={"Parcel Received By Pickup Rider"}>
														Parcel Received From Marchant
													</MenuItem>
												)}
												{selectedStatus ===
													"Parcel Received By Pickup Rider" && (
													<MenuItem
														value={"Delivered To Branch By Pickup Rider"}>
														Deliver To Pickup Branch
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
										pageSize={10}
										rowsPerPageOptions={[5]}
										checkboxSelection
										components={{ Toolbar: CustomToolbar }}
									/>
								</div>
							)}
						</Grid>
					</Grid>
					{/* Print Component Here */}
					<Print
						data={selected}
						handleClosePrint={handleClosePrint}
						openPrint={openPrint}
					/>
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

export default RiderParcelListFiltered;
