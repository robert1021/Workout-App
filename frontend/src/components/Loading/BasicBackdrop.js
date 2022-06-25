import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from "react";


export default function BasicBackdrop({ timer }) {
    const [showBackDrop, setShowBackdrop] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowBackdrop(false)
        }, timer)
    })

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showBackDrop}

            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}