import React, { useRef } from "react";
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ComponentToPrint = () => {

    const printData = () => {
        // setSelected(data.filter((e) => selectionModel.find((n) => n === e._id)));
    };

    let ref = useRef();
    const date = new Date();
    // Print Function Here
    function createData(id, orderInfo, merchant, contactName, contactNumber, contactAddress, area, amount, collected, status, paymentStatus, instruction) {
        return { id, orderInfo, merchant, contactName, contactNumber, contactAddress, area, amount, collected, status, paymentStatus, instruction };
    }
    const tableRows = [
        createData(
            "19649-3", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 580, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item",),
        createData(
            "18649-9", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mehvish Kainat Abdullah", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 500, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
        createData(
            "14643-9", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Eftekhar Alam", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 490, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
        createData(
            "11641-1", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 550, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
        createData(
            "28649-0", "Created At 31-10-2022 Deadline 02-11-2022", "Manha's Fashion Club", "Mr.Moinuddin", "01974238487", "H.S.S Road, Jhenaidah", "Jhenaidah", 620, 300, "Rescheduled", "Due", "Please Handle The Parcel Carefully.Food Item"),
    ];
    return (
        <Box>
            {/* Print Component Here */}
            <Box sx={{ my: 2 }} ref={(el) => (ref = el)}>
                <Box sx={{ pb: 2, margin: "auto", textAlign: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#166534" }}>
                        Alijahan Courier Service
                    </Typography>
                    <Typography component="div" variant="p">
                        89/123 Maniknagar,R.K Mission Road,Dhaka-1203
                    </Typography>
                    <Typography component="div" variant="p">
                        Email:alijahancourier@gmail.com
                    </Typography>
                    <Typography component="div" variant="p">
                        www.alijahan.com
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, mb: 1 }}>
                    <Box>
                        <Typography variant="p" sx={{ fontSize: "17px", fontWeight: 600 }}>
                            Total Order: {tableRows.length}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="p" sx={{ fontSize: "17px", fontWeight: 600 }}>
                            Printed Date: {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                        </Typography>
                    </Box>
                </Box>
                {/* Print Table Component */}
                <Box sx={{ position: "relative", mb: 2 }}>
                    <img src="https://alijahan-courier.netlify.app/static/media/Logo.9068b4f56d43d41f4abd.png" alt="Main Logo" className="imagePosition" />
                    <TableContainer component="div" sx={{ border: "1px solid #d9d9d9", borderRadius: "10px" }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
                                        ID
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
                                        Order Info
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
                                        Merchant
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
                                        Contact Name
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Contact Number
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Contact Address
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Area
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Amount (BDT)
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Collected (BDT)
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Status
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Payment Status
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                        Signature
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableRows.map((item) => (
                                    <TableRow
                                        key={item?.id}
                                        sx={{ border: 0 }}>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} component="th" scope="row">
                                            {item?.id}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.orderInfo}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.merchant}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.contactName}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.contactNumber}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.contactAddress}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.area}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.amount}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.collected}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.status}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                            {item?.paymentStatus}
                                        </TableCell>
                                        <TableCell sx={{ borderRight: "1px solid #d9d9d9", width: "9%" }} align="center">

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Typography variant="p" sx={{ fontSize: "13px" }}>
                    This is an Auto Generated Report of <span style={{ color: "green", fontStyle: "italic" }}>Alijahan Courier</span>
                </Typography>
            </Box>
        </Box>
    );
};

export default ComponentToPrint;
