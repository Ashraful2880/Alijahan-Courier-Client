import React, { useRef, useState } from "react";
import { Backdrop, Button, CircularProgress, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import ReactToPrint from "react-to-print";

const Print = ({ data, openPrint, handleClosePrint }) => {
	const date = new Date();
	let ref = useRef();
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
							content={() => ref}
							pageStyle='print'
						/>

						<Box sx={{ visibility: "hidden !important" }}>
							<Box sx={{ my: 2 }} ref={(el) => (ref = el)}>
								<Box
									sx={{
										pb: 2,
										margin: "auto",
										textAlign: "center",
									}}>
									<Typography
										variant='h5'
										sx={{ fontWeight: "bold", color: "#166534" }}>
										Alijahan Courier Service
									</Typography>
									<Typography component='div' variant='p'>
										89/123 Maniknagar,R.K Mission Road,Dhaka-1203
									</Typography>
									<Typography component='div' variant='p'>
										Email:alijahancourier@gmail.com
									</Typography>
									<Typography component='div' variant='p'>
										www.alijahan.com
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										px: 2,
										mb: 1,
									}}>
									<Box>
										<Typography
											variant='p'
											sx={{ fontSize: "17px", fontWeight: 600 }}>
											Total Order: {data?.length}
										</Typography>
									</Box>
									<Box>
										<Typography
											variant='p'
											sx={{ fontSize: "17px", fontWeight: 600 }}>
											Printed Date: {date.getDate()}-{date.getMonth()}-
											{date.getFullYear()}
										</Typography>
									</Box>
								</Box>
								{/* Print Table Component */}
								<Box sx={{ position: "relative", mb: 2 }}>
									<img
										src='https://alijahan-courier.netlify.app/static/media/Logo.9068b4f56d43d41f4abd.png'
										alt='Main Logo'
										className='imagePosition'
									/>
									<TableContainer
										component='div'
										sx={{ border: "1px solid #d9d9d9", borderRadius: "10px" }}>
										<Table sx={{ minWidth: 650 }} aria-label='simple table'>
											<TableHead>
												<TableRow>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}>
														ID
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}>
														Order Info
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}>
														Merchant
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}>
														Contact Name
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Contact Number
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Contact Address
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Area
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Amount (BDT)
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Collected (BDT)
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Status
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Payment Status
													</TableCell>
													<TableCell
														sx={{
															fontWeight: "bold",
															borderRight: "1px solid #d9d9d9",
														}}
														align='center'>
														Signature
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{data?.map((item) => (
													<TableRow key={item?._id} sx={{ border: 0 }}>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															component='th'
															scope='row'>
															{item?.orderId}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.bookingDate}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.marchentInfo?.merchantCompanyName}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.marchentInfo?.merchantName}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.marchentInfo?.merchantContact}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.marchentInfo?.merchantBusinessAddress}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.marchentInfo?.merchantArea}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.orderSummaray?.totalAmountWithCharges}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.orderSummaray?.totalReceive}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.status}
														</TableCell>
														<TableCell
															sx={{ borderRight: "1px solid #d9d9d9" }}
															align='center'>
															{item?.paymentCollectionDetails?.collectionStatus}
														</TableCell>
														<TableCell
															sx={{
																borderRight: "1px solid #d9d9d9",
																width: "9%",
															}}
															align='center'></TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Box>
								<Typography variant='p' sx={{ fontSize: "13px" }}>
									This is an Auto Generated Report of{" "}
									<span style={{ color: "green", fontStyle: "italic" }}>
										Alijahan Courier
									</span>
								</Typography>
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

export default Print;
