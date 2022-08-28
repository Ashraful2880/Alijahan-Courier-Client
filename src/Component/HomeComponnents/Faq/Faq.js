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
import faqimg from "../../../Assets/Image/whowe.png";
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
      <Container sx={{ mb: 5, mt: 5 }}>
        <Grid container spacing={2} sx={{ padding: "30px 0px" }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ mt: 1 }}>
              <Accordion
                style={{ background: "transparent", color: "#fff", border: "1px solid rgb(1, 113, 1)", borderRadius: "5px", margin: "15px auto" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography variant="h6">
                    What kind of product does Alijahan Courier Service deliver?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" style={{ color: "#bfbfbf" }}>
                    Alijahan Courier Service delivers all kinds of valid and
                    portable products.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{ background: "transparent", color: "#fff", border: "1px solid rgb(1, 113, 1)", borderRadius: "5px", margin: "15px auto" }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography variant="h6">
                    How do I contact with Alijahan Courier Service Delivery?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" style={{ color: "#bfbfbf" }}>
                    Call us on 096136296. Or email alijahan@gmail.com. You can
                    contact us on live chat from our mobile application or web
                    portal.....Read More
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{ background: "transparent", color: "#fff", border: "1px solid rgb(1, 113, 1)", borderRadius: "5px", margin: "15px auto" }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography variant="h6">
                    How to send package or Parcel through Alijahan Courier
                    Service?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" style={{ color: "#bfbfbf" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                    eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{ background: "transparent", color: "#fff", border: "1px solid rgb(1, 113, 1)", borderRadius: "5px", margin: "15px auto" }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography variant="h6">
                    Is it possible for me to request you to hold my product for a
                    longer time ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="p" style={{ color: "#bfbfbf" }}>
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
          <Grid item xs={12} md={5}>
            <img
              src={faqimg}
              width={"100%"}
              height={"90%"}
              style={{ borderRadius: 10 }}
              alt="FAQImage"
            />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default Faq;
