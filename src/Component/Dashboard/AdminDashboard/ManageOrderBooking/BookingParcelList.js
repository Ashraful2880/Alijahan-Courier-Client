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
} from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
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
	}, [token]);
	const changeStatus = (event, id) => {
		setStatus(event.target.value);
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
							status: status,
						},
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						},
					)
					.then((response) => {
						setSubmitting(false);
						Swal.fire("", "Successfully Activated!", "success");
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
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<Select
						size='small'
						value={status}
						onChange={(event) => changeStatus(event, params.row?._id)}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}>
						<MenuItem value=''>
							<em>Change Status</em>
						</MenuItem>
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
				</FormControl>
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
		{ field: "branchName", headerName: "Branch Name", width: 100 },
		{ field: "pickupCom", headerName: "Pickup", width: 100 },
		{ field: "deliveryCom", headerName: "Delivery", width: 100 },
		{ field: "bookingCom", headerName: "Booking", width: 100 },
		{ field: "officeDeliveryCom", headerName: "Office Delivery", width: 100 },
		{ field: "status", headerName: "Status", width: 100 },
		{
			field: "_id",
			headerName: "Action",
			width: 300,
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
					mb: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
					Booking Parcel List
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

export default BookingParcelList;
