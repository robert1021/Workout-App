import Button from '@mui/material/Button';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Stack from '@mui/material/Stack';

export default function CircleExitButton({ size, func }) {



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