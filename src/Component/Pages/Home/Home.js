import React from "react";
import { Box } from "@mui/material";
import HeroSlider from "../../HomeComponnents/HeroSlider/HeroSlider";
import ConsignmentTracking from "../../HomeComponnents/ConsignmentTracking/ConsignmentTracking";
import WhyChooseUs from "../../HomeComponnents/WhyChooseUs/WhyChooseUs";
import OurService from "../../HomeComponnents/OurService/OurService";
import OurBlog from "../../HomeComponnents/OurBlog/OurBlog";
import DeliveryCalculator from "../../HomeComponnents/DeliveryCalculator/DeliveryCalculator";
import NoticeBoard from "../../HomeComponnents/NoticeBoard/NoticeBoard";
import Partners from "../../HomeComponnents/Partners/Partners";
import Faq from "../../HomeComponnents/Faq/Faq";
import NewsLater from "../../HomeComponnents/NewsLater/NewsLater";
import HomeCoverageArea from "../../HomeComponnents/CoverageArea/HomeCoverageArea";

const Home = () => {
	return (
		<Box>
			<HeroSlider />
			<ConsignmentTracking />
			<WhyChooseUs />
			<OurService />
			<OurBlog />
			<DeliveryCalculator />
			<NoticeBoard />
			<Partners />
			<NewsLater />
			<HomeCoverageArea />
			<Faq />
		</Box>
	);
};

export default Home;
