import {
	Button,
	CircularProgress,
	Grid,
	TextField,
	Backdrop,
	Typography,
	Autocomplete,
	Box,
} from "@mui/material";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useAPI } from "../../../../../ApiContext";
import EditArea from "./EditArea";

const Area = () => {
	const { user, loading, token } = useAPI();
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [districts, setDistricts] = useState();
	const [openEdit, setOpenEdit] = React.useState(false);
	const [id, setId] = React.useState();

	const handleOpen = (id) => {
		setOpenEdit(true);
		setId(id);
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/areas`, {
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

		axios
			.get(`${process.env.REACT_APP_API_PATH}/districts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setDistricts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, submitting]);
	const onSubmit = ({ area, district, areaType }) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/area`,
				{
					district,
					area,
					areaType,
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
											`${process.env.REACT_APP_API_PATH}/areaStatus/${params.row?._id}`,
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
						sx={{ color: "#df0f00!important" }}
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
											`${process.env.REACT_APP_API_PATH}/areaStatus/${params.row?._id}`,
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
										`${process.env.REACT_APP_API_PATH}/area/${params.row?._id}`,
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
		{ field: "district", headerName: "District Name", flex: 1 },
		{ field: "areaType", headerName: "Area Type", flex: 1 },
		{ field: "area", headerName: "Area Name", flex: 1 },
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
			<Box
				sx={{
					px: 0.5,
					pb: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
					Manage Area
				</Typography>
				<form
					onSubmit={handleSubmit(onSubmit)}
					style={{ display: "flex", flexGrow: "0.5", mx: 4 }}>
					<Autocomplete
						size='small'
						sx={{ my: 1, width: "100% !important" }}
						options={districts || []}
						getOptionLabel={(option) => option.district}
						style={{ width: 300 }}
						renderInput={(params) => (
							<TextField
								{...register("district", { required: true })}
								{...params}
								label='Districts Name'
								variant='outlined'
							/>
						)}
					/>
					<Autocomplete
						size='small'
						sx={{ my: 1, ml: 2, width: "100% !important" }}
						options={[
							{ areaType: "City" },
							{ areaType: "Sub City" },
							{ areaType: "Union Level" },
						]}
						getOptionLabel={(option) => option.areaType}
						style={{ width: 300 }}
						renderInput={(params) => (
							<TextField
								{...register("areaType", { required: true })}
								{...params}
								label='Area Type'
								variant='outlined'
							/>
						)}
					/>
					<TextField
						size='small'
						sx={{ my: 1, ml: 2 }}
						fullWidth
						required
						label='Area Name'
						{...register("area", { required: true })}
					/>
					<Button
						type='submit'
						variant='contained'
						color='success'
						sx={{ my: 1, fontWeight: "bold", px: 2.5, width: "50%", ml: 2 }}>
						Submit <DownloadDoneIcon sx={{ ml: 1.5 }} />
					</Button>
				</form>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center" }}>
				<Grid item xs={12} md={12}>
					{data && (
						<div style={{ height: 500, width: "100%" }} className='table'>
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
			{openEdit && (
				<EditArea
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

export default Area;
