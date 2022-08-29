import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const MerchantDashboardHome = () => {
    return (
        <Box sx={{ mx: 4, pt: 2, pb: 5 }}>
            <Box
                sx={{
                    px: 2.5,
                    pb: 1,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
                    Home
                </Typography>
            </Box>
            {/* Others Code Start From Here */}
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5, my: 5 }}>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Profile
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/profile">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Add Parcel
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/addParcel">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Parcel List
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/parcelList">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Delivery Payment List
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/deliveryPaymentList">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Order Tracking
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/orderTracking">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Coverage Area
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/coverageArea">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Service Charge
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/merchantDashboard/serviceCharge">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default MerchantDashboardHome;