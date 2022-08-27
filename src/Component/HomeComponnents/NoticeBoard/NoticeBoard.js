import { Box, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SingleNotice from "./SingleNotice/SingleNotice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import line from "../../../Assets/Image/line.png";

const NoticeBoard = () => {
  return (
    <Container sx={{ mb: 5, mt: 5 }}>
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: 30,
          textAlign: "start",
          fontWeight: 600,
          color: "#08A74C",
          marginBottom: 0,
        }}
      >
        Notice Board
      </h2>
      <img src={line} width={"16%"} height={3} alt="LineImage" style={{ marginBottom: "10px" }} />
      <Box sx={{ mt: 3 }}>
        <SingleNotice />
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box style={{ width: "20%", margin: "auto" }}>
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
