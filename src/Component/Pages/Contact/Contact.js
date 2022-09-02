import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import pointermap from "../../../Assets/Image/pointermap.png";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import contact from "../../../Assets/Image/contactback.jpg";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const Contact = () => {
  const [pickupArea, setPickupArea] = React.useState(null);
  const [covarageArea, setCovarageArea] = React.useState([]);
  return (
    <Box>
      <Box>
        <img width={"100%"} src={contact} alt="ContactImage" />
      </Box>
      <Box>
        {/* Our Branch Offices  */}
        <Grid container spacing={2} sx={{ px: "50px" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2 }}>
              <img src={pointermap} width={"100%"} alt="BranchImage" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* our branch filter */}
            <Box
              sx={{
                border: "1px solid #e6e6e6",
                borderRadius: 3,
                p: 2,
                mt: 2,
              }}>
              <h4 style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 14,
                marginTop: 0,
              }}> Our Branches </h4>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "30px 0px" }}>
                  <Box sx={{ width: "100%" }}>
                    <select
                      name="cars"
                      id="cars"
                      style={{
                        padding: 10,
                        width: "100%",
                        borderRadius: 6,
                        borderColor: "#08A74C",
                        backgroundColor: "#08A74C",
                        color: "white",
                        fontSize: "16px"
                      }}
                      className="selectOption">
                      <option className="selectOptions">Dhaka City</option>
                      <option className="selectOptions" value="saab">
                        Saab
                      </option>
                      <option className="selectOptions" value="opel">
                        Opel
                      </option>
                      <option value="audi">Audi</option>
                    </select>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "end", width: "100%", }}>
                    <ViewListIcon
                      style={{ color: "#565454", fontSize: 30 }} />
                    <ViewComfyIcon
                      style={{
                        color: "#565454",
                        fontSize: 30,
                        marginLeft: 20,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* branch list */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "30px 0px", gap: "30px" }}>
              <Paper elevation={3} sx={{ width: "100%", paddingBottom: "30px" }}>
                <Paper
                  elevation={3}
                  sx={{ backgroundColor: "#08A74C", borderRadius: 1, }}>
                  <h4
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      textAlign: "center",
                      color: "white",
                      padding: "6px 0px",
                      marginBottom: "15px"
                    }}>
                    Jatrabari
                  </h4>
                </Paper>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  45 NO, Jatrabari, Dhaka, Bangladesh
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  support@alijahancourier.com
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  096-13829867
                </p>
              </Paper>
              <Paper elevation={3} sx={{ width: "100%", paddingBottom: "30px" }}>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "#08A74C",
                    borderRadius: 1,
                  }}
                >
                  <h4
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      textAlign: "center",
                      color: "white",
                      padding: "6px 0px",
                      marginBottom: "15px"
                    }}>
                    Jatrabari
                  </h4>
                </Paper>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  45 NO, Jatrabari, Dhaka, Bangladesh
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  support@alijahancourier.com
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  096-13829867
                </p>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 6, px: { lg: 8, md: 4, sm: 2 } }} className="contactContainer">
        <Box sx={{ width: "100%", display: { sm: "block", md: "block", lg: "flex" }, justifyContent: "space-between", gap: "40px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", textAlign: "left" }}>
              <h2 style={{ color: "white", marginBottom: "30px" }}>Just Drop a Message</h2>
            </Box>
            <form>
              <Box sx={{ display: { lg: "flex", md: "flex", sm: "block" }, width: "100%", alignItems: "center", gap: "16px" }}>
                <Box sx={{ width: "100%", my: 1 }}>
                  <input
                    type="text"
                    className="contactInput"
                    placeholder="Your Full Name"
                  />
                </Box>
                <Box sx={{ width: "100%", my: 1 }}>
                  <input
                    type="number"
                    className="contactInput"
                    placeholder="Your Mobile Number"
                  />
                </Box>
              </Box>
              <Box sx={{ display: { lg: "flex", md: "flex", sm: "block" }, width: "100%", alignItems: "center", gap: "16px", }}>
                <Box sx={{ width: "100%", my: 1 }}>
                  <input
                    type="email"
                    className="contactInput"
                    placeholder="Your Email Address"
                  />
                </Box>
                <Box sx={{ width: "100%", my: 1 }}>
                  <Autocomplete
                    sx={{ width: "100%" }}
                    value={pickupArea}
                    onChange={(event, newValue) => {
                      if (typeof newValue === "string") {
                        setPickupArea({
                          area: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setPickupArea({
                          area: newValue.inputValue,
                        });
                      } else {
                        setPickupArea(newValue);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={covarageArea}
                    getOptionLabel={(option) => {
                      // Value selected with enter, right from the input
                      if (typeof option === "string") {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.area;
                    }}
                    renderOption={(props, option) => (
                      <li {...props} key={option._id}>
                        {option.area}
                      </li>
                    )}
                    freeSolo
                    renderInput={(params) => (
                      <TextField
                        sx={{
                          "& .MuiInputLabel-root": { color: "green" }, //styles the label
                          "& .MuiOutlinedInput-root": {
                            borderColor: "gray",
                            p: "4px 15px",
                            "& > fieldset": {
                              border: "none",
                            },
                          },
                          width: "100%",
                        }}
                        placeholder="Enter Area"
                        {...params}
                      />
                    )}
                  />
                </Box>
              </Box>
              <Box sx={{ my: 1 }}>
                <textarea
                  rows="6"
                  name="comment"
                  form="usrform"
                  className="contactTextarea"
                  placeholder="Your Message"
                />
              </Box>
              <Box style={{ width: "full", display: "flex", textAlign: "center", marginTop: "15px" }}>
                <button className="contactSendBtn">Send</button>
              </Box>
            </form>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ color: "white" }}>
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <h2 style={{ color: "white", marginBottom: "30px" }}>Head Office</h2>
              </Box>
              <p
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                }}
                className="contact-link">
                <LocationOnIcon style={{ fontSize: 32, marginRight: 10, color: "#fff", background: "#08A74C", padding: "4px", borderRadius: "50%" }} />
                89/123 , Manik Nagar Bishwo Road, Ram Krishna Mission Rd, Dhaka
                1203
              </p>
              <p
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                }}
                className="contact-link"
              >
                <CallIcon style={{ fontSize: 32, marginRight: 10, color: "#fff", background: "#08A74C", padding: "4px", borderRadius: "50%" }} />
                Hot-Line : 09613829867
              </p>
              <p
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                }}
                className="contact-link"
              >
                <MailIcon style={{ fontSize: 32, marginRight: 10, color: "#fff", background: "#08A74C", padding: "4px", borderRadius: "50%" }} />
                support@alijahancourier.com
              </p>
              <a href="https://www.facebook.com/alijahancourierbd"
                target="blank"
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#fff",
                }}
                className="contact-link"
              >
                <FacebookIcon style={{ fontSize: 32, marginRight: 10, color: "#fff", background: "#08A74C", padding: "4px", borderRadius: "50%" }} />
                facebook.com/alijahancourierbd
              </a>
              <a href="https://www.alijahan.com"
                target="blank"
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "#fff",
                }}
                className="contact-link">
                <LanguageIcon style={{ fontSize: 32, marginRight: 10, color: "#fff", background: "#08A74C", padding: "4px", borderRadius: "50%" }} />
                www.alijahan.com
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="100%"
            height="450"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=89/123%20,(%20Manik%20Nagar%20Bishwo%20Road,%20Ram%20Krishna%20Mission%20Rd,%20Dhaka%201203&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </Box>
    </Box >
  );
};

export default Contact;
