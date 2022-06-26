import Button from '@mui/material/Button';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Stack from '@mui/material/Stack';

export default function DeleteButton({ size, width, func }) {



    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="error" size={size} startIcon={<DeleteForeverOutlinedIcon />} onClick={func}
                sx={{ width: width, marginBottom: '10px' }}
            >
                Delete
            </Button>
        </Stack>
    )
}