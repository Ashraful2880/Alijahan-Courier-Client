import {
	Button,
	CircularProgress,
	Container,
	Grid,
	TextField,
	Backdrop,
	Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
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
import EditBranches from "./EditBranches";
import GetAuth from "../../../../FirebaseAuth/GetAuth";

const Branches = () => {
	const { user, loading, token } = GetAuth();
	const { register, handleSubmit, reset } = useForm();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState();
	const handleOpen = (id) => {
		setOpen(true);
		setId(id);
	};
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branches`, {
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
	const onSubmit = ({ decription, gradeName }) => {
		setSubmitting(true);
		axios
			.post(
				`${process.env.REACT_APP_API_PATH}/grade`,
				{
					decription,
					gradeName,
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
											`${process.env.REACT_APP_API_PATH}/branchStatus/${params.row?._id}`,
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
											`${process.env.REACT_APP_API_PATH}/branchStatus/${params.row?._id}`,
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
				<EditIcon
					className='iconBtn'
					onClick={() => {
						handleOpen(params.row?._id);
					}}
				/>
				<DeleteIcon
					className='iconBtn'
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
										`${process.env.REACT_APP_API_PATH}/grade/${params.row?._id}`,
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
		{ field: "gradeName", headerName: "Grade Name", flex: 1 },
		{ field: "decription", headerName: "Decription", flex: 1 },
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
		<Container sx={{ py: 1 }}>
			<Typography variant='h5' sx={{ fontWeight: "bold" }}>
				Branch
			</Typography>
			<Grid container spacing={1} sx={{ justifyContent: "center" }}>
				<Grid item xs={12} md={6}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							size='small'
							sx={{ my: 0.7 }}
							fullWidth
							required
							label='Grade Name'
							{...register("gradeName", { required: true })}
						/>
						<TextField
							size='small'
							sx={{ my: 0.7 }}
							fullWidth
							multiline
							rows={1}
							required
							label='Description'
							{...register("decription", { required: true })}
						/>
						<Button
							type='submit'
							variant='contained'
							className='button'
							sx={{ my: 0.7, fontWeight: "bold", px: 2.5 }}>
							Submit <SendIcon sx={{ ml: 1.5 }} />
						</Button>
					</form>
				</Grid>
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
			{open && (
				<EditBranches
					open={open}
					setOpen={setOpen}
					id={id}
					token={token}
					setSubmitting={setSubmitting}
				/>
			)}
		</Container>
	);
};

export default Branches;
