import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress, Grid, Backdrop, Typography, Box, Button, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PaymentsIcon from "@mui/icons-material/Payments";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import BranchAccountsFiltered from "./BranchAccountsFiltered";

const BranchAccounts = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [data, setData] = useState();
	const [branch, setBranch] = useState();
	const [opens, setOpens] = React.useState(false);
	const [parcelData, setParcelData] = useState();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branchbyemail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setBranch(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/receiverBranchOrders/${branch?.branchName}`,
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
	}, [token, branch]);

	const renderDetailsButton = (params) => {
		return (
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<AspectRatioIcon
					onClick={() => {
						setOpens(true);
						setParcelData(params.row?.marchentInfo.merchantName);
					}}
					sx={{ ml: 1.5, color: "green", cursor: "pointer" }} />
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
			field: "merchantContact",
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
	const filterData = data?.filter(
		(item) =>
			item?.paymentCollectionDetails?.collectionStatus === selectedStatus,
	);

	return (
		<Box sx={{ mx: 4, pt: 2, pb: 5 }}>
			<Box
				sx={{ px: 2.5, pb: 1, display: "flex", alignItems: "center", justifyContent: "space-between", }}>
				<Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
					Accounts
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
						selectedStatus === "Sending Money To Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Sending Money To Branch")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Incomming Money
				</Button>
				<Button
					className={
						selectedStatus === "Money Received In Branch" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Money Received In Branch")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Money Received
				</Button>
				<Button
					className={
						selectedStatus === "Sending Money To Accounts" ? "active" : ""
					}
					onClick={() => setSelectedStatus("Sending Money To Accounts")}
					sx={{ my: 0.7, fontWeight: "bold", px: 1.5, color: "gray" }}>
					Send Money
				</Button>
			</Box>
			<Grid container spacing={1} sx={{ justifyContent: "center", px: 2 }}>
				<Grid item xs={12} md={12}>
					{data && (
						<div style={{ height: 400, width: "100%" }} className='table'>
							<DataGrid
								rows={selectedStatus === "All" ? data : filterData}
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
			<BranchAccountsFiltered
				opens={opens}
				setOpens={setOpens}
				marchantName={parcelData}
				allParcels={selectedStatus === "All" ? data : filterData}
				selectedStatus={selectedStatus}
			/>
		</Box>
	);
};

export default BranchAccounts;
