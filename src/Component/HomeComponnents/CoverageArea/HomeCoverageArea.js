import React, { useEffect } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import mapImage from "../../../Assets/Image/newMap.png";
import Aos from "aos";
import "aos/dist/aos.css";
import HomeIcon from '@mui/icons-material/Home';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { useNavigate } from 'react-router-dom';


const HomeCoverageArea = () => {
  const navigate = useNavigate();

  const covaragePage = () => {
    navigate('/covarage');
  }

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: 2, }}>
        <Grid item xs={12} md={8} data-aos="fade-right">
          <img src={mapImage} width={"100%"} alt="MapImage" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ mt: { md: 10, sm: 1 }, textAlign: "left" }}>

          <Box>
            <Typography variant="h5" sx={{ textAlign: "left", fontSize: "18px", letterSpacing: "1px" }}>
              Moving Your Products Across
              <br />
              <span style={{ color: "green", fontWeight: 600 }}> All Borders </span>
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 600, fontSize: "24px", letterSpacing: "1px", mt: 3, color: "#2B2C41" }}>
              We Cover
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
              <Box sx={{ background: "#0095003d", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "36px", width: "36px", mr: 2 }}>
                <AssistantDirectionIcon sx={{ color: "#08A74C" }} />
              </Box>
              <Typography variant="p" component="div" sx={{ fontSize: "20px", fontWeight: 600, color: "green" }}>
                64 Districts
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
              <Box sx={{ background: "#0095003d", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "36px", width: "36px", mr: 2 }}>
                <HomeIcon sx={{ color: "#08A74C" }} />
              </Box>
              <Typography variant="p" component="div" sx={{ fontSize: "20px", fontWeight: 600, color: "green" }}>
                493 Upazilas
              </Typography>
            </Box>
            <Typography variant="p" component="div" sx={{ fontSize: "18px", fontWeight: 600, color: "#2B2C41", mb: 3 }}>
              Across The Country
            </Typography>
          </Box>
          <Button>
            <button className="coverageButton" onClick={covaragePage}>
              <span style={{ letterSpacing: "1px" }}>View Coverage Area </span>
            </button>
          </Button>
        </Grid>
      </Grid>
    </Container >
  );
};

export default HomeCoverageArea;
