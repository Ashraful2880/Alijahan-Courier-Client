import React from "react";
import { Container, Box } from "@mui/material";
import A2i from "../../../Assets/Image/partner/A2i.png";
import DarulHikmah from "../../../Assets/Image/partner/DarulHikmah.png";
import DuaInt from "../../../Assets/Image/partner/DuaInt.png";
import ekshop from "../../../Assets/Image/partner/ekshop.png";
import MNFashion from "../../../Assets/Image/partner/M&NFashion.png";
import PHPrivateLtd from "../../../Assets/Image/partner/PHPrivateLtd.png";
import StickerHub from "../../../Assets/Image/partner/StickerHub.png";
import "./Partner.css";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const Partners = () => {
  const images = [
    A2i,
    DarulHikmah,
    DuaInt,
    ekshop,
    MNFashion,
    PHPrivateLtd,
    StickerHub
  ]

  return (
    <Box className="partnerContainer">
      <Container sx={{ py: 5 }}>
        <p style={{ textAlign: "left", color: "#cfcfcf", fontWeight: 600, marginBottom: "8px" }}>TOP BRANDS</p>
        <h2
          style={{
            textAlign: "start",
            fontWeight: 600,
            fontFamily: "Montserrat, sans-serif",
            fontSize: 27,
            marginBottom: "30px",
            color: "white"
          }}
        >
          Meet Our <span style={{ color: "#f4ad2b" }}>Partners</span>
        </h2>
        <div style={{ height: 130 }}>
          <Marquee velocity={35}>
            {times(7, Number).map(id => (
              <img src={images[id]} key={`marquee-example-people-${id}`} alt="Slider" style={{
                margin: "0px 50px", width: "80px", height: "80px", borderRadius: "5px",
              }} />
            ))}
          </Marquee>
        </div>
      </Container>
    </Box>
  );
};

export default Partners;
