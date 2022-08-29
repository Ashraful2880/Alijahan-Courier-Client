import React from "react";
import { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";
import "./Footer.css";
import footerlogo from "../../../Assets/Image/footerlogo.png";
import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
	/*   const [hide, setHide] = useState("block");
  const location = useLocation();
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
  }, [location.pathname]); */
	const location = useLocation();
	if (location?.pathname.includes("/dashboard")) {
		return false;
	}

	return (
		<Box className='footerContainer' /* style={{ display: `${hide}` }} */>
			<Box sx={{ backgroundColor: "#00283ede" }}>
				<Box>
					<Grid
						container
						spacing={3}
						sx={{
							pl: { md: 10, xs: 5 },
							color: "white",
							pt: 8,
							pb: 10,
						}}>
						<Grid item xs={12} md={3}>
							<Box>
								<img src={footerlogo} width={180} height={80} alt='logo' />
							</Box>
							{/* map */}
							<Box style={{ marginTop: "12px" }}>
								<div className='gmap_canvas'>
									<iframe
										style={{ borderRadius: "5px" }}
										title='map'
										width='330'
										height='204'
										id='gmap_canvas'
										src='https://maps.google.com/maps?q=89/123%20,(%20Manik%20Nagar%20Bishwo%20Road,%20Ram%20Krishna%20Mission%20Rd,%20Dhaka%201203&t=&z=13&ie=UTF8&iwloc=&output=embed'
										frameBorder='0'
										scrolling='no'
										marginHeight='0'
										marginWidth='0'></iframe>
								</div>
							</Box>
						</Grid>
						<Grid item xs={12} md={2} sx={{}}>
							<h4 className='footerMenuHeading'>Contact Us</h4>
							<h4 className='contactInfo'>
								<CallIcon sx={{ pr: 1 }} />
								Call us: +8809613829867
							</h4>
							<h4 className='contactInfo'>
								<EmailIcon sx={{ pr: 1 }} />
								info@alijahan.com
							</h4>
							<h4 className='contactInfo'>
								<DirectionsIcon sx={{ pr: 1 }} />
								89/123 ,( Manik Nagar Bishwo Road, Ram Krishna Mission Rd, Dhaka
								1203
							</h4>
							<Box sx={{ width: { md: "40%", xs: "90%" } }}>
								<Box
									sx={{
										display: { md: "flex", xs: "block" },
										alignItems: "center",
									}}>
									<FacebookIcon className='socialIcon' />
									<WhatsAppIcon className='socialIcon' />
									<InstagramIcon className='socialIcon' />
									<LinkedInIcon className='socialIcon' />
								</Box>
							</Box>
						</Grid>
						{/* menu about */}
						<Grid item xs={12} md={2}>
							<h4 className='footerMenuHeading'>About Us</h4>
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
						</Grid>
						{/* menu service */}
						<Grid item xs={12} md={2}>
							<h4 className='footerMenuHeading'>Services</h4>
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
						</Grid>
						{/* menu How We Can Help You */}
						<Grid item xs={12} md={2}>
							<h4 className='footerMenuHeading'>How We Can Help You</h4>
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
						</Grid>
					</Grid>

					<Paper
						evaluation={3}
						className='goToTopBtn'
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
						}}>
						<ArrowUpwardIcon sx={{ textAlign: "right" }} />
					</Paper>

					<Box
						sx={{
							borderTop: "1px solid #565656",
							backgroundColor: "#02293E",
							width: "100%",
							pb: 1,
						}}>
						<p style={{ color: "#c3c3c3", textAlign: "center", padding: 10 }}>
							Copyright &copy; All Rights Reserved-
							<span style={{ color: "#08A74C", marginLeft: 5, marginRight: 5 }}>
								Alijahan Courier Service 2021-2022
							</span>
						</p>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
