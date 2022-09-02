import React, { useState } from 'react';
import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoneIcon from '@mui/icons-material/Done';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useForm } from 'react-hook-form';

const OfficeToHome = () => {
    const [deliveryAreas, setdeliveryAreas] = useState();
    const [selectedBranches, setSelectDeliveryArea] = useState();
    const [paymentTypes, setPaymentTypes] = useState();
    const [conditionType, setConditionType] = useState();
    const { register, handleSubmit, reset } = useForm();
    return (
        <Box sx={{ mt: 2.5, mx: 2.5, boxShadow: "0px 0px 10px #b5b5b5", pt: 2, pb: 5 }}>
            <Typography variant='h6' sx={{ mb: 3, textAlign: "left", background: "#1E793C", padding: "8px 20px", color: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", mx: 2 }}>
                <CreateNewFolderIcon sx={{ mr: 2 }} /> Create a New Parcel Order
            </Typography>
            <Box sx={{ mx: 3 }}>
                <form>
                    {/* Sender Info Here */}
                    <Typography component="p" sx={{ fontWeight: "bold", textAlign: "left", my: 1, mx: 2, color: "#009688", fontSize: "18px", }}>
                        Sender Information
                    </Typography>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Sender Name'
                            helperText="Sender Name"
                            {...register("senderName", { required: true })}
                        />
                        <TextField
                            type="number"
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Sender Mobile Number'
                            helperText="Sender Number"
                            {...register("senderNumber", { min: 11, max: 11 }, { required: true })}
                        />
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Sender Address'
                            helperText="Sender Address"
                            {...register("senderAddress", { required: true })}
                        />
                    </Box>
                    {/* Receiver Info Here */}
                    <Typography component="p" sx={{ fontWeight: "bold", textAlign: "left", my: 1, mx: 2, color: "#009688", fontSize: "18px", }}>
                        Receiver Information
                    </Typography>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Receiver Name'
                            helperText="Receiver Name"
                            {...register("receiverName", { required: true })}
                        />
                        <TextField
                            size='small'
                            type="number"
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Mobile Number'
                            helperText="Write Reciever Mobile Number"
                            {...register("receiverNumber", { min: 11, max: 11 }, { required: true })}
                        />
                        <Autocomplete
                            onChange={(e) => setSelectDeliveryArea(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={deliveryAreas}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("deliveryArea", { required: true })}
                                    {...params}
                                    label='Select Delivery Area'
                                    variant='outlined'
                                    helperText="Select Delivery Area"
                                />
                            )}
                        />
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Address'
                            helperText="Address"
                            {...register("receiverAddress", { required: true })}
                        />
                    </Box>
                    {/* Order Info Here */}
                    <Typography component="p" sx={{ fontWeight: "bold", textAlign: "left", my: 1, mx: 2, color: "#009688", fontSize: "18px", }}>
                        Order Information
                    </Typography>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <Autocomplete
                            onChange={(e) => setPaymentTypes(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={paymentTypes}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("productCategory", { required: true })}
                                    {...params}
                                    label='Product Category'
                                    variant='outlined'
                                    helperText="Select Product category"
                                />
                            )}
                        />
                        <Autocomplete
                            onChange={(e) => setConditionType(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={conditionType}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("productType", { required: true })}
                                    {...params}
                                    label='Product Type'
                                    variant='outlined'
                                    helperText="Select Product type"
                                />
                            )}
                        />
                        <Autocomplete
                            onChange={(e) => setConditionType(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={conditionType}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("productWeight", { required: true })}
                                    {...params}
                                    label='Product Weight'
                                    variant='outlined'
                                    helperText="Select Product Weight"
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Product Title & Description'
                            helperText="Product Title & Description"
                            {...register("productDetails", { required: true })}
                        />
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            label='Instructions'
                            helperText="Any Instructions"
                            {...register("instructions", { required: true })}
                        />
                    </Box>
                    {/* Payment Info Here */}
                    <Typography component="p" sx={{ fontWeight: "bold", textAlign: "left", my: 1, mx: 2, color: "#009688", fontSize: "18px", }}>
                        Payment Information
                    </Typography>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <TextField
                            type="number"
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Service Charge'
                            helperText="Type Service Charge Here"
                            {...register("serviceCharge", { required: true })}
                        />
                        <Autocomplete
                            onChange={(e) => setPaymentTypes(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={paymentTypes}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("paymentType", { required: true })}
                                    {...params}
                                    label='Payment Type'
                                    variant='outlined'
                                    helperText="Select Payment type"
                                />
                            )}
                        />
                        <Autocomplete
                            onChange={(e) => setConditionType(e.target.innerText)}
                            size='small'
                            sx={{ my: 0.5, width: "100% !important" }}
                            options={conditionType}
                            getOptionLabel={(option) => option.branchName}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...register("conditionType", { required: true })}
                                    {...params}
                                    label='Condition Type'
                                    variant='outlined'
                                    helperText="Select Condition type"
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", mx: 2 }}>
                        <TextField
                            type="number"
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Condition Amount'
                            helperText="Type Condition Amount"
                            {...register("conditionAmount", { required: true })}
                        />
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Reference Id'
                            helperText="Reference Id"
                            {...register("referenceId", { required: true })}
                        />
                        <TextField
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            label='Instructions'
                            helperText="Any Instructions"
                            {...register("instructions", { required: true })}
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "15px", mx: 1, mt: 1 }}>
                        <Button
                            type='submit'
                            variant='contained'
                            color="success"
                            sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1, }}>
                            <DoneIcon sx={{ mr: 0.5 }} />Place
                        </Button>
                        <Button
                            type='reset'
                            variant='contained'
                            color="error"
                            sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1, }}>
                            <RestartAltIcon sx={{ mr: 0.5 }} />Reset
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box >
    );
};

export default OfficeToHome;