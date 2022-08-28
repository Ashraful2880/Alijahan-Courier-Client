import React, { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import SingleBlog from "./SingleBlog/SingleBlog";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const OurBlog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container sx={{ mt: 5, mb: 5 }}>
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
        Our Blogs
      </h2>
      <Box sx={{ mt: 3 }}>
        <SingleBlog />
        <Link
          to="/about"
          style={{
            textDecoration: "none",
          }}
        >
          <Box style={{ width: "13%", margin: "auto" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#08A74C",
                color: "#08A74C",
                fontWeight: 700,
                "&:hover": {
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                },
              }}>
              View More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
            </Button>
          </Box>
        </Link>
      </Box>
    </Container>
  );
};

export default OurBlog;
