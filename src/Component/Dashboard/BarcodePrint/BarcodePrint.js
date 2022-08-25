import {
	Backdrop,
	Button,
	CircularProgress,
	Modal,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Barcode from 'react-barcode';

const BarcodePrint = ({ data, openPrint, handleClosePrint }) => {

	let ref2 = useRef();

	const [submitting, setSubmitting] = useState(false);
	return (
		<>
			{!submitting ? (
				<Modal
					keepMounted
					open={openPrint}
					onClose={handleClosePrint}
					aria-labelledby='keep-mounted-modal-title'
					aria-describedby='keep-mounted-modal-description'>
					<Box
						sx={{
							position: "absolute",
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: 300,
							height: 150,
							bgcolor: "white",
							borderRadius: 3,
							boxShadow: 24,
							p: 4,
						}}>
						<Typography
							id='keep-mounted-modal-title'
							variant='p'
							component='p'
							sx={{ fontSize: "20px", mb: 3 }}>
							Do You Want to Print?
						</Typography>
						<ReactToPrint
							onBeforePrint={() => setSubmitting(true)}
							trigger={() =>
								<Button variant="contained" color="success">
									Yes
								</Button>
							}
							onAfterPrint={() => {
								setSubmitting(false);
								handleClosePrint();
							}}
							content={() => ref2}
							pageStyle='print'
						/>

						<Box sx={{ visibility: "hidden !important" }}>
							<Box sx={{ width: "50%", margin: "auto", border: "1px solid black", p: 5 }}>
								<Typography variant="h5" component="h5" sx={{ fontWeight: "bold", color: "#1E793C", pb: 3 }}>
									Alijahan Courier Service
								</Typography>
								<Box sx={{ textAlign: "left" }}>
									<Typography variant="h6" component="h6">
										Customer Name: <span style={{ fontWeight: "bold" }}> Faria Tabassum Nijhu</span>
									</Typography>
									<Typography variant="h6" component="h6">
										Customer Number: <span style={{ fontWeight: "bold" }}> +88 01888888888</span>
									</Typography>
									<Typography variant="h6" component="h6">
										Area: <span style={{ fontWeight: "bold" }}>Dhaka (Wari)</span>
									</Typography>
									<Typography variant="h6" component="h6">
										Details Address: <span style={{ fontWeight: "bold" }}>
											Dokan no 119, 1st floor,Gias Garden Books Complex,37 Banglabazar,Dhaka 1100
										</span>
									</Typography>
									<Box sx={{ display: "flex", alignItems: "center" }}>
										<Typography variant="h6" component="h6">
											Cash: <span style={{ fontWeight: "bold" }}>
												1020 /-
											</span>
										</Typography>
										<Box sx={{ display: "flex", alignItems: "center" }}>
											<Typography variant="h6" component="h6" sx={{ ml: 5 }}>
												Order ID:
											</Typography>
											<Barcode value="barcode-example" />
										</Box>
									</Box>
								</Box>
								<Box sx={{ textAlign: "left" }}>
									<Typography variant="h6" component="h6">
										Merchant Name: <span style={{ fontWeight: "bold" }}>
											Tamanna Mirza
										</span>
									</Typography>
									<Typography variant="h6" component="h6">
										Merchant Number: <span style={{ fontWeight: "bold" }}>
											+88 01888888888
										</span>
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Modal>
			) : (
				<Backdrop sx={{ color: "#fff", zIndex: 999 }} open={true}>
					<CircularProgress color='inherit' />
				</Backdrop>
			)}
		</>
	);
};

export default BarcodePrint;