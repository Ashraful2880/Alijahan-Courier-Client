import { Box, Button, CardActions, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blogimg1 from "../../../../Assets/Image/blogimg1.png";
import blogimg2 from "../../../../Assets/Image/blogimg2.png";
import blogimg3 from "../../../../Assets/Image/blogimg3.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ShareIcon from '@mui/icons-material/Share';
import "./SingleBlog.css";

const SingleBlog = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, height: 470, position: "relative" }} className="blogCard">
            <CardMedia
              component="img"
              height="240"
              image={blogimg1}
              alt="BlogImage"
              className="blogImage" />
            <Box sx={{ backgroundColor: "#2B2C41", height: "45px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <CalendarMonthIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  17 Jan 2022
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <MapsUgcIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  09 Comments
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                <span>
                  Agreement with Faiha’s Style
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, in!This is Alijahan international Test Blog......
              </Typography>
            </CardContent>
            <CardActions style={{ position: "absolute", bottom: "0%", width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", ml: 1, mr: 4 }}>
                <Box>
                  <Button size="small" sx={{ fontSize: "14px", color: "green", borderBottom: "2px solid white", borderRadius: "0px", "&:hover": { backgroundColor: "white", borderBottom: "2px solid green" } }}>
                    Learn More  <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                  </Button>
                </Box>
                <Box>
                  <ShareIcon sx={{ color: "#2b2c41", cursor: "pointer", transition: "0.5s all", "&:hover": { color: "green" } }} />
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        {/* 2nd */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, height: 470, position: "relative" }} className="blogCard" >
            <CardMedia
              component="img"
              height="240"
              image={blogimg2}
              alt="BlogImage"
              className="blogImage" />
            <Box sx={{ backgroundColor: "#2B2C41", height: "45px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <CalendarMonthIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  21 Apr 2022
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <MapsUgcIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  21 Comments
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                <span>
                  Agreement with Faiha’s Style
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, in!This is Alijahan international Test Blog......
              </Typography>
            </CardContent>
            <CardActions style={{ position: "absolute", bottom: "0%", width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", ml: 1, mr: 4 }}>
                <Box>
                  <Button size="small" sx={{ fontSize: "14px", color: "green", borderBottom: "2px solid white", borderRadius: "0px", "&:hover": { backgroundColor: "white", borderBottom: "2px solid green" } }}>
                    Learn More  <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                  </Button>
                </Box>
                <Box>
                  <ShareIcon sx={{ color: "#2b2c41", cursor: "pointer", transition: "0.5s all", "&:hover": { color: "green" } }} />
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        {/* 3rd */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, height: 470, position: "relative" }} className="blogCard">
            <CardMedia
              component="img"
              height="240"
              image={blogimg3}
              alt="BlogImage"
              className="blogImage" />
            <Box sx={{ backgroundColor: "#2B2C41", height: "45px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 20px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <CalendarMonthIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  06 Aug 2022
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                <MapsUgcIcon sx={{ color: "white", fontSize: "20px", mr: 1, mt: "2px" }} />
                <Typography variant="p" component="div" sx={{ color: "white" }}>
                  32 Comments
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left", fontSize: "22px", fontWeight: 600, }}>
                <span>
                  Agreement with Faiha’s Style
                </span>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", fontSize: "16px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Saepe, in!This is Alijahan international Test Blog......
              </Typography>
            </CardContent>
            <CardActions style={{ position: "absolute", bottom: "0%", width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", ml: 1, mr: 4 }}>
                <Box>
                  <Button size="small" sx={{ fontSize: "14px", color: "green", borderBottom: "2px solid white", borderRadius: "0px", "&:hover": { backgroundColor: "white", borderBottom: "2px solid green" } }}>
                    Learn More  <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
                  </Button>
                </Box>
                <Box>
                  <ShareIcon sx={{ color: "#2b2c41", cursor: "pointer", transition: "0.5s all", "&:hover": { color: "green" } }} />
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box >
  );
};

export default SingleBlog;
