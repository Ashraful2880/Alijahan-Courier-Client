import { Box, Container, Grid, Paper } from "@mui/material";
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
  const [covarageArea, setCovarageArea] = React.useState();

  return (
    <Box>
      <Box
        sx={{ py: 4, px: { lg: 8, md: 4, sm: 2 } }}
        className="contactContainer"
        style={{paddingBottom:"100px"}}
      >
        <h1
          style={{
            paddingBottom: "70px",
            textAlign: "center",
            color: "white",
          }}
        >
          Contact Us
        </h1>
        <Container>
          <Box
            sx={{
              width: "100%",
              display: { sm: "block", md: "block", lg: "flex" },
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ width: "100%", textAlign: "left" }}>
                <h2 style={{ color: "white", marginBottom: "30px",fontSize:"30px" }}>
                  Just Drop a Message
                </h2>
              </Box>
              <form>
                <Box
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "block" },
                    width: "100%",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
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
                <Box
                  sx={{
                    display: { lg: "flex", md: "flex", sm: "block" },
                    width: "100%",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
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
                            "& .MuiInputLabel-root": { color: "#08A74C" }, //styles the label
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
                <Box
                  style={{
                    width: "full",
                    display: "flex",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  <button className="contactSendBtn">Send</button>
                </Box>
              </form>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ color: "white" }}>
                <Box sx={{ width: "100%", textAlign: "left" }}>
                  <h2 style={{ color: "white", marginBottom: "50px" }}>
                    Head Office
                  </h2>
                </Box>
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
                  <LocationOnIcon
                    style={{
                      fontSize: 32,
                      marginRight: 10,
                      color: "#fff",
                      background: "#08A74C",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  Jhenaidah, Bangladesh
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
                  <CallIcon
                    style={{
                      fontSize: 32,
                      marginRight: 10,
                      color: "#fff",
                      background: "#08A74C",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  Hot-Line : 01974238487
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
                  <MailIcon
                    style={{
                      fontSize: 32,
                      marginRight: 10,
                      color: "#fff",
                      background: "#08A74C",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  contact.ashraful1@gmail.com
                </p>
                <a
                  href="https://www.facebook.com/ashraful-2880"
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
                  <FacebookIcon
                    style={{
                      fontSize: 32,
                      marginRight: 10,
                      color: "#fff",
                      background: "#08A74C",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  facebook.com/ashraful-2880
                </a>
                <a
                  href="https://www.google.com"
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
                  <LanguageIcon
                    style={{
                      fontSize: 32,
                      marginRight: 10,
                      color: "#fff",
                      background: "#08A74C",
                      padding: "4px",
                      borderRadius: "50%",
                    }}
                  />
                  Test Website.com
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <div className="gmap_canvas">
          <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.723472551384!2d89.18012139999999!3d23.53498875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee5dfb6ab292b%3A0x714cc79d538236a4!2sPaira%20Chottor!5e0!3m2!1sen!2sbd!4v1647341237352!5m2!1sen!2sbd"
            style={{ height: "50vh", width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Box>
    </Box>
  );
};

export default Contact;
