import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GetAuth from "../../../FirebaseAuth/GetAuth";
import axios from "axios";

const WarehouseProfile = () => {
	const { user, loading, token } = GetAuth();
	const [warehouse, setwarehouse] = useState();

	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_API_PATH}/warehouseUserByEmail/${user?.email}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setwarehouse(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, user?.email]);

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
					Profile
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "50%",
					alignItems: "center",
					justifyContent: "center",
					margin: "auto",
				}}>
				<Typography
					variant='h5'
					sx={{ fontWeight: "bold", marginBottom: "15px" }}>
					Warehouse Information
				</Typography>
				<TableContainer
					component={Paper}
					style={{ marginTop: "10px", padding: "0px 20px" }}>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell
									component='th'
									scope='row'
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}>
									ID
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.id}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.wareHouseName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse District
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.warehouseDistrict}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse User Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.warehouseUserName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse User Email
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.warehouseUserEmail}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse User Contact
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.warehouseUserContact}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse User Address
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.warehouseUserAddress}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Warehouse Status
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{warehouse?.status}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default WarehouseProfile;
