import { Box, Container } from "@mui/material";
import React from "react";
import notfound from "../../../../Assets/Image/notfound.svg";
const NotFound = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <img src={notfound} alt="" />
      </Box>
    </Container>
  );
};

export default NotFound;
