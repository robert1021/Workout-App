import { useState, forwardRef, useEffect } from "react";
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BasicSnackBar({ severity, message, duration, trigger }) {
    const [open, setOpen] = useState(true);



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        trigger(false)
    };

    useEffect(() => {
        if (trigger) {
            setTimeout(() => {

                trigger(false)
            }, duration)
        }
    })


    return (
        <Stack spacing={2} sx={{ width: '100%' }}>

            <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>

        </Stack>
    );
}
