import {
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Backdrop,
	Typography,
	Select,
	MenuItem,
	Box,
} from "@mui/material";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useAPI } from "../../../../ApiContext";

const Warehouses = () => {
	const { user, loading, token } = useAPI();
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [type, setType] = React.useState("");

	const handleChange = (event) => {
		setType(event.target.value);
	};
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouses`, {
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
	const onSubmit = ({ warehouseName, warehouseType }) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/warehouse`,
				{
					warehouseName,
					warehouseType,
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
				reset();
				Swal.fire("", "Successfully Added!", "success");
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	};
	const renderDetailsButton = (params) => {
		return (
			<strong>
				{params.row?.status === "Active" ? (
					<RemoveDoneIcon
						className='iconBtn'
						sx={{ color: "#1565C0!important", }}
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
											`${process.env.REACT_APP_API_PATH}/warehouseStatus/${params.row?._id}`,
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
											`${process.env.REACT_APP_API_PATH}/warehouseStatus/${params.row?._id}`,
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
											Swal.fire("", "Successfully Activated!", "success");
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
				<DeleteIcon
					className='iconBtn'
					sx={{ color: "#df0f00!important", }}
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
										`${process.env.REACT_APP_API_PATH}/warehouse/${params.row?._id}`,
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
		{ field: "warehouseName", headerName: "Warehouse Name", flex: 1 },
		{ field: "warehouseType", headerName: "Warehouse Type", flex: 1 },
		{ field: "status", headerName: "Status", flex: 1 },
		{
			field: "_id",
			headerName: "Action",
			flex: 1,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];
	return (
		<Box sx={{ mx: 4, pt: 2, pb: 5 }}>
			<Box sx={{ px: 0.5, pb: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C", }}>
					Manage Warehouse
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", mx: 4 }}>
					<TextField
						size='small'
						sx={{ mx: 0.7, width: 300 }}
						fullWidth
						required
						label='Warehouse Name'
						{...register("warehouseName", { required: true })}
					/>
					<Select
						sx={{ mx: 0.7, minWidth: 300 }}
						{...register("warehouseType", { required: true })}
						size='small'
						value={type}
						onChange={handleChange}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}>
						<MenuItem value=''>
							<em>Select Type</em>
						</MenuItem>
						<MenuItem value={"Division"}>Division</MenuItem>
						<MenuItem value={"District"}>District</MenuItem>
					</Select>
					<Button
						type='submit'
						variant='contained'
						color='success'
						sx={{ mx: 0.7, fontWeight: "bold", px: 3, width: "20%" }}>
						Add <DownloadDoneIcon sx={{ ml: 1 }} />
					</Button>
				</form>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", mt: 1 }}>
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

export default Warehouses;
