import React from "react";
import { Box } from "@mui/material";
import "./HeroSlider.css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

const HeroSlider = () => {
  return (
    <Box style={{ height: "77vh" }}>
      <Swiper
        cssMode={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="slider-bg">
          <div className="slider-bg"></div>

          <div style={{ position: "absolute", left: "300px", top: "180px", textAlign: "left" }} >
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>Number 1 <span style={{ color: "orange" }}>Courier Service</span> </h1>
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>In World</h1>
            <p style={{ color: "white", textAlign: "left", fontSize: "20px", marginTop: "20px", lineHeight: "40px" }}> We support you to run your ecommerce business smoothly and reduce <br /> your risk,and will parcel to delivery </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-bg2">
          <di className="slider-bg2"></di>

          <div style={{ position: "absolute", left: "300px", top: "180px", textAlign: "left" }} >
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>Number 1 <span style={{ color: "orange" }}>Courier Service</span></h1>
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>In World</h1>
            <p style={{ color: "white", textAlign: "left", fontSize: "20px", marginTop: "20px", lineHeight: "40px" }}> We support you to run your ecommerce business smoothly and reduce <br /> your risk,and will parcel to delivery </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-bg3">
          <di className="slider-bg3"></di>

          <div style={{ position: "absolute", left: "300px", top: "180px", textAlign: "left" }} >
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>Number 1 <span style={{ color: "orange" }}>Courier Service</span></h1>
            <h1 style={{ fontSize: "60px", fontWeight: "bold", color: "white" }}>In World</h1>
            <p style={{ color: "white", textAlign: "left", fontSize: "20px", marginTop: "20px", lineHeight: "40px" }}> We support you to run your ecommerce business smoothly and reduce <br /> your risk,and will parcel to delivery </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
