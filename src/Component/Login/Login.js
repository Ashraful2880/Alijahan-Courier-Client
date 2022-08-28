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
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import ResetPass from "../ResetPass/ResetPass";
import auth from "../../FirebaseAuth/firebase.config";

export default function Login() {
	const navigate = useNavigate();
	const location = useLocation();
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loggedUser, setLoggedUser] = React.useState(null);
	let from = location.state?.from?.pathname;
	if (user || loggedUser) {
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
				title: `Welcome ${user?.user?.email}`,
				showConfirmButton: true,
			});
		}
	}, [error, user]);

	const [resetpass, setResetpass] = React.useState(false);
	return (
		<Container component='main' maxWidth='xs' className='login'>
			<CssBaseline />

			{!resetpass ? (
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					minHeight='100vh'>
					<Box style={{ marginTop: 3, textAlign: "center" }} >
						<Box>
							<Avatar sx={{ mx: "auto", my: 1 }} style={{ background: "#08a74c" }}>
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
						<Typography
							variant='body2'
							className='textColor'
							sx={{ textDecoration: "underline", cursor: "pointer" }}
							onClick={() => setResetpass(true)}>
							Forgot your password ? Reset Now !
						</Typography>
						<Button
							onClick={() => signInWithEmailAndPassword(email, password)}
							fullWidth
							sx={{
								my: 1,
								px: 3,
								width: "100%",
								fontWeight: "bold",
								borderRadius: "25px",
								border: "2px solid #08a74c",
								background: "#08a74c",
								color: "black"
							}}>
							Sign In
						</Button>
					</Box>
				</Box>
			) : (
				<ResetPass setResetpass={setResetpass} setLoggedUser={setLoggedUser} />
			)}

			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Container>
	);
}
