// @ts-nocheck

import { useState, forwardRef, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from "react";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


interface Props {
    severity: string | undefined,
    message: string,
    duration: number,
    trigger?: any
}


export const BasicSnackBar: React.FC<Props> = ({severity, message, duration, trigger }) => {
    const [open, setOpen] = useState<boolean>(true);



    const handleClose = (event: any, reason: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        trigger(false)
    };

    useEffect(() => {
        if (trigger !== undefined) {
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
