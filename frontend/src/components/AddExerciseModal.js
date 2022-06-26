import { Container, Grid, Paper, Box, Stack, Typography, Backdrop, Button, TextField, Divider } from "@mui/material"
import { useState } from 'react';
import CircleCheckButton from "./Buttons/CircleCheckButton";
import CircleExitButton from "./Buttons/CircleExitButton";
import AddButton from "./Buttons/AddButton";

const MODAL_STYLES = {
    position: 'fixed',
    top: '275px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '350px',
    zIndex: 1000

}

const time = new Date().toLocaleString().split(', ');
const date = time[0]
const currlocal = time[1]

console.log(time);


export default function AddExerciseModal({ open, func }) {

    const [backdropOpen, setBackDropOpen] = useState(false);

    const handleClose = () => {
        setBackDropOpen(false);
    };

    const handleToggle = () => {
        setBackDropOpen(!backdropOpen);
    };

    if (!open) return null

    return (

        <>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                onClick={handleClose}
            >

                <Container style={MODAL_STYLES}>
                    <Paper elevation={3}>
                        <Grid container>

                            <Grid item xs={12}>

                                <Grid container>
                                    <Grid item xs={8}>
                                        <h2>Exercise Name</h2>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <CircleExitButton size={'small'} func={func} />
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider />
                            </Grid>

                            <Grid item xs={12}>

                                <Stack
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    spacing={1}
                                >
                                    <h3>{date}</h3>
                                    <h3>{currlocal}</h3>
                                    <Button variant="outlined">History</Button>

                                </Stack>


                            </Grid>

                            <Grid item xs={12}>

                                <Stack
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    spacing={1}
                                >
                                    <h2>Weight</h2>
                                    <TextField></TextField>

                                </Stack>

                            </Grid>

                            <Grid item xs={12}>

                                <Stack
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    spacing={1}
                                >
                                    <h2>Reps</h2>
                                    <TextField></TextField>

                                </Stack>

                            </Grid>

                            <Grid item xs={12}>

                                <Stack
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    spacing={1}
                                >
                                    <h2>RPE</h2>
                                    <TextField></TextField>

                                </Stack>

                            </Grid>

                            <Grid item xs={12}>

                                <Grid container>

                                    <Grid item xs={8}>

                                        <AddButton text={'Add Set'} size={'small'} />

                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end">
                                            <CircleCheckButton size={'small'} />
                                        </Box>

                                    </Grid>






                                </Grid>

                            </Grid>


                        </Grid>
                    </Paper>
                </Container>
            </Backdrop>



        </>

    )
}