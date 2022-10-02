import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./Faq.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [getPanel, setPanel] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setPanel(panel);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={
        expanded === getPanel ? (
          <RemoveIcon
            sx={{
              fontSize: "1.5rem",
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#08A74C",
            }} />
        ) : (
          <AddIcon
            sx={{
              fontSize: "1.5rem",
              color: "white",
              borderRadius: "50%",
              backgroundColor: "#08A74C",
            }}
          />
        )
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",

    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  return (
    <Box className="faq-background">
      <Box className="faq-shape">
        <Container sx={{ mb: 5, mt: 5 }}>
          <Grid container spacing={7} sx={{ padding: "30px 0px" }}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h6" sx={{ color: "#08A74C", textAlign: "left", fontSize: "24px", letterSpacing: "1px", mb: 1 }}>
                  Freequently Ask Questions
                </Typography>
                <Typography variant="h6" sx={{ color: "white", textAlign: "left", fontSize: "15px", letterSpacing: "1px", mb: 2 }}>
                  WHAT WE DO
                </Typography>
                <Typography variant="h4" sx={{ color: "white", textAlign: "left", letterSpacing: "1px", fontFamily: "Rajdhani", fontWeight: "600", fontSize: "40px" }}>
                  Provide a Reliable Services Since 2010
                </Typography>
                <Typography variant="p" component="div" sx={{ color: "lightgray", textAlign: "left", letterSpacing: "1px", mt: 3 }}>
                  We may allow you to submit testimonials about your experience with our Site. If you provide a testimonial, we may post it on this website along with your name. If you want your testimonial removed, please contact with our customer support team
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", mt: 4 }}>
                  <Box>
                    <Box className="cardContainer" sx={{
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", py: 1, transition: "0.5s all", "&:hover": {
                        background: "white",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }
                    }}>
                      <Box>
                        <LocalShippingIcon sx={{ color: "orange", fontSize: "60px", background: "#f49e0033", borderRadius: "50%", height: "50px", width: "50px", padding: "8px" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" className="cardText" sx={{ color: "white", textAlign: "left", letterSpacing: "1px", }}>
                          Trasparent Pricing
                        </Typography>
                        <Typography variant="h6" className="cardText" sx={{ color: "white", textAlign: "left", letterSpacing: "1px", fontSize: "14px", mt: 1 }}>
                          Indignation and dislike men who are so beguiled.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box className="cardContainer" sx={{
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", py: 1, transition: "0.5s all", "&:hover": {
                        background: "white",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }
                    }}>
                      <Box>
                        <LocalShippingIcon sx={{ color: "orange", fontSize: "60px", background: "#f49e0033", borderRadius: "50%", height: "50px", width: "50px", padding: "8px" }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" className="cardText" sx={{ color: "white", textAlign: "left", letterSpacing: "1px", }}>
                          Trasparent Pricing
                        </Typography>
                        <Typography variant="h6" className="cardText" sx={{ color: "white", textAlign: "left", letterSpacing: "1px", fontSize: "14px", mt: 1 }}>
                          Indignation and dislike men who are so beguiled.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>


            <Grid item xs={12} md={6}>
              <Box sx={{ my: 1 }}>
                <Accordion
                  sx={{ background: "white", color: "#011e25", border: "2px solid white", borderRadius: "2px", margin: "15px auto", transition: "0.4s all", "&:hover": { background: "#011e25", color: "white" } }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header">
                    <Typography variant="h6" sx={{ fontSize: "18px", textAlign: "left" }}>
                      What kind of product does Alijahan Courier Service deliver?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p" component="div" style={{ fontSize: "18px", textAlign: "left", }}>
                      Alijahan Courier Service delivers all kinds of valid and
                      portable products.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ background: "white", color: "#011e25", border: "1px solid white", borderRadius: "2px", margin: "15px auto", transition: "0.4s all", "&:hover": { background: "#011e25", color: "white" } }}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography variant="h6" sx={{ fontSize: "18px", textAlign: "left" }}>
                      How do I contact with Alijahan Courier Service Delivery?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p" component="div" style={{ fontSize: "18px", textAlign: "left" }}>
                      Call us on 096136296. Or email alijahan@gmail.com. You can
                      contact us on live chat from our mobile application or web
                      portal.....Read More
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ background: "white", color: "#011e25", border: "1px solid white", borderRadius: "2px", margin: "15px auto", transition: "0.4s all", "&:hover": { background: "#011e25", color: "white" } }}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography variant="h6" sx={{ fontSize: "18px", textAlign: "left" }}>
                      How to send package or Parcel through Alijahan Courier
                      Service?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p" component="div" style={{ fontSize: "18px", textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ background: "white", color: "#011e25", border: "1px solid white", borderRadius: "2px", margin: "15px auto", transition: "0.4s all", "&:hover": { background: "#011e25", color: "white" } }}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography variant="h6" sx={{ fontSize: "18px", textAlign: "left" }}>
                      Is it possible for me to request you to hold my product for a
                      longer time ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p" component="div" style={{ fontSize: "18px", textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                      eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}>
                  <Button sx={{
                    border: "1px solid #08A74C", color: "#fff", background: "#08A74C", padding: "10px 25px", margin: "10px 0px", display: "flex", alignItems: "start"
                  }}>
                    <Typography variant="span">
                      View All FAQs
                    </Typography>
                    <ArrowForwardIcon />
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box >
  );
};

export default Faq;
