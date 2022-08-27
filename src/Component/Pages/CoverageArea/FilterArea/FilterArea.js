import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#58C0C5",
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
    backgroundColor: "#58C0C5!important",
    color: "#fff !important",
    transition: "0.2s",
  },
}));

const FilterArea = ({ uniqArea }) => {
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
      {uniqArea.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ width: { md: "50%", xs: "100%", mt: 5 } }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>All Area</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uniqArea.map((row) => (
                <StyledTableRow key={row._id} hover>
                  <StyledTableCell component="th" scope="row">
                    {row.area}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2>No Data Found</h2>
      )}
    </Container>
  );
};

export default FilterArea;
