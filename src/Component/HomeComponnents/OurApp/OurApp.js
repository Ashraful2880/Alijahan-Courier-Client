import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import hand from "../../../Assets/Image/hand.png";
import AppStore from "../../../Assets/Image/socialicon/App Store.png";
import GooglePlay from "../../../Assets/Image/socialicon/Google Play.png";
import { Link } from 'react-router-dom';

const OurApp = () => {
    return (
        <Box style={{ background: "#00800008" }}>
            <Box className="bgShape">
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: { md: 8, xs: 2 } }}>
                        <Grid item md={7} xs={12} sx={{ textAlign: "left" }}>
                            <Typography variant="h3" sx={{ fontSize: "45px", fontWeight: "600", width: "100%", mb: 3 }}>
                                Get More With <span style={{ color: "#08A74C" }}>Our Application</span>
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "18px", mb: 5 }}>
                                The information you provide us isn’t set in stone. You may review, update, correct or delete the personal information in your profile at any time. If you would like us to remove your information from our records, please contact with us. We will attempt to accommodate your request if we do not have a legal obligation to retain the record.
                            </Typography>
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                    <Box sx={{
                                        background: "#08A74C", color: "white", width: "30px", height: "30px", borderRadius: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, border: "10px solid #cae5ca"
                                    }}>01</Box>
                                    <Typography variant="h5" sx={{ ml: 2 }}>
                                        Follow Delivery Status
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                    <Box sx={{
                                        background: "#08A74C", color: "white", width: "30px", height: "30px", borderRadius: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, border: "10px solid #cae5ca"
                                    }}>02</Box>
                                    <Typography variant="h5" sx={{ ml: 2 }}>
                                        Order From Any Location
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                                    <Box sx={{
                                        background: "#08A74C", color: "white", width: "30px", height: "30px", borderRadius: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", p: 2, border: "10px solid #cae5ca"
                                    }}>03</Box>
                                    <Typography variant="h5" sx={{ ml: 2 }}>
                                        Get Important Notices
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 5, }}>
                                    <Box>
                                        <Link to="/home" className="AppStore">
                                            <img src={AppStore} alt="App HandImage" />
                                        </Link>
                                    </Box>
                                    <Box>
                                        <Link to="/home" className="AppStore">
                                            <img src={GooglePlay} alt="App HandImage" />
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={5} xs={12} className="map-bg">
                            <img src={hand} alt="App HandImage" style={{ width: "100%", }} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default OurApp;
