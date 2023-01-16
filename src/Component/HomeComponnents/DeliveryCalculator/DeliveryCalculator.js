import React, { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import "./DeliveryCalculator.css";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import hooks from './../../../Hooks/hooks';
import shapeImage from "../../../Assets/Image/shape4.png";

const filter = createFilterOptions();

const insideDhaka = [
  { label: "upto 1kg", price: 40 },
  { label: "1kg to 2kg", price: 60 },
  { label: "2kg to 3kg", price: 80 },
  { label: " 3kg to 4kg", price: 100 },
  { label: "4kg to 5kg", price: 120 },
];

const outsideDhaka = [
  { label: "upto 1kg", price: 100 },
  { label: "1kg to 2kg", price: 130 },
  { label: "2kg to 3kg", price: 160 },
  { label: " 3kg to 4kg", price: 190 },
  { label: "4kg to 5kg", price: 220 },
];

const DeliveryCalculator = () => {
  const [pickupArea, setPickupArea] = React.useState(null);
  const [deliveryArea, setDeliveryArea] = React.useState(null);
  const [covarageArea, setCovarageArea] = React.useState();
  const [weightValue, setWeightValue] = React.useState(null);
  const [weight, setWeight] = React.useState(insideDhaka);
  const [price, setPrice] = React.useState(0);
  const [finalPrice, setFinalPrice] = React.useState(0);
  const { baseUrl } = hooks();

  useEffect(() => {
    try {
      fetch(`${baseUrl}/coveregeArea`)
        .then((res) => res.json())
        .then((data) => {
          setCovarageArea(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, [baseUrl]);

  useEffect(() => {
    setFinalPrice(0);
    if (pickupArea?.area.split(" ")[0] === "Dhaka") {
      setWeight(insideDhaka);
    } else {
      setWeight(outsideDhaka);
    }

    if (pickupArea !== deliveryArea) {
      setPrice(130);
    } else {
      setPrice(60);
    }

    const totalPrice = price + weightValue?.price;
    if (weightValue === null) {
      setFinalPrice(0);
    } else {
      setFinalPrice(totalPrice);
    }
  }, [deliveryArea, pickupArea, price, weightValue]);

  return (
    <>
      <Box className="delivery-conainer" style={{ paddingTop: "45px", paddingBottom: "10px" }}>
        <Container sx={{ mb: 3 }}>
          <Grid
            container
            spacing={2} sx={{ placeContent: "space-between" }}>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" sx={{ color: "white", textAlign: "left", pt: 2, fontSize: "28px", letterSpacing: "1px" }}>
                  We Create Opportunity <br /> to Reach Potential
                </Typography>
                <Box sx={{ mb: { sx: 2, md: 4 }, display: "flex", justifyContent: "start" }}>
                  <img src={shapeImage} alt="Shape" style={{ width: "30%", marginTop: "8px", marginLeft: "30px" }} />
                </Box>
                <ul style={{ listStyle: "none", color: "#fff" }}>
                  <li style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                    <Box sx={{ background: "#b4edb4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "35px", width: "35px", mr: 2 }}>
                      <CheckCircleIcon sx={{ color: "#08A74C" }} />
                    </Box>
                    <Typography variant="span" sx={{ fontSize: "17px", letterSpacing: "1px", textAlign: "left", color: "lightgray" }}>
                      1% Cash Handling & Risk Management Charge will be added.
                    </Typography>
                  </li>

                  <li style={{ display: "flex", alignItems: "center", margin: "25px 0px" }}>
                    <Box sx={{ background: "#b4edb4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "35px", width: "35px", mr: 2 }}>
                      <CheckCircleIcon sx={{ color: "#08A74C" }} />
                    </Box>
                    <Typography variant="span" sx={{ fontSize: "17px", letterSpacing: "1px", textAlign: "left", color: "lightgray" }}>
                      Price may vary due to parcel size.
                    </Typography>
                  </li>

                  <li style={{ display: "flex", alignItems: "center", margin: "25px 0px" }}>
                    <Box sx={{ background: "#b4edb4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "35px", width: "35px", mr: 2 }}>
                      <CheckCircleIcon sx={{ color: "#08A74C", }} />
                    </Box>
                    <Typography variant="span" sx={{ fontSize: "17px", letterSpacing: "1px", textAlign: "left", color: "lightgray" }}>
                      All charges are VAT & Tax excluded.
                    </Typography>
                  </li>

                  <li style={{ display: "flex", alignItems: "center", margin: "25px 0px" }}>
                    <Box sx={{ background: "#b4edb4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "35px", width: "35px", mr: 2 }}>
                      <CheckCircleIcon sx={{ color: "#08A74C" }} />
                    </Box>
                    <Typography variant="span" sx={{ fontSize: "17px", letterSpacing: "1px", textAlign: "left", color: "lightgray" }}>
                      Unavoidable circumstances may change in time of delivery.
                    </Typography>
                  </li>

                  <li style={{ display: "flex", alignItems: "center", margin: "25px 0px" }}>
                    <Box sx={{ background: "#b4edb4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", height: "35px", width: "35px", mr: 2 }}>
                      <CheckCircleIcon sx={{ color: "#08A74C" }} />
                    </Box>
                    <Typography variant="span" sx={{ fontSize: "17px", letterSpacing: "1px", textAlign: "left", color: "lightgray" }}>
                      Provide a service we are proud of.
                    </Typography>
                  </li>

                </ul>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} sx={{ mt: { md: 5 }, pb: 6, }}>
              <Grid item xs={12} md={12}
                sx={{
                  color: "#fff",
                  mb: 2
                }}>
                <h4
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textAlign: "left",
                    marginBottom: 9,
                    letterSpacing: "1px"
                  }}>
                  Pick-Up Area :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: { md: "80%", sm: "100%", xs: "100%" }, }}
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
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={covarageArea || []}
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
                          p: 0,
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      placeholder="Enter Pick-Up Area"
                      {...params}
                    />
                  )}
                />
              </Grid>
              {/* Delivery Area */}
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  color: "#fff",
                  mb: 2
                }}
              >
                <h4
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textAlign: "left",
                    marginBottom: 9,
                    letterSpacing: "1px"
                  }}>
                  Delivery Area :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: { md: "80%", sm: "100%", xs: "100%" } }}
                  value={deliveryArea}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setDeliveryArea({
                        area: newValue,
                      });
                    } else if (newValue && newValue?.inputValue) {
                      // Create a new value from the user input
                      setDeliveryArea({
                        area: newValue?.inputValue,
                      });
                    } else {
                      setDeliveryArea(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={covarageArea || []}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option?.inputValue) {
                      return option?.inputValue;
                    }
                    // Regular option
                    return option?.area || [];
                  }}
                  renderOption={(props, option) => (
                    <li {...props} key={option?._id}>
                      {option?.area || []}
                    </li>
                  )}
                  freeSolo
                  renderInput={(params, id) => (
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": { color: "#08A74C" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          p: 0,
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      placeholder="Enter Delivery Area"
                      {...params}
                    />
                  )}
                />
              </Grid>
              {/* weight  */}
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  color: "#fff",
                  mb: 2
                }}
              >
                <h4
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textAlign: "left",
                    marginBottom: 9,
                    letterSpacing: "1px"
                  }}>
                  Weight (KG) :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: { md: "80%", sm: "100%", xs: "100%" } }}
                  value={weightValue}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setWeightValue({
                        label: newValue,
                      });
                    } else if (newValue && newValue?.inputValue) {
                      // Create a new value from the user input
                      setWeightValue({
                        label: newValue?.inputValue,
                      });
                    } else {
                      setWeightValue(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={weight}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option?.inputValue) {
                      return option?.inputValue;
                    }
                    // Regular option
                    return option?.label;
                  }}
                  renderOption={(props, option) => (
                    <li {...props} key={option?.label}>
                      {option?.label} : {option?.price}
                    </li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": { color: "#08A74C" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          p: 0,
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      placeholder="Weight"
                      {...params}
                    />
                  )}
                />
              </Grid>
              {/* Service */}
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  color: "#fff",
                  mb: 2
                }}
              >
                <h4
                  style={{
                    fontWeight: 500,
                    fontSize: 18,
                    textAlign: "left",
                    marginBottom: 9,
                    letterSpacing: "1px"
                  }}>
                  Service :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: { md: "80%", sm: "100%", xs: "100%" } }}
                  value={deliveryArea}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setDeliveryArea({
                        area: newValue,
                      });
                    } else if (newValue && newValue.inputValue) {
                      // Create a new value from the user input
                      setDeliveryArea({
                        area: newValue.inputValue,
                      });
                    } else {
                      setDeliveryArea(newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={covarageArea || []}
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
                  renderInput={(params, id) => (
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": { color: "#fff" }, //styles the label
                        "& .MuiOutlinedInput-root": {
                          p: 0,
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      placeholder="Service"
                      {...params}
                    />
                  )}
                />
              </Grid>
              <Box sx={{ display: "flex", mb: 2, mt: 3, }}>
                <Typography variant="h2" component="div" sx={{
                  width: { md: "80%", sm: "100%", xs: "100%" },
                  border: "3px solid orange",
                  borderRadius: 5,
                  padding: "4px 25px",
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  background: "orange",
                  fontSize: "22px"
                }}>
                  {finalPrice} Tk
                </Typography>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DeliveryCalculator;
