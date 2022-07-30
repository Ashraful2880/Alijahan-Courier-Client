import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
	Button,
	TextField,
	Backdrop,
	Typography,
	CircularProgress,
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

const EditBranches = ({ open, setOpen, id, token, setSubmitting }) => {
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			branchName: "",
			branchAddress: "",
			branchDistrict: "",
			branchThana: "",
			branchArea: "",
			branchContact: "",
			branchEmail: "",
			branchImage: "",
		},
	});
	const [data, setData] = React.useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_PATH}/branch/${id}`, {
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
		branchName,
		branchAddress,
		branchDistrict,
		branchThana,
		branchArea,
		branchContact,
		branchEmail,
		branchImage,
	}) => {
		setSubmitting(true);
		axios
			.put(
				`${process.env.REACT_APP_API_PATH}/branch/${id}`,
				{
					branchName,
					branchAddress,
					branchDistrict,
					branchThana,
					branchArea,
					branchContact,
					branchEmail,
					branchImage,
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
									Edit Branch
								</Typography>
								<form onSubmit={handleSubmit(onSubmit)}>
									<TextField
										size='small'
										sx={{ my: 0.7 }}
										fullWidth
										required
										InputLabelProps={{
											shrink: true,
										}}
										label='Grade Name'
										{...register("gradeName", { required: true })}
									/>
									<TextField
										size='small'
										sx={{ my: 0.7 }}
										fullWidth
										multiline
										rows={3}
										required
										InputLabelProps={{
											shrink: true,
										}}
										label='Description'
										{...register("decription", { required: true })}
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

export default EditBranches;
