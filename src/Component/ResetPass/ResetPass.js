import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../FirebaseAuth/firebase.config";

export default function ResetPass({ setResetpass }) {
	const [email, setEmail] = React.useState("");
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth);
	React.useEffect(() => {
		if (error) {
			Swal.fire({
				icon: "error",
				title: `${error?.message}`,
				showConfirmButton: true,
			});
		}
	}, [error]);

	return (
		<Container component='main' maxWidth='xs' className='login'>
			<CssBaseline />
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				minHeight='100vh'>
				<Box style={{ marginTop: 3, textAlign: "center", minWidth: "290px" }}>
					<Box>
						<Avatar sx={{ mx: "auto", my: 1 }} className='bgColor'>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component='h1'
							variant='h5'
							className='textColor'
							sx={{ fontWeight: "bold" }}>
							Reset Password
						</Typography>
					</Box>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Typography
						variant='body2'
						className='textColor'
						sx={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => setResetpass(false)}>
						Remembered your password ?
					</Typography>
					<Button
						onClick={async () => {
							await sendPasswordResetEmail(email);
							Swal.fire({
								icon: "success",
								title: `Check Email for Reset Link`,
								showConfirmButton: true,
							}).then(() => {
								setResetpass(false);
							});
						}}
						fullWidth
						className='button'
						variant='contained'
						sx={{
							my: 1,
							px: 3,
							width: "100%",
							fontWeight: "bold",
							borderRadius: "25px",
							border: "2px solid ",
						}}>
						Reset Password
					</Button>
				</Box>
			</Box>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={sending}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
}
