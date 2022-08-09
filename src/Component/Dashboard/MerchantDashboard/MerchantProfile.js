import { Box, Typography } from '@mui/material';
import React from 'react';

const MerchantProfile = () => {
    return (
        <Box sx={{ px: 4, pt: 2, pb: 5, background: "#f8f8f8", height: "93vh" }}>
            <Box
                sx={{
                    px: 2.5,
                    pb: 1,
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                }}>
                <Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
                    Profile
                </Typography>
            </Box>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Box sx={{ width: "40%" }}>
                        <Typography variant='p' sx={{ fontSize: "19px", fontWeight: "bold", }}>
                            Merchant Information
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2, background: "#fff", py: 5, borderRadius: 1, boxShadow: "0px 0px 5px gray" }}>
                            <Box sx={{ textAlign: "left" }}>
                                <Typography sx={{ my: 1 }} varient="p">
                                    ID
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Name
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Email
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Contact Number
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Address
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    District
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Upazila/Thana
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Area
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    COD
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: "left" }}>
                                <Typography sx={{ my: 1 }} varient="p">
                                    M-0014
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Jahidul Islam Nahid
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    dhamaka@mettroexpress.com
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    01709815688
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    50, Mohakhali, Dhaka-1212
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Dhaka
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Mohakhali
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Mohakhali
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    0%
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "40%" }}>
                        <Typography variant='p' sx={{ fontSize: "19px", fontWeight: "bold" }}>
                            Merchant Information
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2, background: "#fff", py: 5, borderRadius: 1, boxShadow: "0px 0px 5px gray" }}>
                            <Box sx={{ textAlign: "left" }}>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Hame
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Contact
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Address
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: "left" }}>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Dhaka Tejgoan Branch
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    01813158551
                                </Typography>
                                <Typography sx={{ my: 1 }} varient="p">
                                    Dhaka, Panthapath
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MerchantProfile;