import React, { useState } from 'react';
import { Autocomplete, Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import DoneIcon from '@mui/icons-material/Done';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';

const CreateMerchant = () => {
    const [deliveryAreas, setdeliveryAreas] = useState([]);
    const [selectedBranches, setSelectDeliveryArea] = useState([]);
    const [paymentTypes, setPaymentTypes] = useState([]);
    const [conditionType, setConditionType] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    // Table Function Here
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <Box sx={{ mt: 2.5, mx: 2.5, boxShadow: "0px 0px 10px #b5b5b5", pt: 2, pb: 5 }}>
            <Typography variant='h6' sx={{ mb: 3, textAlign: "left", background: "#1E793C", padding: "8px 20px", color: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", mx: 2 }}>
                <CreateNewFolderIcon sx={{ mr: 2 }} />Create a New Parcel Order (Merchant)
            </Typography>
            <Box sx={{ mx: 3 }}>
                <form>
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
                            {...register("receiverNumber", { required: true })}
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
                            type="number"
                            size='small'
                            sx={{ my: 0.5 }}
                            fullWidth
                            required
                            label='Cash Collection'
                            helperText="Cash Collection"
                            {...register("cashCollection", { required: true })}
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
                    <FormGroup sx={{ mb: 1, mx: 2, width: "30%" }}>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="With Delivery Charge" />
                    </FormGroup>
                    <Typography component="p" sx={{ fontWeight: "bold", textAlign: "left", my: 1, mx: 2, color: "#009688", fontSize: "18px", }}>
                        Order Summary
                    </Typography>
                    <TableContainer component={Paper} sx={{ width: { lg: "30%", md: "40%", sn: "100%" } }}>
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography component="p" sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Cash Collection
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Weight Charge
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Delivery Charge
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Cash On Delivery
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow style={{ background: "#e9e9e9" }} >
                                    <TableCell component="th" scope="row">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            Payable Amount
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography sx={{ fontWeight: "600", color: "gray", fontSize: "15px" }}>
                                            3000.00 Taka
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box sx={{ display: "flex", gap: "15px", mx: 1, mt: 2 }}>
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

export default CreateMerchant;