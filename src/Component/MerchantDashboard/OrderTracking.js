import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import React from 'react';

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
        <Box sx={{ padding: "0px 15px" }}>
            <Typography variant='h5' sx={{ textAlign: "left", marginY: "15px" }}>Order Tracking</Typography>
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
                        <Box sx={{ marginY: "10px" }}>
                            <Button type="submit" variant="contained" color="success" sx={{ padding: "12px 0px", width: "100%" }}>
                                Search
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default OrderTracking;