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
import GetAuth from "../../../../FirebaseAuth/GetAuth";

const BookingParcelList = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [status, setStatus] = useState("");
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
	console.log(status);
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
				{/* <FormControl sx={{ m: 1, }}>
					<Select
						size='small'
						value={status}
						onChange={(event) => {
							changeStatus(params.row?._id);
							setStatus(event.target.value);
						}}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}>
						<MenuItem value={"Pending"}>Pending</MenuItem>
						<MenuItem value={"Accepted"}>Accepted</MenuItem>
						<MenuItem value={"Assign for Pickup"}>Assign for Pickup</MenuItem>
						<MenuItem value={"Picked Up"}>Picked Up</MenuItem>
						<MenuItem value={"Assign For Deliver"}>Assign For Deliver</MenuItem>
						<MenuItem value={"Delivered"}>Delivered</MenuItem>
						<MenuItem value={"Hold"}>Hold</MenuItem>
						<MenuItem value={"Re-scheduled"}>Re-scheduled</MenuItem>
						<MenuItem value={"Canceled"}>Canceled</MenuItem>
						<MenuItem value={"Returned"}>Returned</MenuItem>
					</Select>
				</FormControl> */}
				{/* <DeleteIcon
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
				<RemoveRedEyeIcon sx={{ ml: 1.5, color: "green" }} />
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
			flex: 1,
		},
		{
			field: "receiverBranchArea",
			headerName: "Pickup Address",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverBranchArea;
			},
			flex: 1,
		},
		{
			field: "receiverAddress",
			headerName: "Full Address",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverAddress;
			},
			flex: 1,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params.row.receiverInfo.receiverNumber;
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
			</Box>{" "}
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					All
				</Button>
				<Button
					className={selectedStatus === "Pending" ? "active" : ""}
					onClick={() => setSelectedStatus("Pending")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Pending
				</Button>
				<Button
					className={
						selectedStatus === "Received in Pickup Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Received in Pickup Branch")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Received in Pickup Branch
				</Button>
				<Button
					className={
						selectedStatus === "Parcel Received On Warehouse" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Parcel Received On Warehouse")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Received On Warehouse
				</Button>
				<Button
					className={selectedStatus === "Received in Branch" ? "active" : ""}
					onClick={() => setSelectedStatus("Received in Branch")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Received in Receiver Branch
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Customer By Rider" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Customer By Rider")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Delivered To Customer
				</Button>
				<Button
					className={
						selectedStatus === "Successfully Completed" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Successfully Completed")}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
					Successfully Completed
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
		</Box>
	);
};

export default BookingParcelList;
