import React from "react";
import { useState, useEffect } from "react";
import {
	CircularProgress,
	Grid,
	Backdrop,
	Typography,
	Box,
	Button,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import GetAuth from "./../../../../FirebaseAuth/GetAuth";
import WarehouseParcelListFiltered from "./WarehouseParcelListFiltered";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const WarehouseParcelList = () => {
	const { user, loading, token } = GetAuth();
	const [data, setData] = useState();
	const [submitting, setSubmitting] = useState(false);
	const [opens, setOpens] = React.useState(false);
	const [parcelData, setParcelData] = useState();

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
	}, [token, opens, submitting]);

	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<AspectRatioIcon
					onClick={() => {
						setOpens(true);
						setParcelData(params.row?.marchentInfo.merchantName);
					}}
					sx={{ ml: 1.5, color: "#08A74C", cursor: "pointer" }}
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
			field: "merchantBusinessAddress",
			headerName: "Marchant Address",
			renderCell: (params) => {
				return `${params?.row?.marchentInfo?.merchantBusinessAddress}(${params.row.marchentInfo.merchantArea})`;
			},
			flex: 1,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params?.row?.marchentInfo?.merchantContact;
			},
			flex: 1,
		},
		{
			field: "_id",
			headerName: "Action",
			flex: 1,
			renderCell: renderDetailsButton,
			disableClickEventBubbling: true,
		},
	];

	const [selectedStatus, setSelectedStatus] = useState("All");
	const filterData = data?.filter((item) => item?.status === selectedStatus);
	const filteredByMarchant = (
		selectedStatus === "All" ? data : filterData
	)?.filter(
		(v, i, a) =>
			a.findIndex(
				(t) => t.marchentInfo.merchantName === v.marchentInfo.merchantName,
			) === i,
	);
	const [id, setId] = useState();
	useEffect(() => {
		const find = data?.find((parcel) => parcel?.orderId === id);
		if (id === find?.orderId && find?.status === "Delivered To Warehouse") {
			console.log("Found");
			axios
				.put(
					`${process.env.REACT_APP_API_PATH}/merchantorderStatus/${id}`,
					{
						status: "Parcel Received On Warehouse",
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
				})
				.catch((error) => {
					setSubmitting(false);
					console.log(error);
				});
		} else {
			console.log("Not Found");
		}
	}, [data, id, token]);

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
				<input type='text' onChange={(e) => setId(e.target.value)} />
			</Box>
			<Box sx={{ display: "flex" }}>
				<Button
					className={selectedStatus === "All" ? "active" : ""}
					onClick={() => setSelectedStatus("All")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					All
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Warehouse" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Warehouse")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Pending
				</Button>
				<Button
					className={
						selectedStatus === "Parcel Received On Warehouse" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Parcel Received On Warehouse")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Received
				</Button>
				<Button
					className={
						selectedStatus === "Delivered To Receiver Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Delivered To Receiver Branch")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Delivered To Receiver Branch
				</Button>
				<Button
					className={
						selectedStatus === "Sending Returned Parcel to Warehouse"
							? "active"
							: ""
					}
					onClick={() =>
						setSelectedStatus("Sending Returned Parcel to Warehouse")
					}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Pending Returned Parcel
				</Button>
				<Button
					className={
						selectedStatus === "Returned Parcel Received in Warehouse"
							? "active"
							: ""
					}
					onClick={() =>
						setSelectedStatus("Returned Parcel Received in Warehouse")
					}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					All Returned Parcel
				</Button>
				<Button
					className={
						selectedStatus === "Sending Returned Parcel to Branch"
							? "active"
							: ""
					}
					onClick={() => setSelectedStatus("Sending Returned Parcel to Branch")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Returned to Branch
				</Button>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{filterData && (
						<div style={{ height: "80vh", width: "100%" }} className='table'>
							<DataGrid
								rows={filteredByMarchant}
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
			</Grid>{" "}
			<WarehouseParcelListFiltered
				opens={opens}
				setOpens={setOpens}
				marchantName={parcelData}
				allParcels={selectedStatus === "All" ? data : filterData}
				selectedStatus={selectedStatus}
			/>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
				open={!data || submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default WarehouseParcelList;
