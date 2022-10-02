import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./WhyChooseUs.css";
import Aos from "aos";
import "aos/dist/aos.css";
import truck from "../../../Assets/Image/Icons/truck.png";
import fastService from "../../../Assets/Image/Icons/fastService.png";
import cod from "../../../Assets/Image/Icons/cod.png";
import tracking from "../../../Assets/Image/Icons/tracking.png";


const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box className="whyShape">
      <Container sx={{ mb: 4, pb: 4, pt: 4, position: "relative" }}>
        <Box sx={{ marginBottom: 3, }}>
          <p style={{ textAlign: "left", color: "#08A74C", fontWeight: 600, marginBottom: "6px" }}>OUR FEATURES </p>
          <h2
            style={{
              textAlign: "start",
              fontWeight: 600,
              fontFamily: "Montserrat, sans-serif",
              fontSize: 27,
              marginBottom: "30px",
            }}
          >
            Why <span style={{ color: "#08A74C" }}>Choose Us</span>
          </h2>
        </Box>
        {/* choose us items */}
        <Box>
          <Grid container spacing={4} data-aos="fade-up">
            <Grid item xs={12} md={3}>
              <div className="card-wrap">
                <div className="card-header one">
                  <img src={truck} alt="Truck Icon" style={{ height: "80px" }} />
                </div>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: "22px", fontWeight: 600, mt: 1, mb: 2 }}>
                    <span>
                      Daily Pickup
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", px: 2 }}>
                    Alijahan Courier Service gives you the opportunity to daily pickup.
                  </Typography>
                  <Box style={{ position: "absolute", bottom: "2%" }}>
                    <Button size="small" color="primary" sx={{ ml: 2 }}>
                      <button className="whyMoreButton">
                        <span>More </span>
                      </button>
                    </Button>
                  </Box>
                </div>
              </div>
            </Grid>

            {/* Fastest Service */}
            <Grid item xs={12} md={3}>
              <div className="card-wrap">
                <div className="card-header two">
                  <img src={fastService} alt="Fast Service Icon" style={{ height: "80px" }} />
                </div>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: "22px", fontWeight: 600, mt: 1, mb: 2 }}>
                    <span>
                      Fastest Service
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", px: 2 }}>
                    Our team works to ensure fastest delivery that
                    we can ensure our customer’s growth.
                  </Typography>
                  <Box style={{ position: "absolute", bottom: "2%" }}>
                    <Button size="small" color="primary" sx={{ ml: 2 }}>
                      <button className="whyMoreButton">
                        <span>More </span>
                      </button>
                    </Button>
                  </Box>
                </div>
              </div>
            </Grid>

            {/* Cash on Delivery */}
            <Grid item xs={12} md={3}>
              <div className="card-wrap">
                <div className="card-header three">
                  <img src={cod} alt="Cash On Delivery Icon" style={{ height: "80px" }} />
                </div>
                <div>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: "22px", fontWeight: 600, mt: 1, mb: 2 }}>
                    <span>
                      Cash On Delivery
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", px: 2 }}>
                    We trusted our delivery man will deliver parcel to customer and
                    collect the money.
                  </Typography>
                  <Box style={{ position: "absolute", bottom: "2%", }}>
                    <Button size="small" color="primary" sx={{ ml: 2 }}>
                      <button className="whyMoreButton">
                        <span>More </span>
                      </button>
                    </Button>
                  </Box>
                </div>
              </div>
            </Grid>

            {/* Full Tracking  */}
            <Grid item xs={12} md={3}>
              <div className="card-wrap">
                <div className="card-header four">
                  <img src={tracking} alt="Tracking Icon" style={{ height: "80px" }} />
                </div>
                <Box>
                  <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: "22px", fontWeight: 600, mt: 1, mb: 2 }}>
                    <span>
                      Full Tracking
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", px: 2 }}>
                    We provides full tracking opportunity for every consignments.
                  </Typography>
                  <Box style={{ position: "absolute", bottom: "2%" }}>
                    <Button size="small" color="primary" sx={{ ml: 2 }}>
                      <button className="whyMoreButton">
                        <span>More </span>
                      </button>
                    </Button>
                  </Box>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
