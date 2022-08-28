import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../Assets/Image/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { Button } from "@mui/material";
import call from "../../../Assets/Image/Call.png";

const Navigation = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const location = useLocation();
	const currPath = location.pathname.split("/")[1];
	const [path, setPath] = React.useState(currPath);
	const [hide, setHide] = useState("block");

	useEffect(() => {
		setPath(currPath);
	}, [currPath]);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	useEffect(() => {
		if (location?.pathname.includes("/")) {
			setHide("block");
		}
		if (location?.pathname.includes("/home")) {
			setHide("block");
		}
		if (location?.pathname.includes("/dashboard")) {
			setHide("none");
		}
	}, [location.pathname]);

	return (
		<AppBar position='sticky' sx={{ backgroundColor: "white" }} style={{ display: `${hide}` }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon style={{ color: "black" }} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							<Link to='/' className={path === "home" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Home</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/service'
								className={path === "service" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Services</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/covarage'
								className={path === "covarage" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Coverage Area</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/pricing'
								className={path === "pricing" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Pricing</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/tracking'
								className={path === "tracking" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Tracking</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/blog'
								className={path === "blog" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Our Blogs</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/about'
								className={path === "about" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>About</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/contact'
								className={path === "contact" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Contact Us</Typography>
								</MenuItem>
							</Link>
							<Link
								to='/dashboard'
								className={path === "dashboard" ? "activeMenu" : "inActiveMenu"}>
								<MenuItem onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>Dashboard</Typography>
								</MenuItem>
							</Link>
						</Menu>
					</Box>
					<Box sx={{ pt: 1, pb: 1 }}>
						<img src={logo} alt='' className='webLogo' />
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex", justifyContent: "center" },
						}}>
						<Link
							to='/home'
							onClick={handleCloseNavMenu}
							className={path === "home" ? "activeMenu" : "inActiveMenu"}>
							Home
						</Link>
						<Link
							to='/service'
							onClick={handleCloseNavMenu}
							className={path === "service" ? "activeMenu" : "inActiveMenu"}>
							Our Services
						</Link>
						<Link
							to='/covarage'
							onClick={handleCloseNavMenu}
							className={path === "covarage" ? "activeMenu" : "inActiveMenu"}>
							Coverage Area
						</Link>
						<Link
							to='/pricing'
							onClick={handleCloseNavMenu}
							className={path === "pricing" ? "activeMenu" : "inActiveMenu"}>
							Pricing
						</Link>
						<Link
							to='/tracking'
							onClick={handleCloseNavMenu}
							className={path === "tracking" ? "activeMenu" : "inActiveMenu"}>
							Tracking
						</Link>
						<Link
							to='/blog'
							onClick={handleCloseNavMenu}
							className={path === "blog" ? "activeMenu" : "inActiveMenu"}>
							Our Blogs
						</Link>
						<Link
							to='/about'
							onClick={handleCloseNavMenu}
							className={path === "about" ? "activeMenu" : "inActiveMenu"}>
							About
						</Link>
						<Link
							to='/contact'
							onClick={handleCloseNavMenu}
							className={path === "contact" ? "activeMenu" : "inActiveMenu"}>
							Contact Us
						</Link>
						<Link
							to='/dashboard'
							onClick={handleCloseNavMenu}
							className={path === "dashboard" ? "activeMenu" : "inActiveMenu"}>
							Dashboard
						</Link>
					</Box>

					<Box
						sx={{
							flexGrow: 0,
							display: { md: "flex", xs: "block" },
						}}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								mt: { xs: 2, md: 0 },
								mb: { xs: 2, md: 0 },
							}}>
							<img
								src={call}
								width={26}
								height={20}
								style={{ paddingRight: 5 }}
								alt=''
								className='callIcon'
							/>
							<a
								href='tel:09613829867'
								target='_blank'
								rel='noopener noreferrer'
								className='call'>
								09613829867
							</a>
						</Box>
						<Link to='/register' style={{ textDecoration: "none" }}>
							<Button
								variant='contained'
								sx={{
									backgroundColor: "#08A74C",
									"&:hover": {
										backgroundColor: "transparent",
										color: "#08A74C",
									},
									color: "white",
									border: "1px solid #08A74C",
									textTransform: "capitalize",
									mr: 2,
									mb: { xs: 2, md: 0 },
								}}>
								Register
							</Button>
						</Link>
						<Link to='/login' style={{ textDecoration: "none" }}>
							<Button
								variant='outlined'
								sx={{
									borderColor: "#08A74C",
									"&:hover": {
										color: "white",
										background: "#08A74C",
									},
									textTransform: "capitalize",
									color: "#08A74C",
									mb: { xs: 2, md: 0 },
								}}>
								Login
							</Button>
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navigation;
