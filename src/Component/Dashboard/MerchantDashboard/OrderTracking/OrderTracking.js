import React, { useEffect, useState } from "react";
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	Paper,
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
import SearchIcon from "@mui/icons-material/Search";

const OrderTracking = () => {
	const { user, loading, token } = GetAuth();
	const [submitting, setSubmitting] = useState(false);
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);
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
					<Paper sx={{ p: 4 }} elevation={3}>
						<h2
							style={{
								marginTop: 0,
								fontFamily: "Montserrat, sans-serif",
								fontSize: 30,
								textAlign: "center",
								fontWeight: "bold",
							}}>
							Track Your Consignment
						</h2>
						<form style={{ marginTop: "10px" }}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<input
									type='text'
									placeholder='Enter Your Tracking Code'
									className='tracking_input'
									onChange={(e) => setId(e.target.value)}
									style={{ width: { lg: "50%", md: "65%", sm: "100%" } }}
								/>
								<button onClick={() => submit()} className='searchBtn'>
									<SearchIcon
										className='searchIcon'
										style={{ fontSize: "26px" }}
									/>
								</button>
							</Box>
						</form>
					</Paper>
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
