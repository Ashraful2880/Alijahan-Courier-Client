import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import SingleService from "../../HomeComponnents/OurService/SingleService/SingleService";

const OurServices = () => {
  return (
    <Container sx={{ mt: 6, height: "80vh" }}>
      <h2
        style={{
          textAlign: "start",
          fontWeight: 600,
          color: "#08A74C",
          fontFamily: "Montserrat, sans-serif",
          fontSize: 30,
          marginBottom: "40px",
        }}
      >
        Our Services
      </h2>
      <Box sx={{ mb: 4 }}>
        <SingleService />
      </Box>
    </Container>
  );
};

export default OurServices;
