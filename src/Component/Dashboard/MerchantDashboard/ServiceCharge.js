import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceCharge = () => {
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
                    Service Charge
                </Typography>
            </Box>
            {/* Others Code Start From Here */}
        </Box>
    );
};

export default ServiceCharge;