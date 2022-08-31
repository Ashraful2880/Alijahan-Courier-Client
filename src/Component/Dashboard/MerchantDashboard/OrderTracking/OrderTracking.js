import React, { useEffect, useState } from "react";
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	TextField,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import Tracking from "./Tracking";
import axios from "axios";
import GetAuth from "../../../../FirebaseAuth/GetAuth";
import Swal from "sweetalert2";
import { idID } from "@mui/material/locale";

const OrderTracking = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [show, setShow] = useState(false);
	const [data, setData] = useState();
	const [id, setId] = useState();
	const submit = () => {
		setSubmitting(true);
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchantordersbyOrderId/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setSubmitting(false);
				if (response.data === "N/A") {
					setShow(false);
					Swal.fire("", "Not Found!", "error");
				}
				if (response.data?.status) {
					setData(response.data);
					setShow(true);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
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
					Order Tracking
				</Typography>
			</Box>
			{show ? (
				<Tracking data={data} setShow={setShow} />
			) : (
				<Box>
					<form>
						<Typography
							component='p'
							sx={{ fontSize: "20px", fontWeight: "bold" }}>
							Track Your Order
						</Typography>
						<Box
							sx={{
								width: { sx: "100%", sm: "100%", md: "80%", lg: "30%" },
								margin: "auto",
							}}>
							{/* <Box sx={{ width: "100%", marginY: "10px" }}>
							<TextField
								sx={{ width: "100%" }}
								helperText='Parcel Invoice Barcode'
								label='Enter Parcel Invoice Barcode'
								{...register("invoice", {
									required: true,
								})}
							/>
							{errors?.invoice?.type === "required" && (
								<p
									style={{
										color: "red",
										fontSize: "14px",
										marginTop: "-15px",
									}}>
									This field is required
								</p>
							)}
						</Box> */}
							<Box sx={{ width: "100%", marginY: "10px" }}>
								<TextField
									sx={{ width: "100%" }}
									helperText='Merchant Order ID'
									label='Enter Merchant Order ID'
									onChange={(e) => setId(e.target.value)}
								/>
							</Box>
							<Box sx={{ marginY: "10px", display: "flex" }}>
								<Button
									onClick={() => submit()}
									variant='contained'
									color='success'
									sx={{ padding: "10px 0px", width: "100%", fontSize: "15px" }}>
									<FindReplaceIcon sx={{ mr: 1 }} /> Search
								</Button>
							</Box>
						</Box>
					</form>
				</Box>
			)}
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 999 }}
				open={submitting}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default OrderTracking;