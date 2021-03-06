import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Stack from '@mui/material/Stack';
import React from 'react';


interface Props {
    size?: "small" | "medium" | "large" | undefined,
    func: any
}

export const CircleCheckButton: React.FC<Props> = ({ size, func }) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" size={size} onClick={func}
                sx={{ borderRadius: 28 }}
            >
                <CheckCircleOutlineOutlinedIcon />
            </Button>
        </Stack>
    )
}