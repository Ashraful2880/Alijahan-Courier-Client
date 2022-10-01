import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from '@mui/material';
import Ecommerce from "../../../../Assets/Image/Ecommerce.png";
import Logistics from "../../../../Assets/Image/Logistics.png";
import pickdrop from "../../../../Assets/Image/pickdrop.png";
import Warehouse from "../../../../Assets/Image/Warehouse.png";
import "./SingleService.css";

const SingleService = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box>
            <Card sx={{ maxWidth: 345, height: 375, position: "relative" }} className="serviceCardContainer">
              <CardMedia
                component="img"
                height="150"
                image={Ecommerce}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                  <span className="animatedText">
                    E-commerce Delivery
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px" }}>
                  We support you to run your ecommerce business smoothly and
                  reduce your risk,and will parcel to delivery.....
                </Typography>
              </CardContent>
              <CardActions style={{ position: "absolute", bottom: "0%" }}>
                <Button size="small" color="primary">
                  <button className="moreButton">
                    <span>Read More! </span>
                  </button>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* 2nd */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card sx={{ maxWidth: 345, height: 375, position: "relative" }} className="serviceCardContainer">
              <CardMedia
                component="img"
                height="150"
                image={Logistics}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                  <span className="animatedText">
                    Logistics Delivery
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px" }}>
                  We provides ecommerce parcel pickup services from merchants
                  place and will deliver parcel with 100% safety....
                </Typography>
              </CardContent>
              <CardActions style={{ position: "absolute", bottom: "0%" }}>
                <Button size="small" color="primary">
                  <button className="moreButton">
                    <span>Read More! </span>
                  </button>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* 3rd */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card sx={{ maxWidth: 345, height: 375, position: "relative" }} className="serviceCardContainer">
              <CardMedia
                component="img"
                height="150"
                image={pickdrop}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                  <span className="animatedText">
                    Pick & Drop
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px" }}>
                  We provides ecommerce parcel pickup services from merchants
                  place and will deliver parcel with 100% safety....
                </Typography>
              </CardContent>
              <CardActions style={{ position: "absolute", bottom: "0%" }}>
                <Button size="small" color="primary">
                  <button className="moreButton">
                    <span>Read More! </span>
                  </button>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        {/* 4th */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card sx={{ maxWidth: 345, height: 375, position: "relative" }} className="serviceCardContainer">
              <CardMedia
                component="img"
                height="150"
                image={Warehouse}
                alt="Warehouse"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                  <span className="animatedText">
                    Warehouse
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px" }}>
                  Alijahan Courier Service provide Complete solution for storage,
                  sorting and processing. Also we have top class warehouses ....
                </Typography>
              </CardContent>
              <CardActions style={{ position: "absolute", bottom: "0%" }}>
                <Button size="small" color="primary">
                  <button className="moreButton">
                    <span>Read More! </span>
                  </button>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleService;
