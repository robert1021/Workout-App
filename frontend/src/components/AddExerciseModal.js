import { Container, Grid, Paper, Box, Stack, Typography, Backdrop, Button, TextField, Divider } from "@mui/material"
import { useState } from 'react';
import CircleCheckButton from "./Buttons/CircleCheckButton";
import CircleExitButton from "./Buttons/CircleExitButton";
import EditButton from "./Buttons/EditButton";
import AddButton from "./Buttons/AddButton";
import BasicSearchBar from "./BasicSearchBar";
import BasicSnackBar from "./Notifications/BasicSnackBar";


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


const exercises = [
    { name: 'Squat' },
    { name: 'Bench press' },
    { name: 'Barbell row' },
    { name: 'Deadlift' }
]



export default function AddExerciseModal({ open, func }) {


    const [backdropOpen, setBackDropOpen] = useState(false);

    const handleClose = () => {
        setBackDropOpen(false);
    };

    const handleToggle = () => {
        setBackDropOpen(!backdropOpen);
    };

    const [showSnackBar, setShowSnackBar] = useState(false)

    const [searchBarValue, setSearchBarValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [repsValue, setRepsValue] = useState('')
    const [rpeValue, setRpeValue] = useState('')

    // array of objects that holds set data
    const setData = []

    const getSetData = () => {
        const data = {
            exercise: searchBarValue,
            weight: weightValue,
            reps: repsValue,
            rpe: rpeValue
        }
        setShowSnackBar(true)
        console.log(data)
        return data
    }

    if (!open) return null

    return (

        <>


            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                onClick={handleClose}
            >

                <Container style={MODAL_STYLES}>
                    <Paper elevation={3} >
                        <Grid container sx={{ paddingLeft: '10px', paddingRight: '10px' }}>

                            <Grid item xs={12} sx={{ marginTop: '10px', marginBottom: '5px' }}>

                                <Grid container>
                                    <Grid item xs={8}>
                                        <BasicSearchBar dataset={exercises} datasetSearchKey={'name'} size={"normal"} label={'Search exercise'} setValue={setSearchBarValue} />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ marginTop: '5px' }}>
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

                            <Grid item xs={12} sx={{ marginTop: '10px' }}>


                                <Grid container>

                                    <Grid item xs={6}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '25%' }}>
                                            <Typography variant="h4">Weight</Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => setWeightValue(e.target.value)} />

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '10px' }}>

                                <Grid container>

                                    <Grid item xs={6}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '25%' }}>
                                            <Typography variant="h4">Reps</Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => setRepsValue(e.target.value)} />

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '10px' }}>


                                <Grid container>

                                    <Grid item xs={6}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '25%' }}>
                                            <Typography variant="h4">RPE</Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField onChange={(e) => setRpeValue(e.target.value)} />

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} sx={{ paddingBottom: '10px', paddingTop: '10px' }}>

                                <Divider />

                            </Grid>

                            <Grid item xs={12} sx={{ marginBottom: '5px' }}>

                                <Grid container>

                                    <Grid item xs={8}>

                                        <Stack
                                            direction="row"
                                            alignItems="baseline"
                                        >
                                            <AddButton text={'Add Set'} size={'small'} func={() => setData.push(getSetData())} />
                                            <EditButton variant={'outlined'} size={'small'} />

                                        </Stack>

                                    </Grid>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ marginRight: '10px' }}>

                                            <CircleCheckButton size={'small'} />


                                        </Box>

                                    </Grid>

                                </Grid>

                            </Grid>


                        </Grid>

                        {showSnackBar && <BasicSnackBar severity={'success'} message='Set added!' duration={500} trigger={setShowSnackBar} />}

                    </Paper>

                </Container>
            </Backdrop>



        </>

    )
}