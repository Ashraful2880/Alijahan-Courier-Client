import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
	Button,
	TextField,
	Backdrop,
	Typography,
	CircularProgress,
	Autocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	boxShadow: 24,
	p: 2,
	width: { md: "50vw", sm: "70vw", xs: "90vw" },
	maxHeight: "90vh",
	overflowX: "hidden",
	overflowY: "scroll",
	borderRadius: 3,
	textAlign: "center",
	backgroundColor: "white",
};

const EditMerchants = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			merchantName: "",
			merchantCompanyName: "",
			merchantAddress: "",
			merchantBusinessAddress: "",
			merchantDistrict: "",
			merchantThana: "",
			merchantArea: "",
			merchantBranchName: "",
			merchantContact: "",
			merchantEmail: "",
			merchantPass: "",
			merchantImage: "",
			merchantFacebook: "",
			merchantWebsite: "",
			merchatCODPercentage: "",
			merchantServChargeInsideCity: "",
			merchanttServChargeSubCity: "",
			merchanttServChargeOutsideCity: "",
			merchantRetChargeInsideCity: "",
			merchantRetChargeSubCity: "",
			merchantRetChargeOutsideCity: "",
			bankAccName: "",
			bankAccNumber: "",
			bankName: "",
			bkashAccNumber: "",
			nagadAccNumber: "",
			rocketAccNumber: "",
			nidCard: "",
			tradeLicense: "",
			tinCertificate: "",
		},
	});
	const [thanas, setThanas] = useState();
	const [areas, setAreas] = useState();
	const [districts, setDistricts] = useState([]);
	const [selectedDistricts, setSelectedDistricts] = useState("");
	const [selectedThana, setSelectedThana] = useState("");

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/thanas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setThanas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/areas`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setAreas(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		axios
			.get(`${process.env.REACT_APP_API_PATH}/districts`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				setDistricts(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [token]);
	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/merchant/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				reset(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id, reset, token]);
	const onSubmit = ({
		merchantName,
		merchantCompanyName,
		merchantAddress,
		merchantBusinessAddress,
		merchantDistrict,
		merchantThana,
		merchantArea,
		merchantBranchName,
		merchantContact,
		merchantEmail,
		merchantPass,
		merchantImage,
		merchantFacebook,
		merchantWebsite,
		merchatCODPercentage,
		merchantServChargeInsideCity,
		merchanttServChargeSubCity,
		merchanttServChargeOutsideCity,
		merchantRetChargeInsideCity,
		merchantRetChargeSubCity,
		merchantRetChargeOutsideCity,
		bankAccName,
		bankAccNumber,
		bankName,
		bkashAccNumber,
		nagadAccNumber,
		rocketAccNumber,
		nidCard,
		tradeLicense,
		tinCertificate,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/merchant/${id}`,
				{
					merchantName,
					merchantCompanyName,
					merchantAddress,
					merchantBusinessAddress,
					merchantDistrict,
					merchantThana,
					merchantArea,
					merchantBranchName,
					merchantContact,
					merchantEmail,
					merchantPass,
					merchantImage,
					merchantFacebook,
					merchantWebsite,
					merchatCODPercentage,
					merchantServChargeInsideCity,
					merchanttServChargeSubCity,
					merchanttServChargeOutsideCity,
					merchantRetChargeInsideCity,
					merchantRetChargeSubCity,
					merchantRetChargeOutsideCity,
					bankAccName,
					bankAccNumber,
					bankName,
					bkashAccNumber,
					nagadAccNumber,
					rocketAccNumber,
					nidCard,
					tradeLicense,
					tinCertificate,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((response) => {
				setSubmitting(false);
				setOpen(false);
				Swal.fire("", "Successfully Updated!", "success");
			})
			.catch((error) => {
				setSubmitting(false);
				console.log(error);
			});
	};

	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<CancelIcon
							onClick={() => setOpen(false)}
							className='textColor'
							sx={{
								position: "fixed",
								top: "5px",
								right: "5px",
								cursor: "pointer",
							}}
						/>
						{data ? (
							<>
								<Typography variant='h5' sx={{ fontWeight: "bold", mb: 1.5 }}>
									Edit Merchant
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<TextField
										size='small'
										sx={{ my: 0.7 }}
										fullWidth
										required
										label='Merchant Name'
										{...register("merchantName", { required: true })}
									/>

									<Autocomplete
										onChange={(e) => setSelectedDistricts(e.target.innerText)}
										size='small'
										sx={{ my: 1, width: "100% !important" }}
										options={districts}
										defaultValue={
											districts[
												districts?.findIndex(
													(x) => x.district === data?.district,
												)
											]
										}
										getOptionLabel={(option) => option.district}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...register("branchDistrict", { required: true })}
												{...params}
												label='Districts Name'
												variant='outlined'
											/>
										)}
									/>
									<Autocomplete
										onChange={(e) => setSelectedThana(e.target.innerText)}
										size='small'
										sx={{ my: 1, width: "100% !important" }}
										options={thanas?.filter(
											(item) => item.district === selectedDistricts,
										)}
										getOptionLabel={(option) => option.thana}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...register("branchThana", { required: true })}
												{...params}
												label='Thana Name'
												variant='outlined'
											/>
										)}
									/>
									<Autocomplete
										size='small'
										sx={{ my: 1, width: "100% !important" }}
										options={areas?.filter(
											(item) => item.thana === selectedThana,
										)}
										getOptionLabel={(option) => option.area}
										style={{ width: 300 }}
										renderInput={(params) => (
											<TextField
												{...register("branchArea", { required: true })}
												{...params}
												label='Area Name'
												variant='outlined'
											/>
										)}
									/>

									<Button
										type='submit'
										variant='contained'
										className='button'
										sx={{ my: 0.7, fontWeight: "bold", px: 2.5 }}>
										Update <SendIcon sx={{ ml: 1.5 }} />
									</Button>
								</form>
							</>
						) : (
							<CircularProgress className='textColor' />
						)}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default EditMerchants;
