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
                    <Box sx={{ display: "flex", gap: "0px 30px" }}>
                        <Box sx={{ width: "48%" }}>
                            <TextField
                                sx={{ width: "100%" }}
                                helperText="Parcel Invoice Barcode"
                                label="Enter Parcel Invoice Barcode"
                                {...register("invoice", {
                                    required: true,
                                })} />
                            {errors?.invoice?.type === "required" && <p>This field is required</p>}
                        </Box>
                        <Box sx={{ width: "48%" }}>
                            <TextField
                                sx={{ width: "100%" }}
                                helperText="Merchant Order ID"
                                label="Enter Merchant Order ID"
                                {...register("address", {
                                    required: true,
                                })} />
                            {errors?.address?.type === "required" && <p>This field is required</p>}
                        </Box>
                    </Box>
                    <Box sx={{ marginY: "20px", padding: "0px 26px" }}>
                        <Button type="submit" variant="contained" color="success" sx={{ margin: "0px 10px" }}>
                            Search
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default OrderTracking;