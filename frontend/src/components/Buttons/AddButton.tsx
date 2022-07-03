import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Stack from '@mui/material/Stack';
import React from 'react';


interface Props {
    text?: string,
    size: "small" | "medium" | "large" | undefined,
    func: any
}

export const AddButton: React.FC<Props> = ({text, size, func}) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" size={size} startIcon={<AddCircleOutlineOutlinedIcon />} onClick={func}>
                {text}
            </Button>
        </Stack>
    )
}