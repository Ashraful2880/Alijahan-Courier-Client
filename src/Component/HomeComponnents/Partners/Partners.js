import React from "react";
import { Container } from "@mui/material";
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
    <Container>
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: 30,
          textAlign: "start",
          fontWeight: 700,
          color: "#08A74C",
          marginBottom: 10,
          marginTop: 5
        }}>
        Our Partners
      </h2>
      <div style={{ height: 200 }}>
        <Marquee velocity={35}>
          {times(7, Number).map(id => (
            <img src={images[id]} key={`marquee-example-people-${id}`} alt="Slider" style={{
              marginLeft: "50px", width: "45%", height: "45%"
            }} />
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Partners;
