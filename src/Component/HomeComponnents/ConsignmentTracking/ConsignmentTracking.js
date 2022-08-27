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
          mt: -4,
          zIndex: "1",
          position: "relative",
        }}
      >
        <Paper sx={{ p: 4 }} elevation={3}>
          <h2
            style={{
              marginTop: 0,
              fontFamily: "Montserrat, sans-serif",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Track Your Consignment
          </h2>
          <form action="#">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Enter Your Tracking Code"
                className="tracking_input"
                onChange={(e) => setId(e.target.value)}
              />
              <button onClick={handleTrackerId} className="searchBtn">
                <SearchIcon className="searchIcon" />
              </button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ConsignmentTracking;
