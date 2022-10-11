import React from "react";
import { Box } from "@mui/material";
import "./HeroSlider.css";
const HeroSlider = () => {
  return (
    <Box style={{ height: "75vh" }}>
      <div className="slider-section">
        <div className="slider-container">

          <div className="singleSlider">
            <div className="sliderImage"></div>
          </div>

          <div className="singleSlider">
            <div className="sliderImage"></div>
          </div>

          <div className="singleSlider">
            <div className="sliderImage"></div>
          </div>

          <div className="singleSlider">
            <div className="sliderImage"></div>
          </div>

        </div>
        <div className="sliderStyle"></div>
      </div>
    </Box>
  );
};

export default HeroSlider;
