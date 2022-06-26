import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function EditButton({ size, width, func }) {



    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" size={size} startIcon={<EditOutlinedIcon />} onClick={func}
             sx={{ width: width, marginBottom: '10px' }}>
                Edit
            </Button>
        </Stack>
    )
}