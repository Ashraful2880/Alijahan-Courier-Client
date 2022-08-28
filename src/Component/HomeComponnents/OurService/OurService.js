import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import SingleService from "./SingleService/SingleService";
import Aos from "aos";
import "aos/dist/aos.css";
import line from "../../../Assets/Image/line.png";

const OurService = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container sx={{ mt: 6, mb: 5 }}>
      <h2
        style={{
          textAlign: "start",
          fontWeight: 600,
          color: "#08A74C",
          fontFamily: "Montserrat, sans-serif",
          fontSize: 30,
          marginBottom: 0,
        }}
      >
        Our Services
      </h2>
      <img src={line} width={"16%"} height={3} alt="LineImage" style={{ marginBottom: "10px" }} />
      <Box sx={{ mt: 3 }} data-aos="fade-down">
        <SingleService />
      </Box>
    </Container>
  );
};

export default OurService;
