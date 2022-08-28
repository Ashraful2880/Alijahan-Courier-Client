import React, { useEffect } from "react";
import { Button, Container } from "@mui/material";
import { Grid } from "@mui/material";
import Map from "../../../asstes/images/Map.png";
import Aos from "aos";
import "aos/dist/aos.css";

const CoverageArea = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: 3, marginBottom: 2, alignItems: "center" }}
      >
        <Grid item xs={12} md={8} data-aos="fade-right">
          <img src={Map} width={"100%"} alt="MapImage" />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "start",
          }}
        >
          <p style={{ fontSize: 24, color: "#686868" }}>
            <span style={{ color: "#08A74C", fontWeight: 700 }}>
              Alijahan Courier Services
            </span>{" "}
            Cover{" "}
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>
              64 Districts
            </span>{" "}
            and{" "}
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>
              493 Upazilas
            </span>{" "}
            Across The Country
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#08A74C",
              borderRadius: 2,
              padding: "8px 20px",
              fontSize: "15px",
              fontWeight: 700,
              border: "1px solid #08A74C",
              textTransform: "Capitalize",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#08A74C",
              },
            }}
          >
            See coverage area
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoverageArea;
