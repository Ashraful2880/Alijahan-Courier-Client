import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Ecommerce from "../../../../Assets/Image/Ecommerce.png";
import Logistics from "../../../../Assets/Image/Logistics.png";
import pickdrop from "../../../../Assets/Image/pickdrop.png";
import Warehouse from "../../../../Assets/Image/Warehouse.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./SingleService.css";

const SingleService = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box>
            <Card
              sx={{ height: 420, }}
              className="singleServiceItem">
              <CardMedia
                component="img"
                className="singleServiceImage"
                height="200"
                image={Ecommerce}
                alt="green iguana"
              />
              <CardContent sx={{ backgroundColor: "#08A74C", color: "white", padding: "8px 0px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}>
                  E-commerce Delivery
                </Typography>
              </CardContent>
              <p
                style={{
                  color: "grey",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "20px 10px",
                  textAlign: "left",
                  letterSpacing: "1px",
                }}>
                We support you to run your ecommerce business smoothly and
                reduce your risk.....
              </p>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#08A74C",
                    color: "#08A74C",
                    "&:hover": {
                      borderColor: "#08A74C",
                      backgroundColor: "#08A74C",
                      color: "#fff",
                    },
                  }}>
                  Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* 2nd */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card
              sx={{ height: 420, }}
              className="singleServiceItem">
              <CardMedia
                className="singleServiceImage"
                component="img"
                height="200"
                image={Logistics}
                alt="green iguana" />
              <CardContent sx={{ backgroundColor: "#08A74C", color: "white", padding: "8px 0px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}>
                  Logistics Delivery
                </Typography>
              </CardContent>
              <p
                style={{
                  color: "grey",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "20px 10px",
                  textAlign: "left",
                  letterSpacing: "1px",
                }}>
                We provides ecommerce parcel pickup services from merchants
                place and will deliver parcel to ....
              </p>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 1.5,
                    borderColor: "#08A74C",
                    color: "#08A74C",
                    "&:hover": {
                      borderColor: "#08A74C",
                      backgroundColor: "#08A74C",
                      color: "#fff",
                    },
                  }}>
                  Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* 3rd */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card
              sx={{ height: 420, }}
              className="singleServiceItem">
              <CardMedia
                component="img"
                className="singleServiceImage"
                height="200"
                image={pickdrop}
                alt="green iguana" />
              <CardContent sx={{ backgroundColor: "#08A74C", color: "white", padding: "8px 0px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}>
                  Pick & Drop
                </Typography>
              </CardContent>
              <p
                style={{
                  color: "grey",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "20px 10px",
                  textAlign: "left",
                  letterSpacing: "1px",
                }}>
                We provides ecommerce parcel pickup services from merchants
                place and will deliver parcel to ....
              </p>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 1.5,
                    borderColor: "#08A74C",
                    color: "#08A74C",
                    "&:hover": {
                      borderColor: "#08A74C",
                      backgroundColor: "#08A74C",
                      color: "#fff",
                    },
                  }}>
                  Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* 4th */}
        <Grid item xs={12} md={3}>
          <Box>
            <Card
              sx={{ height: 420, }}
              className="singleServiceItem">
              <CardMedia
                component="img"
                className="singleServiceImage"
                height="200"
                image={Warehouse}
                alt="green iguana" />
              <CardContent sx={{ backgroundColor: "#08A74C", color: "white", padding: "8px 0px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}>
                  Warehouse
                </Typography>
              </CardContent>
              <p
                style={{
                  color: "grey",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Montserrat, sans-serif",
                  padding: "20px 10px",
                  textAlign: "left",
                  letterSpacing: "1px",
                }}>
                Alijahan Courier Service provide Complete solution for storage,
                sorting and processing ....
              </p>
              <Box>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 1.5,
                    borderColor: "#08A74C",
                    color: "#08A74C",
                    "&:hover": {
                      borderColor: "#08A74C",
                      backgroundColor: "#08A74C",
                      color: "#fff",
                    },
                  }}>
                  Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleService;
