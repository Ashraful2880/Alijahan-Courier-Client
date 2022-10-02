import React, { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import SingleBlog from "./SingleBlog/SingleBlog";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./SingleBlog/SingleBlog.css";

const OurBlog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box className="blogContainer">
      <Container sx={{ mt: 5, mb: 5, position: "relative" }}>
        <p className="divider" style={{ textAlign: "left", color: "#08A74C", fontWeight: 600, marginBottom: "5px" }}>NEWS UPDATE</p>
        <h2
          style={{
            textAlign: "start",
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            fontSize: 27,
            marginBottom: "30px",
          }}
        >
          Reed Our <span style={{ color: "#08A74C" }}>Awesome Blogs</span>
        </h2>
        <Box sx={{ mt: 3 }}>
          <SingleBlog />
          <Link
            to="/about"
            style={{
              textDecoration: "none",
            }}>
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
    </Box>
  );
};

export default OurBlog;
