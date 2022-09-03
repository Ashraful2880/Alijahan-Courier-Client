import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import coverageareamap from "../../../Assets/Image/covaragemap.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect } from "react";
import hooks from "../../../Hooks/hooks";
import { useState } from "react";
import FilterArea from "./FilterArea/FilterArea";
import "./CoverageArea.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const PageCoverageArea = () => {
  const { baseUrl } = hooks();
  const [coverageArea, setCoverageArea] = useState();
  const [uniqArea, setUniqArea] = useState();
  const [showMenu, setShowMenu] = useState(true);
  const [searchArea, setSearchArea] = useState("");

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_PATH}/areas`)
        .then((res) => res.json())
        .then((data) => {
          setCoverageArea(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, [baseUrl]);

  const handleArea = () => {
    setShowMenu(!showMenu);
    setUniqArea(coverageArea);
  };

  const handleSearchArea = (e) => {
    setShowMenu(false);
    const uniqe = coverageArea.filter(
      (a) => a.area.toLowerCase().split(" ")[0] === e.toLowerCase()
    );
    setUniqArea(uniqe);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          px: 2.5,
          pb: 1,
          mb: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Typography variant='h5' sx={{ fontWeight: "bold", color: "#1E793C" }}>
          Coverage Area
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box style={{ width: "100%", marginTop: "50px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { md: "50%", xs: "100%" },
              mb: 2,
            }}>
            <input
              type="text"
              placeholder="Search"
              className="covarageSearch"
              onChange={(e) => setSearchArea(e.target.value)} />
            <button
              className="covarageSearchBtn"
              onClick={() => handleSearchArea(searchArea)}>
              <SearchIcon className="searchIcon" />
            </button>
          </Box>
          {/* district name */}
          <Box>
            <Paper
              elevation={3}
              sx={{ width: 25, p: 1, borderRadius: "50%", mb: 3 }}
              onClick={() => handleArea("")}
              className={showMenu ? "hideArrow" : ""}>
              <ArrowBackIcon sx={{ display: "flex", alignItems: "center" }} />
            </Paper>
            <Box
              sx={{
                borderRadius: 2,
                border: "1px solid #21aa56",
                background: "#21aa56",
                color: "#fff",
                width: { md: "50%", xs: "100%" },
              }}
              className={showMenu ? "district-name" : "active"}
              onClick={() => handleArea()}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    margin: 0,
                    padding: 10,
                  }}>
                  All Areas
                </p>
                <ChevronRightIcon />
              </Box>
            </Box>
            {/* area table */}
            {!showMenu && <FilterArea uniqArea={uniqArea || []} />}
          </Box>
        </Box>
        <Box style={{ width: "100%", marginBottom: "50px", }}>
          <img src={coverageareamap} width={"80%"} height="600px" alt="CoverageImage" />
        </Box>
      </Box>
    </Container >
  );
};

export default PageCoverageArea;
