import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blogimg1 from "../../../../Assets/Image/blogimg1.png";
import blogimg2 from "../../../../Assets/Image/blogimg2.png";
import blogimg3 from "../../../../Assets/Image/blogimg3.png";
import "./SingleBlog.css";

const SingleBlog = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ maxWidth: 350, padding: "0px 10px" }}>
            <Card
              sx={{
                border: "1px solid #00800038",
                borderRadius: "10px",
              }}
              className="singleBlogItem">
              <CardMedia
                component="img"
                height="240"
                image={blogimg1}
                alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: 20, fontWeight: 600, textAlign: "left" }}>
                  Agreement with Faiha’s Style
                </Typography>
                <p style={{ fontSize: 17, color: "gray", marginBottom: 5, textAlign: "left", }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, in! This is Alijahan international Test Blog.
                </p>
              </CardContent>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  mb: 4,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  display: "flex",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}>
                Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
              </Button>
            </Card>
          </Box>
        </Grid>
        {/* 2nd */}
        <Grid item xs={12} md={4}>
          <Box sx={{ maxWidth: 350, padding: "0px 10px" }}>
            <Card
              sx={{
                border: "1px solid #00800038",
                borderRadius: "10px",
              }}
              className="singleBlogItem">
              <CardMedia
                component="img"
                height="240"
                image={blogimg2}
                alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: 20, fontWeight: 600, textAlign: "left" }}>
                  Agreement with Faiha’s Style
                </Typography>
                <p style={{ fontSize: 17, color: "gray", marginBottom: 5, textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, in!  This is Alijahan international Test Blog.
                </p>
              </CardContent>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  mb: 4,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  display: "flex",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}>
                Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
              </Button>
            </Card>
          </Box>
        </Grid>
        {/* 3rd */}
        <Grid item xs={12} md={4}>
          <Box sx={{ maxWidth: 350, padding: "0px 10px" }}>
            <Card
              sx={{
                border: "1px solid #00800038",
                borderRadius: "10px",
              }}
              className="singleBlogItem">
              <CardMedia
                component="img"
                height="240"
                image={blogimg3}
                alt="green iguana" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: 20, fontWeight: 600, textAlign: "left" }}>
                  Agreement with Faiha’s Style
                </Typography>
                <p style={{ fontSize: 17, color: "gray", marginBottom: 5, textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, in! This is Alijahan international Test Blog.
                </p>
              </CardContent>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  mb: 4,
                  borderColor: "#08A74C",
                  backgroundColor: "#08A74C",
                  display: "flex",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#08A74C",
                    color: "#08A74C",
                  },
                }}>
                Read More <ArrowForwardIcon style={{ fontSize: "18px", marginLeft: "10px" }} />
              </Button>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleBlog;
