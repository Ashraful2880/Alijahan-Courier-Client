import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress, Grid, Backdrop, Typography, Box, Fade, Modal, Badge, } from "@mui/material";
import {
	DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton,
} from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import CancelIcon from "@mui/icons-material/Cancel";
import ParcelModal from "../Account/ParcelModal";
import PrintIcon from "@mui/icons-material/Print";
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

const AdminParcelListFiltered = ({
	opens,
	setOpens,
	marchantName,
	allParcels,
}) => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [parcelData, setParcelData] = useState();
	const [open, setOpen] = React.useState(false);
	const [selectionModel, setSelectionModel] = React.useState();
	const [selected, setSelected] = React.useState();
	const [openPrint, setOpenPrint] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	const handleOpenPrint = () => {
		setOpenPrint(true);
		setSelected(data?.filter((e) => selectionModel?.find((n) => n === e?._id)));
	};
	const handleClosePrint = () => setOpenPrint(false);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchantorders`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setData(response?.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, submitting]);

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
	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<RemoveRedEyeIcon
					onClick={() => handleOpen(setParcelData(params?.row))}
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
				return params?.row?.marchentInfo?.merchantName;
			},
			flex: 1,
		},
		{
			field: "receiverBranchArea",
			headerName: "Pickup Address",
			renderCell: (params) => {
				return params?.row?.receiverInfo?.receiverBranchArea;
			},
			flex: 1,
		},
		{
			field: "receiverAddress",
			headerName: "Full Address",
			renderCell: (params) => {
				return params?.row?.receiverInfo?.receiverAddress;
			},
			flex: 1,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params?.row?.receiverInfo?.receiverNumber;
			},
			flex: 1,
		},
		{ field: "status", headerName: "Status", flex: 1 },
		{
			field: "_id",
			headerName: "Action",
			width: 250,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];
	function CustomToolbar() {
		return (
			<GridToolbarContainer>
				<GridToolbarColumnsButton />
				<GridToolbarFilterButton />
				{selectionModel?.length > 0 &&
					<Badge badgeContent={selectionModel?.length} color='primary' sx={{
						mx: 2,
						fontSize: "20px",
						color: "#166534",
						cursor: "pointer",
						zIndex: "999",
					}}>
						<PrintIcon
							onClick={handleOpenPrint}

						/>
					</Badge>}
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
					<Grid container spacing={1} sx={{ justifyContent: "center", px: 2, position: "relative" }}>
						<Grid item xs={12} md={12}>
							{data && (
								<div style={{ height: "80vh", width: "100%" }} className='table'>
									<DataGrid
										rows={allParcels?.filter(
											(item) => item?.marchentInfo?.merchantName === marchantName,
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
					<ParcelModal
						open={open}
						handleOpen={handleOpen}
						handleClose={handleClose}
						modalData={parcelData}
					/>
				</Box>
			</Fade>
		</Modal>
	);
};

export default AdminParcelListFiltered;
