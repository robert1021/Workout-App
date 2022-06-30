import { Container, Grid, Paper, Box, Stack, Typography, Button, TextField, Divider } from "@mui/material"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CircleCheckButton from "../components/Buttons/CircleCheckButton";
import CircleExitButton from "../components/Buttons/CircleExitButton";
import EditButton from "../components/Buttons/EditButton";
import AddButton from "../components/Buttons/AddButton";
import BasicSearchBar from "../components/BasicSearchBar";
import BasicSnackBar from "../components/Notifications/BasicSnackBar";
import ExerciseAccordion from "../components/ExerciseAccordion";

const time = new Date().toLocaleString().split(', ');
const date = time[0]
const currlocal = time[1]


const exercises = [
    { name: 'Squat' },
    { name: 'Bench press' },
    { name: 'Barbell row' },
    { name: 'Deadlift' }
]


export default function AddExercise() {

    const [showSnackBar, setShowSnackBar] = useState(false)

    const [searchBarValue, setSearchBarValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [repsValue, setRepsValue] = useState('')
    const [rpeValue, setRpeValue] = useState('')

    // array of objects that holds set data
    const [allSetData, setAllSetData] = useState([])

    const getSetData = () => {

        let count = 1

        for (let set of allSetData) {
            if (set.exercise === searchBarValue) {
                count++
            }
        }

        const data = {
            exercise: searchBarValue,
            set: count,
            weight: weightValue,
            reps: repsValue,
            rpe: rpeValue
        }
        setShowSnackBar(true)

        return data
    }

    const navigate = useNavigate()

    const navigateToExercise = () => {

        navigate('/exercise');
    };

    // run this function to send all set data to database 
    const doneAddingSetData = () => {

        console.log(allSetData)
        navigateToExercise()
    }

    const onClickAddSetHandler = (e) => {
        setAllSetData([...allSetData, getSetData()])

    }


    return (

        <Container sx={{ marginTop: '15vh' }}>
            <Paper elevation={3} >
                <Grid container sx={{ paddingLeft: '10px', paddingRight: '10px' }}>

                    <Grid item xs={12} sx={{ marginTop: '10px', marginBottom: '5px' }}>

                        <Grid container>
                            <Grid item xs={8}>
                                <BasicSearchBar dataset={exercises} datasetSearchKey={'name'} size={"normal"} label={'Search exercise'} setValue={setSearchBarValue} />
                            </Grid>

                            <Grid item xs={4}>
                                <Box display="flex" justifyContent="flex-end" sx={{ marginTop: '5px' }}>
                                    <CircleExitButton size={'small'} func={navigateToExercise} />
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
                                <TextField onBlur={(e) => setWeightValue(e.target.value)} />

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
                                <TextField onBlur={(e) => setRepsValue(e.target.value)} />

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
                                <TextField onBlur={(e) => setRpeValue(e.target.value)} />

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12} sx={{ paddingBottom: '10px', paddingTop: '10px' }}>

                        <Divider />

                    </Grid>

                    <Grid item xs={12} sx={{ marginBottom: '10px' }}>

                        <Grid container>

                            <Grid item xs={8}>

                                <Stack
                                    direction="row"
                                    alignItems="baseline"
                                >
                                    <AddButton text={'Add Set'} size={'small'} func={onClickAddSetHandler} />


                                </Stack>

                            </Grid>

                            <Grid item xs={4}>
                                <Box display="flex" justifyContent="flex-end" sx={{ marginRight: '10px' }}>

                                    <CircleCheckButton size={'small'} func={doneAddingSetData} />


                                </Box>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Grid item xs={12}>

                        {allSetData.map((data, key) => {

                            if (data.set > 1) return null

                            return (
                                <ExerciseAccordion title={data.exercise} key={key} allExerciseSetData={allSetData} setAllExerciseSetData={setAllSetData} />
                            )
                        })}

                    </Grid>

                </Grid>

                {showSnackBar && <BasicSnackBar severity={'success'} message='Set added!' duration={250} trigger={setShowSnackBar} />}

            </Paper>

        </Container>


    )
}