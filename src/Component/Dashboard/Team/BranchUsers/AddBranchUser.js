import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};
const AddBranchUser = ({ open, handleClose }) => {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ borderBottom: "1px solid gray", paddingBottom: "6px" }}>
                            Create New Branch User
                        </Typography>
                        <Box sx={{ marginTop: "15px" }}>
                            <TextField
                                helperText="Name"
                                id="demo-helper-text-aligned"
                                type="text"
                                name="name"
                                label="Branch Name" />
                            <TextField
                                helperText="Full Address"
                                id="demo-helper-text-aligned"
                                type="text"
                                name="address"
                                label="Branch Address" />
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default AddBranchUser;