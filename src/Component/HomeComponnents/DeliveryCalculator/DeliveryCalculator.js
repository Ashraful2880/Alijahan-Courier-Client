import React, { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import "./DeliveryCalculator.css";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import line from "../../../Assets/Image/line.png";
import calculate from "../../../Assets/Image/calculate.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";
import hooks from './../../../Hooks/hooks';

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
  const [covarageArea, setCovarageArea] = React.useState([]);
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
      <Container sx={{ marginBottom: 3 }}>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 30,
            textAlign: "start",
            fontWeight: 600,
            color: "#08A74C",
            marginBottom: 0,
          }}
        >
          Delivery Calculator
        </h2>
        <img
          src={line}
          width={"22%"}
          height={3}
          style={{ marginBottom: "8px" }}
          alt="Heading Line"
        />
      </Container>
      <Box className="delivery-conainer">
        <Container sx={{ mb: 3 }}>
          <Grid
            container
            spacing={2}
            sx={{ ml: { md: 5, xs: 0 }, alignItems: "center" }}
          >
            <Grid item xs={12} md={5} sx={{ mt: 4 }}>
              <img src={calculate} width={"100%"} alt="DeliveryImage" />
            </Grid>
            <Grid item xs={12} md={7} sx={{ mt: { md: 5 }, pb: 6 }}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 18,
                  }}
                >
                  Pick-up Area :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: "80%" }}
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
                          p: 0,
                          "& > fieldset": {
                            border: "none",
                          },
                        },
                      }}
                      placeholder="Enter Pick-up Area"
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 18,
                  }}
                >
                  Delivery Area :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: "80%" }}
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
                  renderInput={(params, id) => (
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": { color: "green" }, //styles the label
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 18,
                  }}
                >
                  Weight (KG) :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: "80%" }}
                  value={weightValue}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      setWeightValue({
                        label: newValue,
                      });
                    } else if (newValue && newValue.inputValue) {
                      // Create a new value from the user input
                      setWeightValue({
                        label: newValue.inputValue,
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
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option.label;
                  }}
                  renderOption={(props, option) => (
                    <li {...props} key={option.label}>
                      {option.label} : {option.price}
                    </li>
                  )}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": { color: "green" }, //styles the label
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#fff",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 18,
                  }}
                >
                  Service :
                </h4>
                <Autocomplete
                  sx={{ p: 0, width: "80%" }}
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
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <h2
                  style={{
                    border: "2px solid #08A74C",
                    borderRadius: 10,
                    padding: "5px 25px",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    color: "#fff",
                  }}
                >
                  {finalPrice} Tk
                </h2>
              </Box>
              <Box>
                <ul style={{ listStyle: "none", color: "#fff" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px" }}>
                    <CheckCircleIcon sx={{ color: "green", marginRight: "5px" }} />
                    <Typography variant="span">
                      1% Cash Handling & Risk Management Charge will be added.
                    </Typography>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px" }}>
                    <CheckCircleIcon sx={{ color: "green", marginRight: "5px" }} />
                    <Typography variant="span">
                      Price may vary due to parcel size.
                    </Typography>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px" }}>
                    <CheckCircleIcon sx={{ color: "green", marginRight: "5px" }} />
                    <Typography variant="span">
                      All charges are VAT & Tax excluded.
                    </Typography>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px" }}>
                    <CheckCircleIcon sx={{ color: "green", marginRight: "5px" }} />
                    <Typography variant="span">
                      Unavoidable circumstances may change in time of delivery.
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DeliveryCalculator;
