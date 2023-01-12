import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from '@mui/material/styles';

const Footer = () => {

	const location = useLocation();
	if (location?.pathname.includes("/dashboard")) {
		return false;
	}
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<footer style={{ backgroundColor: "#fbfbfd" }}>
				<div className="new_footer_top" style={{ position: "relative" }}>
					<Box sx={{ px: { md: 25, xs: 5 }, pt: { md: 3, xs: 2 } }}>
						<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Grid item xs={12} md={3}>
								<Item style={{ boxShadow: "none", backgroundColor: "transparent" }}>
									<h4 className='footerMenuHeading'>Contact Us</h4>
									<hr className="hrDesign" />
									<Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
										<Box>
											<h4 style={{ fontSize: "22px", fontWeight: "bold", color: "green", marginBottom: "6px", textAlign: "center" }}>
												Trust Courier Service
											</h4>
											<h4 className='contactInfo'>
												<CallIcon sx={{ pr: 1 }} style={{ color: "green", fontSize: "30px" }} />
												Call us: +8801974238487
											</h4>
											<h4 className='contactInfo'>
												<EmailIcon sx={{ pr: 1 }} style={{ color: "green", fontSize: "30px" }} />
												contact.ashraful1@gmail.com
											</h4>
											<h4 className='contactInfo'>
												<DirectionsIcon sx={{ pr: 1 }} style={{ color: "green", fontSize: "35px" }} />
												Jhenaidah, Dhaka, Bangladesh
											</h4>
											<Box sx={{ width: { md: "100%", xs: "90%" } }}>
												<Box
													sx={{ display: "flex", alignItems: "center", }}>
													<FacebookIcon className='socialIcon' />
													<WhatsAppIcon className='socialIcon' />
													<InstagramIcon className='socialIcon' />
													<LinkedInIcon className='socialIcon' />
												</Box>
											</Box>
										</Box>
									</Box>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item style={{ boxShadow: "none", backgroundColor: "transparent" }}>
									<h4 className='footerMenuHeading'>About Us</h4>
									<hr className="hrDesign" />
									<Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
										<Box>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Tracking</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Coverage Map</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>FAQs</Box>
												</p>
											</Link>
											<Link to='/privacypolicy' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Privacy Policy</Box>
												</p>
											</Link>
											<Link to='/termscondition' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Terms & Conditions</Box>
												</p>
											</Link>
											<Link to='/returnrefundpolicy' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Return Policy</Box>
												</p>
											</Link>
										</Box>
									</Box>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item style={{ boxShadow: "none", backgroundColor: "transparent" }}>
									<h4 className='footerMenuHeading'>Services</h4>
									<hr className="hrDesign" />
									<Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
										<Box>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>E-Commerce</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Logistics</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Pick & Drop</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Warehouse</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Blogs</Box>
												</p>
											</Link>
										</Box>
									</Box>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item style={{ boxShadow: "none", backgroundColor: "transparent" }}>
									<Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
										<Box>
											<h4 className='footerMenuHeading'>How We Help</h4>
											<hr className="hrDesign" />
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Contact Us</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Customer Care</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Career</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Local Notice</Box>
												</p>
											</Link>
											<Link to='/' className='footerMenuLink'>
												<p style={{ display: "flex", alignItems: "center" }}>
													<KeyboardDoubleArrowRightIcon sx={{ pr: "2px" }} />
													<Box>Festival Notice</Box>
												</p>
											</Link>
										</Box>
									</Box>
								</Item>
							</Grid>
						</Grid>
					</Box>
					<div className="footer_bg">
						<div className="footer_bg_one"></div>
						<div className="footer_bg_two"></div>
					</div>
				</div>
				<div style={{ paddingTop: "20px", }}>
					<Box
						sx={{
							borderTop: "1px solid #565656",
							backgroundColor: "#02293E",
							width: "100%",
							pb: 1,
						}}>
						<p style={{ color: "white", textAlign: "center", padding: 10 }}>
							Copyright &copy; All Rights Reserved-
							<span style={{ color: "#08A74C", marginLeft: 5, marginRight: 5 }}>
								Trust Courier By - Ashraful Islam
							</span>
						</p>
					</Box>
				</div>
			</footer>
		</>
	);
};

export default Footer;
