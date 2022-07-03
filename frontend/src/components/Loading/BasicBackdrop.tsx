import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useState, useEffect } from "react";


interface Props {
    timer: number
}


export const BasicBackdrop: React.FC<Props> = ({ timer }) => {
    const [showBackDrop, setShowBackdrop] = useState<boolean>(true)

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