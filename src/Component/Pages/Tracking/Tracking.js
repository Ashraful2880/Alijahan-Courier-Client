import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import hooks from "./../../../Hooks/hooks";
import "./Tracking.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const steps = [
  { label: "Pending" },
  { label: "Accepted" },
  { label: "Assign for Pickup" },
  { label: "Picked Up" },
  { label: "Assign For Deliver" },
];
const steps1 = [
  { label: "Pending" },
  { label: "Accepted" },
  { label: "Assign for Pickup" },
  { label: "Picked Up" },
  { label: "Assign For Deliver" },
  { label: "Delivered" },
];

const steps2 = [
  { label: "Pending" },
  { label: "Accepted" },
  { label: "Assign for Pickup" },
  { label: "Picked Up" },
  { label: "Assign For Deliver" },
  { label: "Hold" },
];

const steps3 = [
  { label: "Pending" },
  { label: "Accepted" },
  { label: "Assign for Pickup" },
  { label: "Picked Up" },
  { label: "Assign For Deliver" },
  { label: "Canceled" },
];
const steps4 = [
  { label: "Pending" },
  { label: "Accepted" },
  { label: "Assign for Pickup" },
  { label: "Picked Up" },
  { label: "Assign For Deliver" },
  { label: "Returned" },
];

const Tracking = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const { baseUrl } = hooks();
  const [orderSummaray, setOrderSummaray] = useState({});
  const navigate = useNavigate();
  const [status, setStatus] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(`${baseUrl}/trackOrder?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setOrderSummaray(data?.orderSummaray);
          handleStatus(data?.orderSummaray.status);
        });
    } catch (error) {
      alert(error.message);
    }
  }, [baseUrl, id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    navigate(`/tracking/${data.trackingCode}`);
  };

  const handleStatus = (s) => {
    if (s === undefined) {
      setNoData(true);
    } else {
      setNoData(false);
      if (
        s === "Pending" ||
        s === "Accepted" ||
        s === "Assign for Pickup" ||
        s === "Picked Up" ||
        s === "Assign For Deliver"
      ) {
        setStatus(steps);
      } else if (s === "Delivered") {
        setStatus(steps1);
      } else if (s === "Hold") {
        setStatus(steps2);
      } else if (s === "Canceled") {
        setStatus(steps3);
      } else if (s === "Returned") {
        setStatus(steps4);
      }
      switch (s) {
        case "Pending":
          setActiveStep(0);
          break;
        case "Accepted":
          setActiveStep(1);
          break;
        case "Assign for Pickup":
          setActiveStep(2);
          break;
        case "Picked Up":
          setActiveStep(3);
          break;
        case "Assign For Deliver":
          setActiveStep(4);
          break;

        case "Delivered":
          setActiveStep(5);
          break;
        case "Hold":
          setActiveStep(6);
          break;

        case "Canceled":
          setActiveStep(7);
          break;
        case "Returned":
          setActiveStep(8);
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container sx={{ mt: 6, mb: 5 }}>
      <Box
        sx={{
          mb: 3,
          zIndex: "1",
          position: "relative",
        }}
      >
        <Paper sx={{ p: 4 }} elevation={3}>
          <h2
            style={{
              marginTop: 0,
              fontFamily: "Montserrat, sans-serif",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Track Your Consignment
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                placeholder="Enter Your Tracking Code"
                defaultValue={id}
                {...register("trackingCode")}
                className="tracking_input"
              />
              <button type="submit" className="searchBtn">
                <SearchIcon className="searchIcon" />
              </button>
            </Box>
          </form>
        </Paper>
      </Box>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <CircularProgress color="success" />
        </Box>
      )}
      {noData && (
        <Box>
          <p style={{ textAlign: "center", fontSize: 20, fontWeight: 700 }}>
            No Data Found
          </p>
        </Box>
      )}
      {/* tracking steps */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {status.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Typography>{orderSummaray?.date}</Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
    </Container>
  );
};

export default Tracking;
