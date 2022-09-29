import React from "react";
import { Box } from "@mui/material";
import HeroSlider from "../../HomeComponnents/HeroSlider/HeroSlider";
import ConsignmentTracking from "../../HomeComponnents/ConsignmentTracking/ConsignmentTracking";
import WhyChooseUs from "../../HomeComponnents/WhyChooseUs/WhyChooseUs";
import OurBlog from "../../HomeComponnents/OurBlog/OurBlog";
import DeliveryCalculator from "../../HomeComponnents/DeliveryCalculator/DeliveryCalculator";
import NoticeBoard from "../../HomeComponnents/NoticeBoard/NoticeBoard";
import Partners from "../../HomeComponnents/Partners/Partners";
import Faq from "../../HomeComponnents/Faq/Faq";
import NewsLater from "../../HomeComponnents/NewsLater/NewsLater";
import HomeCoverageArea from "../../HomeComponnents/CoverageArea/HomeCoverageArea";
import OurApp from "../../HomeComponnents/OurApp/OurApp";
import OurServices from './../OurServices/OurServices';

const Home = () => {
	return (
		<Box>
			<HeroSlider />
			<ConsignmentTracking />
			<OurServices />
			<OurApp />
			<WhyChooseUs />
			<OurBlog />
			<DeliveryCalculator />
			<NoticeBoard />
			<Partners />
			<HomeCoverageArea />
			<NewsLater />
			<Faq />
		</Box>
	);
};

export default Home;
