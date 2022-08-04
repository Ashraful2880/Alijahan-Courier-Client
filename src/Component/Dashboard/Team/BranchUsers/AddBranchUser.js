import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CancelIcon from "@mui/icons-material/Cancel";
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useForm } from 'react-hook-form';
import { Autocomplete, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    width: { md: "50vw", sm: "70vw", xs: "90vw" },
};
const AddBranchUser = ({ open, handleClose, setOpen }) => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <Modal aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CancelIcon
                            onClick={() => setOpen(false)}
                            className='textColor'
                            sx={{
                                position: "fixed",
                                top: "45px",
                                right: "50px",
                                cursor: "pointer",
                                background: "White",
                                borderRadius: "50%"
                            }}
                        />
                        <Typography variant='h6' sx={{ fontWeight: "bold", mb: 2, textAlign: "left", background: "green", padding: "8px 20px", color: "#fff", borderRadius: "5px", display: "flex", alignItems: "center" }}>
                            <AddTaskIcon sx={{ mr: 2 }} /> Create New Branch User
                        </Typography>
                        <Box sx={{ display: "flex", gap: "20px" }}>
                            <TextField
                                size='small'
                                sx={{ my: 0.5 }}
                                fullWidth
                                required
                                label='Branch Name'
                                helperText="Branch Name"
                                {...register("branchName", { required: true })}
                            />
                            <TextField
                                size='small'
                                sx={{ my: 0.5 }}
                                fullWidth
                                required
                                multiline
                                rows={1}
                                label='Branch Address'
                                helperText="Full Address"
                                {...register("branchAddress", { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "20px" }}>
                            <Autocomplete
                                size='small'
                                sx={{ my: 0.5, width: "100% !important" }}
                                getOptionLabel={(option) => option.thana}
                                style={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...register("selectBranch", { required: true })}
                                        {...params}
                                        label='Select Branch'
                                        helperText="Select Branch"
                                        variant='outlined'
                                    />
                                )}
                            />
                            <TextField
                                type="number"
                                size='small'
                                sx={{ my: 0.5 }}
                                fullWidth
                                required
                                label='Contact Number'
                                helperText="Branch Contact Number"
                                {...register("branchContact", { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: "flex", gap: "20px" }}>
                            <TextField
                                type="email"
                                size='small'
                                sx={{ my: 0.5 }}
                                fullWidth
                                required
                                label='Branch Email'
                                helperText="Branch Email"
                                {...register("branchEmail", { required: true })}
                            />
                            <TextField
                                type="password"
                                size='small'
                                sx={{ my: 0.5 }}
                                fullWidth
                                required
                                label='Password'
                                helperText="Password"
                                {...register("password", { required: true })}
                            />
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Button
                                type='submit'
                                variant='contained'
                                color="success"
                                // className='button'
                                sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
                                <SaveIcon sx={{ mr: 0.5 }} />Save
                            </Button>
                            <Button
                                onClick={() => setOpen(false)}
                                type='reset'
                                variant='contained'
                                // className='button'
                                sx={{ my: 0.7, fontWeight: "bold", px: 1.5, mx: 1 }}>
                                <ReplayIcon sx={{ mr: 0.5 }} />Close
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default AddBranchUser;