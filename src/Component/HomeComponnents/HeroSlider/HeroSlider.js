import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderimg from "../../../Assets/Image/sliderimg.png";
import sliderimg2 from "../../../Assets/Image/slide3.jpg";
import sliderimg3 from "../../../Assets/Image/slide4.jpg";
import sliderimg4 from "../../../Assets/Image/slide5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper";
import { Box } from "@mui/material";
import "./HeroSlider.css";

const HeroSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Box>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="heroSwiper"
      >
        <SwiperSlide>
          <img src={sliderimg} alt="sliderimg" className="sliderimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg2} alt="sliderimg" className="sliderimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg3} alt="sliderimg" className="sliderimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg4} alt="sliderimg" className="sliderimg" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
