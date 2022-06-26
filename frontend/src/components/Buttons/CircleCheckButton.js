import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Stack from '@mui/material/Stack';

export default function CircleCheckButton({ size, func }) {



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