import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React from 'react';


interface Props {
    variant?: "text" | "outlined" | "contained" | undefined,
    size?: "small" | "medium" | "large" | undefined,
    width?: string,
    func: () => void 
}


export const EditButton: React.FC<Props> = ({ variant, size, width, func }) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant={variant} color="primary" size={size} startIcon={<EditOutlinedIcon />} onClick={func}
             sx={{ width: width, marginBottom: '10px' }}>
                Edit
            </Button>
        </Stack>
    )
}