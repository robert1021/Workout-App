import Button from '@mui/material/Button';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Stack from '@mui/material/Stack';
import React from 'react';


interface Props {
    variant?: "text" | "outlined" | "contained" | undefined,
    size?: "small" | "medium" | "large" | undefined,
    width?: string,
    func: () => void
}

export const DeleteButton: React.FC<Props> = ({ variant, size, width, func }) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant={variant} color="error" size={size} startIcon={<DeleteForeverOutlinedIcon />} onClick={func}
                sx={{ width: width, marginBottom: '10px' }}
            >
                Delete
            </Button>
        </Stack>
    )
}