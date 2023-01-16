import { Box, Button, Grid } from "@mui/material";
import React from "react";
import loginsidebanner from "../../../asstes/images/loginsidebanner.png";
import logo from "../../../asstes/images/logo.png";
import Checkbox from "@mui/material/Checkbox";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
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
              <h4>Welcome To TrustCourier Service</h4>
            </Box>

            <Box>
              <img src={logo} width={"100%"} alt="" />
            </Box>
          </Box>
          {/* login firn section */}
          <Box sx={{ p: { md: 4, xs: 5 } }}>
            <h3>LOGIN</h3>
            <form>
              <Box sx={{ width: { md: "50%", xs: "100%" } }}>
                <input
                  type="text"
                  placeholder="User Name"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    borderRadius: 0,
                    borderBottomColor: "#B2B1B1",
                    fontWeight: 600,
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
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
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Checkbox
                      {...label}
                      sx={{
                        color: "#08A74C",
                        "&.Mui-checked": {
                          color: "#08A74C",
                        },
                        ml: 0,
                        pl: 0,
                      }}
                      defaultChecked
                    />
                    <span>Remember me</span>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#08A74C",
                      "&:hover": {
                        backgroundColor: "#08A74C",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </form>
            {/* forgot section */}
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Box
                sx={{
                  mt: 5,
                  borderTop: "1px solid #B2B1B1",
                  width: { md: "50%", xs: "100%" },
                  borderBottom: "1px solid #B2B1B1",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                  }}
                >
                  <LockIcon style={{ fontWeight: 500 }} /> Forgot Password ?
                </p>
              </Box>
            </Link>
            {/* redirect to reg page */}
            <Box>
              <p style={{ fontWeight: 500, color: "#B2B1B1" }}>
                If you are not registered yet
                <Link to="/register" style={{ color: "black", marginLeft: 10 }}>
                  Register Now
                </Link>
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
