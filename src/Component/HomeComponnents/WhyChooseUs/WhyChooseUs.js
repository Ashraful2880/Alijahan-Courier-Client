import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./WhyChooseUs.css";
import Aos from "aos";
import "aos/dist/aos.css";
import line from "../../../Assets/Image/line.png";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentsIcon from '@mui/icons-material/Payments';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container sx={{ mt: 6, mb: 5 }}>
      <Box sx={{ marginBottom: 3 }}>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 30,
            textAlign: "start",
            fontWeight: 600,
            color: "#08A74C",
            marginBottom: 0,
          }}
        >
          Why Choose Us?
        </h2>
      </Box>
      {/* choose us items */}
      <Box>
        <Grid container spacing={4} >
          <Grid item xs={12} md={4}>
            <Box className="chooseSingleItem" data-aos="fade-up" >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  margin: "auto",
                  borderRadius: "50%",
                  border: "2px solid #08A74C",
                  p: 2,
                  alignItems: "center",
                }}
                className="border-circle"
              >
                <LocalShippingIcon style={{ fontSize: "50px", color: "#08A74C" }} className="single-icon" />
              </Box>
              <Box className="choosesingleItemContentContainer">
                <h2 className="choosesingleItemTitle">Daily Pick up</h2>
                <p className="choosesingleItemContent">
                  Alijahan Courier Service gives you the opportunity to daily pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office!
                </p>
              </Box>
              <Button
                variant="outlined"
                className="choose-button"
                sx={{
                  mt: 2,
                  mb: 2,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
          {/* Fastest Service */}
          <Grid item xs={12} md={4}>
            <Box className="chooseSingleItem" data-aos="fade-up">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  margin: "auto",
                  borderRadius: "50%",
                  border: "2px solid #08A74C",
                  p: 2,
                  alignItems: "center",
                }}
                className="border-circle"
              >
                <LocalShippingIcon style={{ fontSize: "50px", color: "#08A74C" }} className="single-icon" />
              </Box>
              <Box className="choosesingleItemContentContainer">
                <h2 className="choosesingleItemTitle">Fastest Service</h2>
                <p className="choosesingleItemContent">
                  Our team works to ensure fastest delivery that
                  we can ensure our customer’s growth.
                  We offers fastest delivery in Dhaka City. Soon
                  will be extended to the all districts.
                </p>
              </Box>
              <Button
                variant="outlined"
                className="choose-button"
                sx={{
                  mt: 2,
                  mb: 2,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
          {/* Cash on Delivery */}
          <Grid item xs={12} md={4}>
            <Box className="chooseSingleItem" data-aos="fade-up">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  margin: "auto",
                  borderRadius: "50%",
                  border: "2px solid #08A74C",
                  p: 2,
                  alignItems: "center",
                }}
                className="border-circle"
              >
                <AttachMoneyIcon style={{ fontSize: "50px", color: "#08A74C" }} className="single-icon" />
              </Box>
              <Box className="choosesingleItemContentContainer">
                <h2 className="choosesingleItemTitle">Cash on Delivery</h2>
                <p className="choosesingleItemContent">
                  We trusted our delivery man will deliver your parcel to your customer and
                  collect the money. And then with our various payment methods
                  we will give your money back to you.
                </p>
              </Box>
              <Button
                variant="outlined"
                className="choose-button"
                sx={{
                  mt: 2,
                  mb: 2,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
          {/* Fastest Payment Service  */}
          <Grid item xs={12} md={4}>
            <Box className="chooseSingleItem" data-aos="fade-up">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  margin: "auto",
                  borderRadius: "50%",
                  border: "2px solid #08A74C",
                  p: 2,
                  alignItems: "center",
                }}
                className="border-circle"
              >
                <PaymentsIcon style={{ fontSize: "50px", color: "#08A74C" }} className="single-icon" />
              </Box>
              <Box className="choosesingleItemContentContainer">
                <h2 className="choosesingleItemTitle">
                  Fastest Payment Service
                </h2>
                <p className="choosesingleItemContent">
                  We clear your payment within 24 hours after your product delivery. We provides multiple payment methods such as cash, Bkash or Rocket payment.Also You can Transfer balance from Bank
                </p>
              </Box>
              <Button
                variant="outlined"
                className="choose-button"
                sx={{
                  mt: 2,
                  mb: 2,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
          {/* Full tracking  */}
          <Grid item xs={12} md={4} className="card-container">
            <Box className="chooseSingleItem" data-aos="fade-up">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 70,
                  height: 70,
                  margin: "auto",
                  borderRadius: "50%",
                  border: "2px solid #08A74C",
                  p: 2,
                  alignItems: "center",
                }}
                className="border-circle"
              >
                <GpsFixedIcon style={{ fontSize: "50px", color: "#08A74C" }} className="single-icon" />
              </Box>
              <Box className="choosesingleItemContentContainer">
                <h2 className="choosesingleItemTitle">Full tracking</h2>
                <p className="choosesingleItemContent">
                  We provides full tracking opportunity for every consignments. Through our website you can know the current status of the products and stay up to date.Quality is Our Commitment.
                </p>
              </Box>
              <Button
                variant="outlined"
                className="choose-button"
                sx={{
                  mt: 2,
                  mb: 2,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
