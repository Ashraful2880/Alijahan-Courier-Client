import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import {
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import GoogleIcon from "@mui/icons-material/Google";
import auth from "../../FirebaseAuth/firebase.config";

export default function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const [signInWithGoogle, user2, error2, loading2] = useSignInWithGoogle(auth);
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	let from = location.state?.from?.pathname;
	if (user || user2) {
		navigate(from, { replace: true });
	}
	React.useEffect(() => {
		if (error) {
			Swal.fire({
				icon: "error",
				title: `${error?.message}`,
				showConfirmButton: true,
			});
		}
		if (user) {
			Swal.fire({
				icon: "success",
				title: `Welcome ${(user || user2)?.user?.email}`,
				showConfirmButton: true,
			});
		}
	}, [error, user, user2, error2]);
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				minHeight='100vh'>
				<Box style={{ marginTop: 3, textAlign: "center" }}>
					<Box>
						<Avatar sx={{ mx: "auto", my: 1 }} className='bgColor'>
							<LockOutlinedIcon />
						</Avatar>
						<Typography
							component='h1'
							variant='h5'
							className='textColor'
							sx={{ fontWeight: "bold" }}>
							Sign in
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
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						className='button'
						onClick={() => signInWithEmailAndPassword(email, password)}
						fullWidth
						variant='contained'
						sx={{
							mt: 1,
						}}>
						Sign In
					</Button>
					-------- or --------
					<Button
						fullWidth
						className='button'
						onClick={() => signInWithGoogle()}
						sx={{ fontWeight: "bold" }}>
						<GoogleIcon sx={{ mr: 1 }} /> SignIn With Google
					</Button>
				</Box>
			</Box>

			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={loading || loading2}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
}
