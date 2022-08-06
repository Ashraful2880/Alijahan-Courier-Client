import React from 'react';
import { Box, Button, Card, Grid, MenuItem, TextareaAutosize, TextField, Typography } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoneIcon from '@mui/icons-material/Done';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useForm } from 'react-hook-form';
import "../MerchantDashboard.css";

const AddParcel = () => {
    const [district, setDistrict] = React.useState('Select District');

    const handleChange = (event) => {
        setDistrict(event.target.value);
    };

    const districts = [
        { "value": "Select District", "label": "Select District" },
        { "value": "Bagerhat", "label": "Bagerhat" },
        { "value": "Bandarban", "label": "Bandarban" },
    ]

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
            <Box>
                <Typography variant='h5' sx={{ textAlign: "left", marginY: "15px" }}>Add New Parcel</Typography>
                <Typography variant='h6' sx={{ textAlign: "left", background: "#1E793C", padding: "10px 15px", borderRadius: "6px", fontSize: "19px", color: "#fff", display: "flex", alignItems: "center" }}>
                    <CreateNewFolderIcon sx={{ mr: 2 }} /> Add New Parcel
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
                            <Typography className="divider" component='p' sx={{ textAlign: "left", marginY: "15px", fontWeight: "bold", fontSize: "18px" }}>Customer Information</Typography>
                            <Card sx={{ minWidth: 275 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Customer Name"
                                            label="Enter Customer Name"
                                            {...register("customerName", {
                                                required: true,
                                            })}
                                        />
                                        {errors?.customerName?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Customer Contact Number"
                                            label="Customer Number"
                                            {...register("customerNumber", {
                                                required: true,
                                            })} />
                                        {errors?.customerNumber?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Customer Address"
                                            label="Customer Address"
                                            {...register("address", {
                                                required: true,
                                            })} />
                                        {errors?.address?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            select
                                            label="Select District"
                                            value={district}
                                            onChange={handleChange}
                                            helperText="Select District"
                                            {...register("district")}>
                                            {districts.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {errors?.district?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            select
                                            label="Select Thana/Upazila"
                                            value={district}
                                            onChange={handleChange}
                                            helperText="Select Thana/Upazila"
                                            {...register("upazila")}>
                                            {districts.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {errors?.upazila?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            select
                                            label="Select Area"
                                            value={district}
                                            onChange={handleChange}
                                            helperText="Select Area"
                                            {...register("area")}>
                                            {districts.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {errors?.area?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
                            <Typography component='p' sx={{ textAlign: "left", marginY: "15px", fontWeight: "bold", fontSize: "18px" }} className="divider">Parcel Information</Typography>
                            <Card sx={{ minWidth: 275 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Merchant Order ID"
                                            label="Merchant Order ID"
                                            {...register("merchantOrderID", {
                                                required: true,
                                            })}
                                        />
                                        {errors?.merchantOrderID?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            select
                                            label="Weight Package"
                                            value={district}
                                            onChange={handleChange}
                                            helperText="Weight Package"
                                            {...register("weight")}>
                                            {districts.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {errors?.weight?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            select
                                            label="Delivery option"
                                            value={district}
                                            onChange={handleChange}
                                            helperText="Delivery Option"
                                            {...register("deliveryOption")}>
                                            {districts.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {errors?.deliveryOption?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Product(s) Brief"
                                            label="Product(s) Brief"
                                            {...register("productsDetails", {
                                                required: true,
                                            })} />
                                        {errors?.productsDetails?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 30px" }}>
                                    <Box sx={{ width: "48%" }}>
                                        <TextField
                                            sx={{ width: "100%" }}
                                            helperText="Total Collection Amount"
                                            label="Total Collection Amount"
                                            {...register("collectionAmount", {
                                                required: true,
                                            })} />
                                        {errors?.collectionAmount?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                    </Box>
                                    <TextareaAutosize
                                        onChange={handleChange}
                                        minRows={2.2}
                                        placeholder="Parcel Remark"
                                        style={{ width: "48%", padding: "10px" }}
                                        {...register("remark", {
                                            required: true,
                                        })}
                                    />
                                    {errors?.remark?.type === "required" && <p style={{ color: "red", fontSize: "14px", marginTop: "-10px" }}>This field is required</p>}
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
                            <Typography component='p' sx={{ textAlign: "left", marginY: "15px", fontWeight: "bold", fontSize: "18px" }} className="divider">Merchant Information</Typography>
                            <Card sx={{ minWidth: 275 }}>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px", marginTop: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Merchant Name
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>
                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        Jahidul Islam Nahid
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Merchant Contact
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>
                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        01709815688
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Branch
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>
                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        Dhaka Tejgoan Branch
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Branch Contact Number
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>
                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        01813158551
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "60px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Branch Address
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>
                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        Dhaka, Panthapath
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} style={{ position: "relative" }}>
                            <Typography component='p' sx={{ textAlign: "left", fontWeight: "bold", marginY: "15px", fontSize: "18px" }} className="divider">Parcel Charge</Typography>
                            <Card sx={{ minWidth: 275, padding: "0px 15px" }}>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px", marginTop: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Weight Package
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        Not Confirm
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Cod Percent
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        0%
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Weight Charge
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        0.00
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        COD Charge
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        0.00
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Delivery Charge
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        0.00
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", marginBottom: "20px" }}>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        Total Charge
                                    </Typography>
                                    <Typography component='p' sx={{ fontWeight: "bold", fontSize: "14px" }}>
                                        --
                                    </Typography>

                                    <Typography component='p' sx={{ fontSize: "14px" }}>
                                        0.00
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                        {/* <Box sx={{ marginY: "20px", padding: "0px 26px" }}>
            
                        </Box> */}
                        <Box sx={{ display: "flex", gap: "15px", mx: 1, mt: 1, mb: 5, padding: "0px 26px" }}>
                            <Button
                                type='submit'
                                variant='contained'
                                color="success"
                                sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1, }}>
                                <DoneIcon sx={{ mr: 0.5 }} />Submit
                            </Button>
                            <Button
                                type='reset'
                                variant='contained'
                                color="error"
                                sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1, }}>
                                <RestartAltIcon sx={{ mr: 0.5 }} />Reset
                            </Button>
                        </Box>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};

export default AddParcel;