import { Box, Container } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import A2i from "../../../Assets/Image/partner/A2i.png";
import DarulHikmah from "../../../Assets/Image/partner/DarulHikmah.png";
import DuaInt from "../../../Assets/Image/partner/DuaInt.png";
import ekshop from "../../../Assets/Image/partner/ekshop.png";
import MNFashion from "../../../Assets/Image/partner/M&NFashion.png";
import PHPrivateLtd from "../../../Assets/Image/partner/PHPrivateLtd.png";
import StickerHub from "../../../Assets/Image/partner/StickerHub.png";
import "./Partner.css";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import line from "../../../Assets/Image/line.png";

// import required modules
import SwiperCore, {
  FreeMode,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";

const Partners = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Container>
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: 30,
          textAlign: "start",
          fontWeight: 700,
          color: "#08A74C",
          marginBottom: 6,
        }}
      >
        Our Partners
      </h2>
      <img
        src={line}
        width={"15%"}
        style={{ marginBottom: "40px" }}
        height={3}
        alt="LineImage"
      />
      <Box>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          pauseOnMouseEnter={false}
          disableOnInteraction={false}
          modules={[FreeMode, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="partnerSwiper"
        >
          <SwiperSlide className="partnerSlide">
            <img src={A2i} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={DarulHikmah} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={DuaInt} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={ekshop} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={MNFashion} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={PHPrivateLtd} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={StickerHub} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={A2i} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={DarulHikmah} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={DuaInt} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={ekshop} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={MNFashion} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={PHPrivateLtd} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
          <SwiperSlide className="partnerSlide">
            <img src={StickerHub} width={70} height={60} alt="sliderimg" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

export default Partners;
