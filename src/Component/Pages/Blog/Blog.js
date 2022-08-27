import React from "react";
import { Box, Container } from "@mui/material";
import SingleBlog from "./../../../Componnents/HomeComponnents/OurBlog/SingleBlog/SingleBlog";

const Blog = () => {
  return (
    <Container sx={{ mt: 6, mb: 5 }}>
      <Box sx={{ mb: 4 }}>
        <SingleBlog />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleBlog />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleBlog />
      </Box>
      <Box sx={{ mb: 4 }}>
        <SingleBlog />
      </Box>
    </Container>
  );
};

export default Blog;
