import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import AddTaskIcon from "@mui/icons-material/AddTask";
import TableHead from '@mui/material/TableHead';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    pt: 4,
    pb: 6,
    px: 2,
    width: { md: "70vw", sm: "80vw", xs: "90vw" },
    maxHeight: "90vh",
    overflowX: "hidden",
    overflowY: "scroll",
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: "white",
};

const ParcelModal = ({ open, handleClose, modalData }) => {

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            variant='h6'
                            sx={{
                                mb: 2,
                                textAlign: "left",
                                background: "#1E793C",
                                padding: "8px 20px",
                                color: "#fff",
                                borderRadius: "5px",
                                display: "flex",
                                alignItems: "center",
                            }}>
                            <AddTaskIcon sx={{ mr: 2 }} /> Delivery Payment List Deatils
                        </Typography>
                        <Box>
                            {/* Merchant Information */}
                            <Box>
                                <Typography variant='h6' sx={{ m: 1, textAlign: "left", fontWeight: "bold" }}>
                                    Merchant Details
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="left">Company Name</TableCell>
                                                <TableCell align="left">Email</TableCell>
                                                <TableCell align="left">Contact</TableCell>
                                                <TableCell align="left">Address</TableCell>
                                                <TableCell align="left">Branch</TableCell>
                                                <TableCell align="left">Area</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{modalData?.marchentInfo?.merchantName}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantCompanyName}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantEmail}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantContact}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantAddress}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantBranchName}</TableCell>
                                                <TableCell align="left">{modalData?.marchentInfo?.merchantArea}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            {/* Receiver Information */}
                            <Box>
                                <Typography variant='h6' sx={{ m: 1, textAlign: "left", fontWeight: "bold" }}>
                                    Receiver Details
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="left">Number</TableCell>
                                                <TableCell align="left">Address</TableCell>
                                                <TableCell align="left">Branch</TableCell>
                                                <TableCell align="left">Area</TableCell>
                                                <TableCell align="left">District</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{modalData?.receiverInfo?.receiverName}</TableCell>
                                                <TableCell align="left">{modalData?.receiverInfo?.receiverNumber}</TableCell>
                                                <TableCell align="left">{modalData?.receiverInfo?.receiverAddress}</TableCell>
                                                <TableCell align="left">{modalData?.receiverInfo?.receiverBranchName}</TableCell>
                                                <TableCell align="left">{modalData?.receiverInfo?.receiverBranchArea}</TableCell>
                                                <TableCell align="left">{modalData?.receiverInfo?.receiverBranchDistrict}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            {/* Merchant Information */}
                            <Box>
                                <Typography variant='h6' sx={{ m: 1, textAlign: "left", fontWeight: "bold" }}>
                                    Order Details
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Product Category</TableCell>
                                                <TableCell align="center">Product Weight</TableCell>
                                                <TableCell align="center">Service Area</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{modalData?.orderDetails?.productCategory}</TableCell>
                                                <TableCell align="center">
                                                    {modalData?.orderDetails?.productWeight}
                                                </TableCell>
                                                <TableCell align="center">{modalData?.orderDetails?.receiverServiceArea}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            {/* Order Summary Information */}
                            <Box>
                                <Typography variant='h6' sx={{ m: 1, textAlign: "left", fontWeight: "bold" }}>
                                    Order Summary
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Total Receive</TableCell>
                                                <TableCell align="left">COD Amount</TableCell>
                                                <TableCell align="left">Delivery Charge</TableCell>
                                                <TableCell align="left">Weight Charge</TableCell>
                                                <TableCell align="left">Total Charges</TableCell>
                                                <TableCell align="left">Total Amount With Charge</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">{modalData?.orderSummaray?.totalReceive}   TK</TableCell>
                                                <TableCell align="left">{modalData?.orderSummaray?.codAmount}   TK</TableCell>
                                                <TableCell align="left">{modalData?.orderSummaray?.deliveryCharge}   TK</TableCell>
                                                <TableCell align="left">{modalData?.orderSummaray?.weightCharge}   TK</TableCell>
                                                <TableCell align="left">{modalData?.orderSummaray?.totalCharges}   TK</TableCell>
                                                <TableCell align="left">{modalData?.orderSummaray?.totalAmountWithCharges}   TK</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default ParcelModal;