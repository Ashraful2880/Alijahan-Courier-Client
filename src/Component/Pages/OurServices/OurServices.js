import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import SingleService from "./SingleService/SingleService";

const OurServices = () => {
  return (
    <Box sx={{ pt: 5, pb: 2 }} className="serviceContainer">
      <Container style={{ position: "relative" }}>
        <p className="divider" style={{ textAlign: "left", color: "green", fontWeight: 600, marginBottom: "5px" }}>WHAT WE DO</p>
        <h2
          style={{
            textAlign: "start",
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            fontSize: 27,
            marginBottom: "30px",
          }}
        >
          Explore Our <span style={{ color: "#08A74C" }}>Services</span>
        </h2>
        <Box sx={{ mb: 4 }}>
          <SingleService />
        </Box>
      </Container>
    </Box >
  );
};

export default OurServices;
