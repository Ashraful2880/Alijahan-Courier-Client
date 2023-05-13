import React from "react";
import { Box } from "@mui/system";
import { Typography } from '@mui/material';
import GetAuth from "../../../FirebaseAuth/GetAuth";
import axios from "axios";

const DashboardHome = () => {
    const { user, loading, token } = GetAuth();
    const [data, setData] = React.useState();
    const [currentUser, setCurrentUser] = React.useState("")
    const [merchant, setMerchant] = React.useState("")


    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_PATH}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setData(response.data?.find((u) => u?.email === user?.email));
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`${process.env.REACT_APP_API_PATH}/userByEmail/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setCurrentUser(response?.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`${process.env.REACT_APP_API_PATH}/merchants/${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setMerchant(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [token, user?.email])
    return (
        <Box className="dbHomeBackground" style={{ height: "93vh" }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
                    Hello <span style={{ color: "orange" }}>{currentUser?.name}</span>
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                    Welcome To <span style={{ color: "#08A74C" }}> Trust Courier Service </span>
                    <br />
                    {currentUser?.userRole} Dashboard
                </Typography>
                {currentUser?.userRole === "Merchant" && merchant?.status === "Inactive" && (<Typography variant="h5" sx={{ fontWeight: "bold", color: "yellow", mt: 3 }}>
                    Your Status Isn't Active Yet.
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "yellow" }}>Please Wait While <span style={{ color: "white" }}>Activation</span> From an Admin.
                    </Typography>
                    <Typography style={{ color: "#deddddq" }}> Thank You For Co-Operation  </Typography>
                </Typography>

                )}
            </Box>
        </Box>
    );
};

export default DashboardHome;
