import { Box, Typography } from '@mui/material';
import React from 'react';

const BranchProfile = () => {
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
                    Profile
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "40%" }}>
                    <Typography variant='p' sx={{ fontSize: "19px", fontWeight: "bold" }}>
                        Branch Information
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2, background: "#fff", py: 5, borderRadius: 1, boxShadow: "0px 0px 5px gray" }}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography sx={{ my: 1 }} varient="p">
                                Name
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
    );
};

export default BranchProfile;