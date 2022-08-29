import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

const RiderDashboardHome = () => {
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
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Profile
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/ridersDashboard/profile">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Collect Parcel List
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/ridersDashboard/parcelList">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Deliver Parcel List
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/ridersDashboard/parceReclList">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                                Accounts
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/dashboard/ridersDashboard/accounts">
                                Learn More
                            </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default RiderDashboardHome;