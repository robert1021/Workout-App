import { Container, Grid, Paper, Box, Typography, Backdrop } from "@mui/material"
import { useState } from 'react';
import CircleExitButton from "./Buttons/CircleExitButton";

const MODAL_STYLES = {
    position: 'fixed',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    maxWidth: '1000px',
    zIndex: 1000

}


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

                    <Paper>
                        <Grid container>

                            <Grid item xs={12}>

                                <Grid container>
                                    <Grid item xs={8}>
                                        <h2>Exercise Name</h2>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CircleExitButton size={'small'} func={func} />
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