import React from "react";
import { useState, useEffect } from "react";
import { Button, CircularProgress, Grid, Backdrop, Typography, Box, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditWarehouseUsers from "./EditWarehouseUsers.js";
import AddIcon from "@mui/icons-material/Add";
import AddWarehouseUsers from "./AddWarehouseUsers";
import GetAuth from "../../../../../FirebaseAuth/GetAuth.js";

const WarehouseUsers = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState([]);
	const [open, setOpen] = React.useState(false);
	const [openEdit, setOpenEdit] = React.useState(false);
	const [id, setId] = React.useState();
	const handleOpen = (id) => {
		setOpenEdit(true);
		setId(id);
	};
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouseUsers`, {
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

	const renderDetailsButton = (params) => {
		return (
			<strong>
				{params.row?.status === "Active" ? (
					<RemoveDoneIcon
						className='iconBtn'
						sx={{ color: "#1565C0!important" }}
						onClick={() => {
							Swal.fire({
								title: "Do you want to Deactive this?",
								showCancelButton: true,
								confirmButtonText: "Yes",
							}).then((result) => {
								if (result.isConfirmed) {
									setSubmitting(true);
									axios
										.put(
											`${process.env.REACT_APP_API_PATH}/warehouseUserStatus/${params.row?._id}`,
											{
												status: "Inactive",
											},
											{
												headers: {
													Authorization: `Bearer ${token}`,
												},
											},
										)
										.then((response) => {
											setSubmitting(false);
											Swal.fire("", "Successfully Deactivated!", "success");
										})
										.catch((error) => {
											setSubmitting(false);
											console.log(error);
										});
								}
							});
						}}
					/>
				) : (
					<DoneAllIcon
						className='iconBtn'
						onClick={() => {
							Swal.fire({
								title: "Do you want to Active this?",
								showCancelButton: true,
								confirmButtonText: "Yes",
							}).then((result) => {
								if (result.isConfirmed) {
									setSubmitting(true);
									axios
										.put(
											`${process.env.REACT_APP_API_PATH}/warehouseUserStatus/${params.row?._id}`,
											{
												status: "Active",
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
						}}
					/>
				)}
				<EditIcon
					className='iconBtn'
					sx={{ color: "green!important" }}
					onClick={() => {
						handleOpen(params.row?._id);
					}}
				/>
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
										`${process.env.REACT_APP_API_PATH}/warehouseUser/${params.row?._id}`,
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
			</strong>
		);
	};

	const columns = [
		{
			field: "warehouseUserName",
			headerName: "Warehouse User Name",
			flex: 1,
		},
		{
			field: "warehouseUserEmail",
			headerName: "Warehous eUser Email",
			flex: 1,
		},
		{ field: "wareHouseName", headerName: "WareHouse Name", flex: 1 },
		{
			field: "warehouseUserContact",
			headerName: "Contact Number",
			flex: 1,
		},
		{ field: "status", headerName: "Status", flex: 1 },
		{ field: "_id", headerName: "Action", flex: 1, renderCell: renderDetailsButton, disableClickEventBubbling: true, },
	];
	return (
		<Box sx={{ mx: 4, pt: 2, pb: 5 }}>
			<Box
				sx={{
					px: 0.5,
					pb: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
					Warehouse Users
				</Typography>
				<Button
					onClick={() => setOpen(true)}
					variant='contained'
					color='success'
					sx={{ my: 0.7, fontWeight: "bold", px: 2.5 }}>
					Add New Warehouse User <AddIcon sx={{ ml: 1.5 }} />
				</Button>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center" }}>
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
			{open && (
				<AddWarehouseUsers
					open={open}
					setOpen={setOpen}
					id={id}
					token={token}
					setSubmitting={setSubmitting}
				/>
			)}
			{openEdit && (
				<EditWarehouseUsers
					open={openEdit}
					setOpen={setOpenEdit}
					id={id}
					token={token}
					setSubmitting={setSubmitting}
				/>
			)}
		</Box>
	);
};

export default WarehouseUsers;
