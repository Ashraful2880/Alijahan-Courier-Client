import React from "react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../App.css";

const style = {
	backgroundImage:
		"url(https://alijahan.com/static/media/sliderimg.55e002402bf10d0cacd6.png)",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	backgroundAttachment: "fixed",
};
const MerchantProfile = () => {
	return (
		<Box
			sx={{ px: 4, pt: 2, pb: 5, background: "#f8f8f8", height: "93vh" }}
			style={style}>
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
					Welcome Back! <span style={{ color: "green" }}>Mr John</span>
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
									M-0014
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
									Jahidul Islam Nahid
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
									dhamaka@mettroexpress.com
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
									01709815688
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
									50, Mohakhali, Dhaka-1212
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant District
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									Dhaka
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Merchant Thana/Upazila
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									Mohakhali
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
									Mohakhali
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									component='th'
									scope='row'>
									Cash On Delivery
								</TableCell>
								<TableCell
									sx={{ fontSize: "15px", letterSpacing: "0.2px" }}
									align='right'>
									0%
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
