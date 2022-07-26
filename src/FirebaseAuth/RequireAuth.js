import { CardMedia } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import GetAuth from "./GetAuth";

const RequireAuth = ({ children }) => {
	const [user, loading] = GetAuth();
	const location = useLocation();
	if (loading) {
		return (
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}>
				<CardMedia
					image='/loading.png'
					alt='loading logo'
					className='loading-logo'
					sx={{
						width: 170,
						height: 170,
					}}
				/>
			</div>
		);
	}
	if (!user) {
		return (
			<>
				<Navigate to={"/login"} state={{ from: location }} replace />
			</>
		);
	}

	return children;
};

export default RequireAuth;
