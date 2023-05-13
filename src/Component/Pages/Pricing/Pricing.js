import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DeliveryCalculator from "../../HomeComponnents/DeliveryCalculator/DeliveryCalculator";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#08A74C",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },

  "&:hover": {
    backgroundColor: "#08a74c61 !important",
    color: "white !important",
    transition: "0.2s",
  },
}));

function createData(weight, price) {
  return { weight, price };
}
const insideDhakaData = [
  createData("Upto 1kg", 40),
  createData("1kg to 2kg", 60),
  createData("2kg to 3kg", 80),
  createData("3kg to 4kg", 100),
  createData("4kg to 5kg", 100),
];

const outsideDhakaData = [
  createData("Upto 1kg", 100),
  createData("1kg to 2kg", 130),
  createData("2kg to 3kg", 160),
  createData("3kg to 4kg", 190),
  createData("4kg to 5kg", 220),
];

const Pricing = () => {
  return (
    <>
      <Box
        sx={{
          px: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1E793C" }}>
          Service Charge
        </Typography>
      </Box>
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={2} style={{ marginBottom: "50px" }}>
          <Grid item xs={12} md={6}>
            {/* inside dhaka */}
            <Box>
              <h2 style={{ textAlign: "center", marginBottom: 10 }}>
                Inside Dhaka
              </h2>
            </Box>
            {/* table */}
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Weight
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                      align="center"
                    >
                      Price
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {insideDhakaData.map((row) => (
                    <StyledTableRow key={row.name} hover>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{ textAlign: "center" }}
                      >
                        {row.weight}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{ textAlign: "center" }}
                      >
                        {row.price} TK
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* outside dhaka */}
            <Box>
              <h2 style={{ textAlign: "center", marginBottom: 10 }}>
                Outside Dhaka
              </h2>
            </Box>
            {/* table */}
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Weight
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                      align="center"
                    >
                      Price
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {outsideDhakaData.map((row) => (
                    <StyledTableRow key={row.name} hover>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{ textAlign: "center" }}
                      >
                        {row.weight}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        style={{ textAlign: "center" }}
                      >
                        {row.price} TK
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* calculator */}
      </Container>
      <DeliveryCalculator />
    </>
  );
};

export default Pricing;
