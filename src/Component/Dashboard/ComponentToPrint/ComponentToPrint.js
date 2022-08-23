import React from "react";
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ComponentToPrint = () => {
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
        <Box sx={{ my: 2 }}>
            <Box sx={{ pb: 2, }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#166534" }}>
                    Alijahan Courier Service
                </Typography>
                <Typography component="div" variant="p">
                    89/123 Maniknagar,R.K Mission Road,
                </Typography>
                <Typography component="div" variant="p">
                    Dhaka-1203
                </Typography>
                <Typography component="div" variant="p">
                    Email:alijahancourier@gmail.com
                </Typography>
                <Typography component="div" variant="p">
                    www.alijahan.com
                </Typography>
            </Box>
            {/* Print Table Component */}
            <Box sx={{ mt: 2 }}>
                <TableContainer component="div" sx={{ border: "1px solid #d9d9d9", borderRadius: "10px" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }}>
                                    Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                    Email
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                    Contact
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                    Address
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", borderRight: "1px solid #d9d9d9" }} align="center">
                                    Location
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ border: 0 }}>
                                    <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                        {row.calories}
                                    </TableCell>
                                    <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                        {row.fat}
                                    </TableCell>
                                    <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell sx={{ borderRight: "1px solid #d9d9d9" }} align="center">
                                        {row.protein}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box>
                <img src="https://alijahan-courier.netlify.app/static/media/Logo.9068b4f56d43d41f4abd.png" alt="Logo" style={{ width: "300px", marginTop: "30px", opacity: "0.3" }} />
            </Box>
        </Box>
    );
};

export default ComponentToPrint;
