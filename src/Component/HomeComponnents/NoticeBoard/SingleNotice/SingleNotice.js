import { Box, Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import Notice from "../../../../Assets/Image/Notice.png";
import React from "react";

const SingleNotice = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardActionArea sx={{ maxWidth: 345 }}>
            <Card
              sx={{ maxWidth: 345, border: "2px solid #08A74C", height: 300 }}
            >
              <CardMedia
                component="img"
                height="300"
                image={Notice}
                alt="green iguana"
              />
            </Card>
          </CardActionArea>
          <h3
            style={{
              fontWeight: 500,
              marginBottom: 0,
              color: "#838181",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            April 25, 2022
          </h3>
          <h4
            style={{
              fontWeight: 700,
              marginTop: 5,
              color: "#08A74C",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            NOTICE FOR EID-UL-FITR 2022
          </h4>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleNotice;
