import React from 'react';
import { Button } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddBranchUser from './AddBranchUser';

const BranchUsers = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen} variant="contained" endIcon={<ModeEditIcon />} sx={{ marginTop: "10px" }}>
                Add Branch User
            </Button>
            <AddBranchUser open={open} handleClose={handleClose} setOpen={setOpen} />
        </div>
    );
};

export default BranchUsers;