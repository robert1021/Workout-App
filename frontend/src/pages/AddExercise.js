import { Container, Grid, Paper, Box, Stack, Typography, Button, TextField, Divider } from "@mui/material"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import CircleCheckButton from "../components/Buttons/CircleCheckButton";
import CircleExitButton from "../components/Buttons/CircleExitButton";
import AddButton from "../components/Buttons/AddButton";
import BasicSearchBar from "../components/BasicSearchBar";
import BasicSnackBar from "../components/Notifications/BasicSnackBar";
import ExerciseAccordion from "../components/ExerciseAccordion";
import axios from "axios";

const time = new Date().toLocaleString().split(', ');
const date = time[0]
const currlocal = time[1]


export default function AddExercise() {

    const [id, setId] = useState(1)
    const [showSnackBar, setShowSnackBar] = useState(false)
    const [exercises, setExercises] = useState([])
    const [searchBarValue, setSearchBarValue] = useState('')
    const [weightValue, setWeightValue] = useState('')
    const [repsValue, setRepsValue] = useState('')
    const [rpeValue, setRpeValue] = useState('')

    // array of objects that holds set data
    const [allSetData, setAllSetData] = useState([])

    useEffect(() => {
        getExercises()
    }, [])

    const getSetData = () => {

        
        let count = 1

        for (let set of allSetData) {
            // id ++
            if (set.exercise === searchBarValue) {
                count++
            }
        }

        const data = {
            id: id,
            exercise: searchBarValue,
            set: count,
            weight: weightValue,
            reps: repsValue,
            rpe: rpeValue
        }

        const newId = id + 1
        setId(newId)
        setShowSnackBar(true)

        return data
    }

    const getExercises = async() => {
        try {
            const res = await axios.get("http://localhost:4000/workout/getNames")
            setExercises(res.data.exercises)
            
        }
        catch {
            console.log("Error getting exercises")
        }
    }

    // use this to get an array of unique values from array of objects
    // 
    const getChosenExercises = () => {
        return [...new Set(allSetData.map((item) => item.exercise))]
    }

    const navigate = useNavigate()

    const navigateToExercise = () => {

        navigate('/exercise');
    };

    // run this function to send all set data to database 
    const doneAddingSetData = async () => {
        console.log(allSetData)
        try {
            await axios.post("http://localhost:4000/workout/log", { log: allSetData })
            console.log("Workout posted")
        }
        catch {
            console.log("Nope, not working")
        }

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

                        {getChosenExercises().map((data, key) => {

                            // if (data.set > 1) return null

                            return (
                                <ExerciseAccordion title={data} key={key} allExerciseSetData={allSetData} setAllExerciseSetData={setAllSetData} />
                            )
                        })}

                    </Grid>

                </Grid>

                {showSnackBar && <BasicSnackBar severity={'success'} message='Set added!' duration={250} trigger={setShowSnackBar} />}

            </Paper>

        </Container>


    )
}