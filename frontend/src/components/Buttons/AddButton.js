import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Stack from '@mui/material/Stack';

export default function AddButton({text, size, func}) {



    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" size={size} startIcon={<AddCircleOutlineOutlinedIcon />} onClick={func}>
                {text}
            </Button>
        </Stack>
    )
}