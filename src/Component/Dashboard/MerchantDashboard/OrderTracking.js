import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

const OrderTracking = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
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
                    Order Tracking
                </Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography component="p" sx={{ fontSize: "20px", fontWeight: "bold" }}>Track Your Order</Typography>
                    <Box sx={{ width: { sx: "100%", sm: "100%", md: "80%", lg: "30%" }, margin: "auto" }}>
                        <Box sx={{ width: "100%", marginY: "10px" }}>
                            <TextField
                                sx={{ width: "100%" }}
                                helperText="Parcel Invoice Barcode"
                                label="Enter Parcel Invoice Barcode"
                                {...register("invoice", {
                                    required: true,
                                })} />
                            {errors?.invoice?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-15px" }}>This field is required</p>}
                        </Box>
                        <Box sx={{ width: "100%", marginY: "10px" }}>
                            <TextField
                                sx={{ width: "100%" }}
                                helperText="Merchant Order ID"
                                label="Enter Merchant Order ID"
                                {...register("address", {
                                    required: true,
                                })} />
                            {errors?.address?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-15px" }}>This field is required</p>}
                        </Box>
                        <Box sx={{ marginY: "10px", display: "flex" }}>
                            <Button type="submit" variant="contained" color="success" sx={{ padding: "10px 0px", width: "100%", fontSize: "15px" }}>
                                <FindReplaceIcon sx={{ mr: 1 }} /> Search
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default OrderTracking;