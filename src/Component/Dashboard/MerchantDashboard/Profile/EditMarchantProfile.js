import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
    Button,
    TextField,
    Backdrop,
    Typography,
    CircularProgress,
    Autocomplete,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Swal from "sweetalert2";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 2,
    width: { md: "50vw", sm: "70vw", xs: "90vw" },
    maxHeight: "90vh",
    overflowX: "hidden",
    overflowY: "scroll",
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: "white",
};

const EditMarchantProfile = ({ open, setOpen, currentUser, merchant }) => {
    const id = currentUser.id;
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            merchantName: "",
            merchantEmail: "",
            merchantNumber: "",
            merchantAddress: "",
            merchantBusinessAddress: "",
            merchantBranchName: "",
            merchantCompanyName: "",
            merchantArea: "",
            merchantStatus: "",
        },
    });
    const [value, setValue] = React.useState();
    const [areas, setAreas] = useState();
    const [selectedDistricts, setSelectedDistricts] = useState();
    const [warehouses, setWarehouses] = useState();
    const [warehouse, setWarehouse] = useState();
    const [districts, setDistricts] = useState();
    const [submitting, setSubmitting] = useState();
    const [data, setData] = useState();

    const onSubmit = ({
        merchantName,
        merchantEmail,
        merchantNumber,
        merchantAddress,
        merchantBusinessAddress,
        merchantBranchName,
        merchantCompanyName,
        merchantArea,
        merchantStatus,
    }) => {
        setSubmitting(true);
        axios
            .put(
                `${process.env.REACT_APP_API_PATH}/branch/${id}`,
                {
                    merchantName,
                    merchantEmail: merchantEmail.toLowercase(),
                    merchantNumber,
                    merchantAddress,
                    merchantBusinessAddress,
                    merchantBranchName,
                    merchantCompanyName,
                    merchantArea,
                    merchantStatus,
                },
                {
                    headers: {
                        Authorization: `Bearer $`,
                    },
                },
            )
            .then((response) => {
                setSubmitting(false);
                setOpen(false);
                Swal.fire("", "Successfully Updated!", "success");
            })
            .catch((error) => {
                setSubmitting(false);
                console.log(error);
            });
    };

    return (
        <div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <Box sx={style}>
                        <CancelIcon
                            onClick={() => setOpen(false)}
                            className='textColor'
                            sx={{
                                position: "fixed",
                                top: "30px",
                                right: "30px",
                                cursor: "pointer",
                                background: "White",
                                borderRadius: "50%",
                            }}
                        />
                        {data && currentUser && merchant ? (
                            <>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        mb: 3,
                                        textAlign: "left",
                                        background: "#1E793C",
                                        padding: "8px 20px",
                                        color: "#fff",
                                        borderRadius: "5px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                    <BorderColorIcon sx={{ mr: 2 }} /> Edit Merchant Profile
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            required
                                            helperText='Merchant Name'
                                            {...register("merchantName", { required: true })}
                                        />
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            multiline
                                            rows={2}
                                            helperText='Merchant Email'
                                            {...register("merchantEmail", { required: true })}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Number'
                                            {...register("merchantNumber", { required: true })}
                                        />
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Address'
                                            {...register("merchantAddress", { required: true })}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Business Address'
                                            {...register("MerchantBusinessAddress", { required: true })}
                                        />
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Branch Name'
                                            {...register("merchantBranchName", { required: true })}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Company Name'
                                            {...register("merchantCompanyName", { required: true })}
                                        />
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5 }}
                                            fullWidth
                                            helperText='Merchant Area'
                                            {...register("merchantArea", { required: true })}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", gap: "20px" }}>
                                        <TextField
                                            size='small'
                                            sx={{ my: 0.5, width: "50%" }}
                                            fullWidth
                                            helperText='Status'
                                            {...register("status", { required: true })}
                                        />
                                    </Box>
                                    <Box sx={{ my: 1 }}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='success'
                                            // className='button'
                                            sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
                                            <DoneIcon sx={{ mr: 0.5 }} />
                                            Update
                                        </Button>
                                        <Button
                                            onClick={() => setOpen(false)}
                                            type='reset'
                                            variant='contained'
                                            color='error'
                                            sx={{ my: 0.5, fontWeight: "bold", px: 1.5, mx: 1 }}>
                                            <ReplayIcon sx={{ mr: 0.5 }} />
                                            Close
                                        </Button>
                                    </Box>
                                </form>
                            </>
                        ) : (
                            <CircularProgress className='textColor' />
                        )}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default EditMarchantProfile;
