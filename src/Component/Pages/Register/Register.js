import { Box, Button, Grid } from "@mui/material";
import React from "react";
import loginsidebanner from "../../../Assets/Image/loginsidebanner.png";
import logo from "../../../Assets/Image/logo.png";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <img src={loginsidebanner} width={"100%"} alt="loginsidebanner" />
        </Grid>
        <Grid item md={6} xs={12} sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#08A74C",
                color: "white",
                pr: 3,
                pl: 3,
                borderRadius: 5,
                fontSize: { md: 14, xs: 11 },
                ml: { md: 0, xs: 3 },
              }}
            >
              <h4>Welcome To Alijahan Courier Service</h4>
            </Box>

            <Box>
              <img src={logo} width={"100%"} alt="" />
            </Box>
          </Box>
          {/* login firn section */}
          <Box sx={{ p: { md: 7, xs: 6 } }}>
            <h3>Become a Merchant</h3>
            <form>
              <Box sx={{ width: "100%" }}>
                <input
                  type="text"
                  placeholder="Name of Business"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                  }}
                />
                <Box
                  sx={{
                    display: { md: "flex", xs: "block" },
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <input
                      type="text"
                      placeholder="First Name"
                      style={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: 0,
                        borderBottomColor: "#B2B1B1",
                        fontWeight: 600,
                        marginTop: 20,
                      }}
                    />
                  </Box>
                  <Box>
                    <input
                      type="text"
                      placeholder="Last Name"
                      style={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: 0,
                        borderBottomColor: "#B2B1B1",
                        fontWeight: 600,
                        marginTop: 20,
                      }}
                    />
                  </Box>
                </Box>
                <input
                  type="number"
                  placeholder="Phone Number"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                    padding: 10,
                    width: "100%",
                    marginTop: 20,
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                    padding: 10,
                    width: "100%",
                    marginTop: 20,
                  }}
                />
                <input
                  type="password"
                  placeholder="Password Min: 6 Characters"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                    padding: 10,
                    width: "100%",
                    marginTop: 20,
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                    padding: 10,
                    width: "100%",
                    marginTop: 20,
                  }}
                />
                <Box
                  sx={{
                    mt: 3,
                    width: "100%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#08A74C",
                      "&:hover": {
                        backgroundColor: "#08A74C",
                      },
                      width: "100%",
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </form>

            {/* redirect to reg page */}
            <Box>
              <p style={{ fontWeight: 500, color: "#B2B1B1" }}>
                Already have an account?
                <Link to="/login" style={{ color: "black", marginLeft: 10 }}>
                  LOGIN
                </Link>
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
