import { Box, Container, Paper } from "@mui/material";
import React from "react";
import "./ConsignmentTracking.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const ConsignmentTracking = () => {
  const [id, setId] = React.useState("");
  const navigate = useNavigate();
  const handleTrackerId = (e) => {
    e.preventDefault();
    navigate(`/tracking/${id}`);
  };
  return (
    <Container>
      <Box
        sx={{
          mb: 3,
          mt: -7,
          zIndex: "999",
          position: "relative",
        }}
      >
        <Paper sx={{ p: 4 }} elevation={3} >
          <h2
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontFamily: "Montserrat, sans-serif",
              fontSize: 27,
              marginBottom: "20px",
            }}
          >
            Track Your <span style={{ color: "#08A74C" }}> Consignment </span>
          </h2>
          <form style={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <input
                type="text"
                placeholder="Enter Merchant Order ID"
                className="tracking_input"
                onChange={(e) => setId(e.target.value)} />
              <button onClick={handleTrackerId} className="searchBtn">
                <SearchIcon className="searchIcon" style={{ fontSize: "26px" }} />
              </button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ConsignmentTracking;
