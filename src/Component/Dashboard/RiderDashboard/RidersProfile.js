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

const RidersProfile = () => {
	const { user, loading, token } = GetAuth();
	const [riders, setRiders] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/riderByEmail/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setRiders(response.data);
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
					Riders Information
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
									{riders?.id}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Name
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderName}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Email
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderEmail}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Number
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderContact}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Address
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderAddress}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Date Of Birth
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderDOB}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider NID
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderNID}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider License Number
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.riderLicense}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Rider Status
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									{riders?.status}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default RidersProfile;
