import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Stack from '@mui/material/Stack';

export default function AddButton({func}) {



    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} onClick={func}>
                Add
            </Button>
        </Stack>
    )
}