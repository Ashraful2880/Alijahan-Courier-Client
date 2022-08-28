import { Backdrop, Button, CircularProgress, Modal, Typography, } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";

const BarcodePrint = ({ data, openBarCode, handleCloseBarCode }) => {
	let ref2 = useRef();
	const pageStyle = "@page { size: 50.6mm 76.8mm }"
	const [submitting, setSubmitting] = useState(false);

	return (
		<>
			{!submitting ? (
				<Modal
					keepMounted
					open={openBarCode}
					onClose={handleCloseBarCode}
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
							trigger={() => (
								<Button variant='contained' color='success'>
									Yes
								</Button>
							)}
							onAfterPrint={() => {
								setSubmitting(false);
								handleCloseBarCode();
							}}
							content={() => ref2}
							pageStyle={pageStyle}
						/>

						<Box sx={{ visibility: "hidden !important" }}>
							<Box ref={(el) => (ref2 = el)} style={{ maxWidth: "50.5mm", maxHeight: "76.7mm", margin: "auto" }}>
								{data?.map((order) => (
									<Box
										sx={{ border: "1px solid black", }}>
										<Typography
											variant='h4'
											sx={{ fontWeight: "bold", color: "#1E793C", textAlign: "center", fontSize: "10px", lineHeight: "10px" }}>
											Alijahan Courier Service
										</Typography>
										<Box sx={{ textAlign: "center" }}>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px", }}>
												Customer Name:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.receiverInfo?.receiverName}
												</span>
											</Typography>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px", }} >
												Customer Number:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.receiverInfo?.receiverNumber}
												</span>
											</Typography>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px" }}>
												Area:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.receiverInfo?.receiverBranchArea}(
													{order?.receiverInfo?.receiverBranchDistrict})
												</span>
											</Typography>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px" }}>
												Details Address:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.receiverInfo?.receiverAddress}
												</span>
											</Typography>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px" }}>
												Cash:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.orderSummaray?.totalAmountWithCharges} /-
												</span>
											</Typography>
										</Box>
										<Barcode value={order?.orderId} width={0.6} height={50} fontSize={14} displayValue={true} />
										<Box sx={{ textAlign: "center" }}>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px" }}>
												Merchant Name:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.marchentInfo?.merchantName}
												</span>
											</Typography>
											<Typography variant='h6' component='h6' style={{ fontSize: "10px", lineHeight: "10px" }}>
												Merchant Number:{" "}
												<span style={{ fontWeight: "bold" }}>
													{order?.marchentInfo?.merchantContact}
												</span>
											</Typography>
										</Box>
									</Box>
								))}
							</Box>
						</Box>
					</Box>
				</Modal>
			) : (
				<Backdrop sx={{ color: "#fff", zIndex: 999 }} open={true}>
					<CircularProgress color='inherit' />
				</Backdrop>
			)
			}
		</>
	);
};

export default BarcodePrint;
