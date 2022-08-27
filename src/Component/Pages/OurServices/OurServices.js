import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import SingleService from "../../HomeComponnents/OurService/SingleService/SingleService";

const OurServices = () => {
  return (
    <Container sx={{ mt: 6, mb: 5 }}>
      <Box sx={{ mb: 4 }}>
        <SingleService />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleService />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleService />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleService />
      </Box>
    </Container>
  );
};

export default OurServices;
