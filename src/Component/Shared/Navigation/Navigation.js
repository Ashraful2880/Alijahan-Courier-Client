import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../../Assets/Image/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import { Button } from "@mui/material";
import call from "../../../Assets/Image/Call.png";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const location = useLocation();
  const currPath = location.pathname.split("/")[1];
  const [path, setPath] = React.useState(currPath);

  useEffect(() => {
    setPath(currPath);
  }, [currPath]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/" className={path === "home" ? "active" : "nonActive"}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/service"
                className={path === "service" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Services</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/covarage"
                className={path === "covarage" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Coverage Area</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/pricing"
                className={path === "pricing" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Pricing</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/tracking"
                className={path === "tracking" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Tracking</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/blog"
                className={path === "blog" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Our Blogs</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/about"
                className={path === "about" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/contact"
                className={path === "contact" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
              </Link>
              <Link
                to="/dashboard"
                className={path === "dashboard" ? "active" : "nonActive"}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box sx={{ pt: 1, pb: 1 }}>
            <img src={logo} alt="" className="webLogo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Link
              to="/home"
              onClick={handleCloseNavMenu}
              className={path === "home" ? "active" : "nonActive"}
            >
              Home
            </Link>
            <Link
              to="/service"
              onClick={handleCloseNavMenu}
              className={path === "service" ? "active" : "nonActive"}
            >
              Our Services
            </Link>
            <Link
              to="/covarage"
              onClick={handleCloseNavMenu}
              className={path === "covarage" ? "active" : "nonActive"}
            >
              Coverage Area
            </Link>
            <Link
              to="/pricing"
              onClick={handleCloseNavMenu}
              className={path === "pricing" ? "active" : "nonActive"}
            >
              Pricing
            </Link>
            <Link
              to="/tracking"
              onClick={handleCloseNavMenu}
              className={path === "tracking" ? "active" : "nonActive"}
            >
              Tracking
            </Link>
            <Link
              to="/blog"
              onClick={handleCloseNavMenu}
              className={path === "blog" ? "active" : "nonActive"}
            >
              Our Blogs
            </Link>
            <Link
              to="/about"
              onClick={handleCloseNavMenu}
              className={path === "about" ? "active" : "nonActive"}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleCloseNavMenu}
              className={path === "contact" ? "active" : "nonActive"}
            >
              Contact Us
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { md: "flex", xs: "block" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: { xs: 2, md: 0 },
                mb: { xs: 2, md: 0 },
              }}
            >
              <img
                src={call}
                width={18}
                height={18}
                style={{ paddingRight: 5 }}
                alt=""
                className="callIcon"
              />
              <a
                href="tel:09613829867"
                target="_blank"
                rel="noopener noreferrer"
                className="call"
              >
                09613829867
              </a>
            </Box>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#08A74C",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#08A74C",
                  },
                  color: "white",
                  border: "1px solid #08A74C",
                  textTransform: "capitalize",
                  mr: 2,
                  mb: { xs: 2, md: 0 },
                }}
              >
                Register
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#08A74C",
                  "&:hover": {
                    color: "white",
                    background: "#08A74C",
                  },
                  textTransform: "capitalize",
                  color: "#08A74C",
                  mb: { xs: 2, md: 0 },
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
