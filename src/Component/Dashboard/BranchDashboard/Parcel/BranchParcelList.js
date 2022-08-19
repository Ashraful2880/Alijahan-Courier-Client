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
	Autocomplete,
	TextField,
	Button,
} from "@mui/material";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAuth from "../../../../FirebaseAuth/GetAuth";

const BranchParcelList = () => {
	const email = "branch@gmail.com";
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [status, setStatus] = useState("");
	const [riders, setRiders] = useState();
	const [branch, setBranch] = useState();
	const [Warehouse, setWarehouse] = useState();

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
	}, [token, submitting]);

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/senderBranchOrders/${branch?.branchName}`,
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
	const changeStatus = (event, id) => {
		Swal.fire({
			title: "Are You Sure?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmitting(true);
				if (event.target.value === "Delivered To Warehouse") {
					axios
						.put(
							`${process.env.REACT_APP_API_PATH}/merchantorderWarehouse/${id}`,
							{
								warehouseInfo: Warehouse,
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
							Swal.fire("", "Successfully Delivered!", "success");
						})
						.catch((error) => {
							setSubmitting(false);
							console.log(error);
						});
				} else {
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
			}
		});
	};

	const [selectionModel, setSelectionModel] = React.useState();
	const changeRider = (event, newValue, id) => {
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
							`${process.env.REACT_APP_API_PATH}/merchantorderRiderCollect/${item}`,
							{
								collectRiderInfo: newValue,
								status: "Assigned for Pickup",
							},
							{
								headers: {
									Authorization: `Bearer ${token}`,
								},
							},
						)
						.then((response) => {
							setSubmitting(false);
							Swal.fire("", "Successfully Assigned!", "success");
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
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				{((params.row?.status === "Assigned for Pickup" &&
					!params.row?.collectRiderInfo?.riderName) ||
					params.row?.status === "Cancelled by Pickup Rider") && (
					<Autocomplete
						onChange={(event, newValue) => {
							changeRider(event, newValue, params.row?._id);
						}}
						size='small'
						sx={{ my: 0.5, width: 200 }}
						options={riders}
						getOptionLabel={(option) => option.riderName}
						renderInput={(params) => (
							<TextField {...params} label='Select Rider' variant='outlined' />
						)}
					/>
				)}
				<FormControl sx={{ m: 1 }}>
					<Select
						size='small'
						value={status}
						onChange={(event) => {
							changeStatus(event, params.row?._id);
							setStatus(event.target.value);
						}}
						displayEmpty
						inputProps={{ "aria-label": "Without label" }}>
						{params.row?.status === "Pending" && (
							<MenuItem value={"Accepted"}>Accept</MenuItem>
						)}
						{params.row?.status === "Accepted" && (
							<MenuItem value={"Assigned for Pickup"}>
								Assign for Pickup
							</MenuItem>
						)}
						{params.row?.status === "Delivered To Branch By Pickup Rider" && (
							<MenuItem value={"Received in Pickup Branch"}>
								Received in Pickup Branch
							</MenuItem>
						)}
						{params.row?.status === "Received in Pickup Branch" && (
							<MenuItem value={"Delivered To Warehouse"}>
								Deliver To Warehouse
							</MenuItem>
						)}
					</Select>
				</FormControl>

				{/* 	<DeleteIcon
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
			width: 300,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];

	const [selectedStatus, setSelectedStatus] = useState("All");
	const filterData = data?.filter((item) => item?.status === selectedStatus);

	console.log(selectedStatus === "All" ? data : filterData);
	console.log(selectionModel);
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
			</Box>
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					All
				</Button>
				<Button
					className={selectedStatus === "Pending" ? "active" : ""}
					onClick={() => setSelectedStatus("Pending")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Pending
				</Button>
				<Button
					className={selectedStatus === "Accepted" ? "active" : ""}
					onClick={() => setSelectedStatus("Accepted")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Accepted
				</Button>
				<Button
					className={selectedStatus === "Assigned for Pickup" ? "active" : ""}
					onClick={() => setSelectedStatus("Assigned for Pickup")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Assigned
				</Button>
				<Button
					className={
						selectedStatus === "Cancelled by Pickup Rider" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Cancelled by Pickup Rider")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Cancelled by Rider
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Branch By Pickup Rider"
							? "active"
							: ""
					}
					onClick={() =>
						setSelectedStatus("Delivered To Branch By Pickup Rider")
					}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Receive From Rider
				</Button>
				<Button
					className={
						selectedStatus === "Received in Pickup Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Received in Pickup Branch")}
					sx={{ my: 0.7, fontWeight: "bold", mx: 1, color: "gray" }}>
					Received From Rider
				</Button>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{selectedStatus === "Assigned for Pickup" ||
						(selectedStatus === "Cancelled by Pickup Rider" && (
							<Autocomplete
								onChange={(event, newValue) => {
									changeRider(event, newValue);
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
						))}
				</Grid>
				<Grid item xs={12} md={12}>
					{filterData && (
						<div style={{ height: 400, width: "100%" }} className='table'>
							<DataGrid
								rows={selectedStatus === "All" ? data : filterData}
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
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
				open={submitting || !data}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default BranchParcelList;
