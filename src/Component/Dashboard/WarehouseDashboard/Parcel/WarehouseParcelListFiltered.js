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
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";
import Print from "../../Print/Print";
import BarcodePrint from "./../../BarcodePrint/BarcodePrint";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	px: 2,
	py: 5,
	width: "90vw",
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	textAlign: "center",
	backgroundColor: "white",
};
const WarehouseParcelListFiltered = ({
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
	const [data, setData] = useState([]);
	const [status, setStatus] = useState("");
	const [selectionModel, setSelectionModel] = React.useState([]);
	const [selected, setSelected] = React.useState([]);
	const [openPrint, setOpenPrint] = React.useState(false);
	const [openBarCode, setOpenBarCode] = React.useState(false);

	const handleOpenPrint = () => {
		setOpenPrint(true);
		setSelected(data?.filter((e) => selectionModel?.find((n) => n === e._id)));
	};
	const handleClosePrint = () => setOpenPrint(false);
	const handleCloseBarCode = () => setOpenBarCode(false);

	const handleOpenBarCode = () => {
		setOpenBarCode(true);
		setSelected(data?.filter((e) => selectionModel?.find((n) => n === e._id)));
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouseOrders/${user?.email}`, {
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

	const renderDetailsButton = (params) => {
		return <Box sx={{ display: "flex", alignItems: "center" }}></Box>;
	};

	const columns = [
		{
			field: "merchantName",
			headerName: "Marchant Name",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantName;
			},
			width: 190,
		},
		{
			field: "receiverBranchArea",
			headerName: "Pickup Address",
			renderCell: (params) => {
				return ` ${params.row.receiverInfo.receiverBranchArea}(${params.row.receiverInfo.receiverBranchName})`;
			},
			width: 190,
		},
		{
			field: "receiverAddress",
			headerName: "Full Address",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverAddress;
			},
			width: 190,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverNumber;
			},
			width: 190,
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
	function CustomToolbar() {
		return (
			<GridToolbarContainer sx={{ py: 1 }}>
				<GridToolbarColumnsButton />
				<GridToolbarFilterButton />
				<Box sx={{ display: "flex", my: 1, mx: 2 }}>
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
											{selectedStatus === "Delivered To Warehouse" && (
												<MenuItem value={"Parcel Received On Warehouse"}>
													Parcel Received
												</MenuItem>
											)}
											{selectedStatus === "Parcel Received On Warehouse" && (
												<MenuItem value={"Delivered To Receiver Branch"}>
													Deliver To Receiver Branch
												</MenuItem>
											)}
											{selectedStatus ===
												"Sending Returned Parcel to Warehouse" && (
													<MenuItem
														value={"Returned Parcel Received in Warehouse"}>
														Receive Returned Parcel
													</MenuItem>
												)}
											{selectedStatus ===
												"Returned Parcel Received in Warehouse" && (
													<MenuItem value={"Sending Returned Parcel to Branch"}>
														Return Parcel to Branch
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
								<>
									<Button
										disabled
										variant='contained'
										color='success'
										onClick={handleOpen}
										sx={{ fontWeight: "bold", p: 1 }}>
										Change Status
									</Button>
								</>
							)}
						</>
					)}
				</Box>
				{/* Print Icon */}
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
				{/* Print Icon Barcode */}
				{selectionModel?.length > 0 && (
					<Button
						onClick={handleOpenBarCode}
						sx={{
							mx: 2,
							fontSize: "20px",
							color: "#166534",
							cursor: "pointer",
							zIndex: "999",
						}}>
						<Typography> Barcode </Typography>
						<Badge badgeContent={selectionModel?.length} color='primary'>
							<PrintIcon color='success' />
						</Badge>
					</Button>
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
							top: "50px",
							right: "40px",
							zIndex: 999,
							cursor: "pointer",
							background: "White",
							borderRadius: "50%",
						}}
					/>
					<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
						<Grid item xs={12} md={12}>
							{data && (
								<div style={{ height: "80vh", width: "100%" }} className='table'>
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
					{/*Barcode Print Component Here */}
					<BarcodePrint
						data={selected}
						handleCloseBarCode={handleCloseBarCode}
						openBarCode={openBarCode}
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

export default WarehouseParcelListFiltered;
