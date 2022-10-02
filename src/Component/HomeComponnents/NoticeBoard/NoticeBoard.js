import { Box, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SingleNotice from "./SingleNotice/SingleNotice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NoticeBoard = () => {
  return (
    <Container sx={{ mb: 5, mt: 5, position: "relative" }}>
      <p className="divider" style={{ textAlign: "left", color: "#08A74C", fontWeight: 600, marginBottom: "5px" }}>NEED UPDATE</p>
      <h2
        style={{
          textAlign: "start",
          fontWeight: 600,
          fontFamily: "Montserrat, sans-serif",
          fontSize: 27,
          marginBottom: "30px",
        }}
      >
        Get Notice From <span style={{ color: "#08A74C" }}>Notice Board</span>
      </h2>
      <Box sx={{ mt: 3 }}>
        <SingleNotice />
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}>
          <Box style={{ width: "20%", margin: "35px auto 0px auto" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#08A74C",
                fontWeight: 700,
                color: "#08A74C",
                "&:hover": {
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                },
              }}>
              View All Notice <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
            </Button>
          </Box>
        </Link>
      </Box>
    </Container>
  );
};

export default NoticeBoard;
