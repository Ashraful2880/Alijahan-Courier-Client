import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../App.css";
import GetAuth from "../../../FirebaseAuth/GetAuth";
import axios from "axios";

const MerchantProfile = () => {
	const { user, loading, token } = GetAuth();
	const [merchant, setMerchant] = useState([]);
	const [currentUser, setCurrentUser] = React.useState("")

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchants/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setMerchant(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/userByEmail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setCurrentUser(response?.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token, user?.email]);

	return (
		<Box sx={{ px: 4, pt: 2, pb: 5, background: "#f8f8f8", height: "93vh" }}>
			<Box
				sx={{
					px: 2.5,
					pb: 1,
					mb: 1,
					display: "flex",
					alignItems: "center",
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
					Welcome Back! <span style={{ color: "green" }}>{currentUser?.userRole}</span>
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
									{merchant?.id}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Email
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantEmail}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Number
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantContact}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Address
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantAddress}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Business Address
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantBusinessAddress}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Branch Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantBranchName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Company Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantCompanyName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Area
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.merchantArea}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Status
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{merchant?.status}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default MerchantProfile;
