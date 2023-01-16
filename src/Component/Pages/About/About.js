import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import whowe from "../../../Assets/Image/whowe.png";
import vision from "../../../Assets/Image/vision.png";
import history from "../../../Assets/Image/history.png";
import Certificates from "../../../Assets/Image/Certificates.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container sx={{ mt: 4, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} data-aos="fade-up">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#08A74C",
            }}
          >
            Who we are
          </h2>
          <p style={{ fontSize: 19, marginTop: 4, color: "#424242", paddingRight: "20px", lineHeight: "30px", }}>
            TrustCourier Service is simply dummy text ofthe printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", alignItems: "center" }}
          data-aos="fade-down"
        >
          <img src={whowe} width={"100%"} alt="WhoWeImage" />
        </Grid>
      </Grid>
      {/* 2nd */}
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} md={5} sx={{ mt: 5 }} data-aos="fade-down">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#08A74C",
            }}
          >
            Our Vision
          </h2>
          <img src={vision} width={"100%"} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", alignItems: "center", mt: 5 }}
          data-aos="fade-up"
        >
          <p style={{ fontSize: 19, marginTop: 4, color: "#424242", paddingLeft: "20px", lineHeight: "30px" }}>
            TrustCourier Service is simply dummy text ofthe printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </Grid>
      </Grid>
      {/* 3rd */}
      <Grid
        container
        spacing={2}
        sx={{ mt: 10 }}
      >
        <Grid item xs={12} md={7} sx={{ mt: 5 }} data-aos="fade-down">
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#08A74C",
              marginBottom: 20,
            }}
          >
            Our History
          </h2>
          <p style={{ fontSize: 19, marginTop: 4, color: "#424242", paddingRight: "20px", lineHeight: "30px" }}>
            TrustCourier Service is simply dummy text ofthe printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", alignItems: "center", mt: 5 }}
          data-aos="fade-up"
        >
          <img src={history} width={"100%"} alt="" />
        </Grid>
      </Grid>
      {/* Certificates */}
      <Grid
        container
        spacing={2}
        sx={{ mt: 10 }}
      >
        <Box sx={{ mt: 5 }}>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 28,
              fontWeight: 700,
              color: "#08A74C",
              marginBottom: 20,
            }}
          >
            Certificates
          </h2>
          <p style={{ fontSize: 19, marginTop: 4, color: "#424242", paddingRight: "20px", lineHeight: "30px" }}>
            <strong>TrustCourier Service </strong> is simply dummy text
            ofthe printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </Box>
        <Grid item xs={12} md={3} data-aos="fade-up">
          <img src={Certificates} width={"100%"} height={293} alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-up">
          <img src={Certificates} width={"100%"} height={293} alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-up">
          <img src={Certificates} width={"100%"} height={293} alt="" />
        </Grid>
        <Grid item xs={12} md={3} data-aos="fade-up">
          <img src={Certificates} width={"100%"} height={293} alt="" />
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <h2
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: 500,
              color: "#08A74C",
              fontFamily: "Montserrat, sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            View All Blogs <ArrowForwardIcon />
          </h2>
        </Link>
      </Box>
    </Container>
  );
};

export default About;
