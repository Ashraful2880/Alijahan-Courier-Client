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
		<Box sx={{ mx: 4, pt: 1, pb: 5 }}>
			{show ? (
				<Tracking data={data} setShow={setShow} />
			) : (
				<Box sx={{ p: 4 }} elevation={3}>
					<h2
						style={{
							marginBottom: "25px",
							fontFamily: "Montserrat, sans-serif",
							fontSize: 30,
							textAlign: "center",
							fontWeight: "bold",
							color: "#08a74c",
						}}>
						Track Your Consignment
					</h2>
					<Box style={{ marginTop: "10px" }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<input
								type='text'
								placeholder='Enter Merchant Order ID'
								className='tracking_input'
								onChange={(e) => setId(e.target.value)}
								style={{ width: "600px" }}
							/>
							<button onClick={() => submit()} className='searchBtn'>
								<SearchIcon
									className='searchIcon'
									style={{ fontSize: "26px" }}
								/>
							</button>
						</Box>
					</Box>
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
