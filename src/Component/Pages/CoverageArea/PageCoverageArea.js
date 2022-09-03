import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
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
      fetch(`https://alijahancourie.herokuapp.com/areas`)
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
      <h4 style={{ fontSize: 22, fontWeight: 700 }}>Coverage Area</h4>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* search */}
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
                border: "1px solid #58C0C5",
                width: { md: "50%", xs: "100%" },
              }}
              className={showMenu ? "district-name" : "active"}
              onClick={() => handleArea()}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className="disName">
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
        </Grid>
        <Grid item xs={12} md={4} style={{ marginBottom: "50px", }}>
          <img src={coverageareamap} width={"100%"} height="100%" alt="CoverageImage" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageCoverageArea;
