import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Button } from "@mui/material";

const Tracking = ({ data, setShow }) => {
	console.log(data);
	const allStatus = [
		{ id: 1, status: "Pickup Request Pending" },
		{ id: 2, status: "Pickup Request Accepted" },
		{ id: 3, status: "Assigned for Pickup" },
		{ id: 4, status: "Accepted by Pickup Rider" },
		{ id: 5, status: "Parcel Received By Pickup Rider" },
		{ id: 6, status: "Delivered To Branch By Pickup Rider" },
		{ id: 7, status: "Received in Pickup Branch" },
		{ id: 8, status: "Delivered To Warehouse" },
		{ id: 9, status: "Parcel Received On Warehouse" },
		{ id: 10, status: "Delivered To Receiver Branch" },
		{ id: 11, status: "Received in Receiver Branch" },
		{ id: 12, status: "Assigned Rider For Delivery" },
		{ id: 13, status: "Accepted By Delivery Rider" },
		{ id: 14, status: "Parcel Received By Delivery Rider" },
		{ id: 15, status: "Delivered To Customer By Rider" },
	];

	const idIndex = allStatus?.map((obj) => obj.status).indexOf(data?.status);

	return (
		<div>
			<Timeline position='alternate'>
				{allStatus?.map((s, i) => (
					<>
						{data?.status === s?.status ? (
							<TimelineItem sx={{ color: "green" }}>
								<TimelineOppositeContent
									sx={{ m: "auto 0" }}
									align='right'
									variant='body2'
									color='text.secondary'>
									{s?.statusUpdateTime || ""}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<Button
										variant='contained'
										sx={{
											borderRadius: "50%",
											backgroundColor: "green",
											my: 1,
										}}>
										{s?.id}
									</Button>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: "12px", px: 2 }}>
									<Typography variant='h6'>{s?.status}</Typography>
								</TimelineContent>
							</TimelineItem>
						) : (
							<TimelineItem sx={{ color: i < idIndex ? "green" : "gray" }}>
								<TimelineOppositeContent
									sx={{ m: "auto 0" }}
									align='right'
									variant='body2'
									color='text.secondary'>
									{i > idIndex && <HourglassBottomIcon />}
									{i < idIndex && <CheckCircleIcon sx={{ color: "green" }} />}
								</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineConnector />
									<Button
										variant='contained'
										sx={{
											borderRadius: "50%",
											backgroundColor: i < idIndex ? "green" : "gray",
											my: 1,
										}}>
										{s?.id}
									</Button>

									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent sx={{ py: "12px", px: 2 }}>
									<Typography variant='h6'>{s?.status}</Typography>
								</TimelineContent>
							</TimelineItem>
						)}
					</>
				))}
			</Timeline>
			<Button
				onClick={() => setShow(false)}
				variant='contained'
				color='success'
				sx={{ padding: "10px 0px", fontSize: "15px" }}>
				<Typography> Back </Typography>
			</Button>
		</div>
	);
};

export default Tracking;