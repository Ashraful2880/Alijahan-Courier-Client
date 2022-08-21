import React from "react";
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
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import GetAuth from "./../../../../FirebaseAuth/GetAuth";
import WarehouseParcelListFiltered from "./WarehouseParcelListFiltered";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

const WarehouseParcelList = () => {
	const email = "warehouse2@gmail.com";
	const { user, loading, token } = GetAuth();
	const [data, setData] = useState();
	const [opens, setOpens] = React.useState(false);
	const [parcelData, setParcelData] = useState();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/warehouseOrders/${email}`, {
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

	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<AspectRatioIcon
					onClick={() => {
						setOpens(true);
						setParcelData(params.row?.marchentInfo.merchantName);
					}}
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
				return params.row.marchentInfo.merchantName;
			},
			flex: 1,
		},
		{
			field: "merchantBusinessAddress",
			headerName: "Marchant Address",
			renderCell: (params) => {
				return `${params.row.marchentInfo.merchantBusinessAddress}(${params.row.marchentInfo.merchantArea})`;
			},
			flex: 1,
		},
		{
			field: "receiverNumber",
			headerName: "Phone Number",
			renderCell: (params) => {
				return params.row.marchentInfo.merchantContact;
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
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{filterData && (
						<div style={{ height: 400, width: "100%" }} className='table'>
							<DataGrid
								rows={filteredByMarchant}
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
				open={!data}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default WarehouseParcelList;
