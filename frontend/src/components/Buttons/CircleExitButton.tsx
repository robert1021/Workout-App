import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
    size?: "small" | "medium" | "large" | undefined;
    func?: () => void;
}

export const CircleExitButton: React.FC<Props> = ({size, func}) => {

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="error" size={size} onClick={func}
                sx={{ borderRadius: 28 }}
            >
                <CloseOutlinedIcon />
            </Button>
        </Stack>
    )
}
