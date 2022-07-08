import { Container, Grid, Paper, Box, Stack, Typography, Button, TextField, Divider } from "@mui/material"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CircleCheckButton } from "../components/Buttons/CircleCheckButton";
import { CircleExitButton } from "../components/Buttons/CircleExitButton";
import { AddButton } from "../components/Buttons/AddButton";
import { BasicSearchBar } from "../components/BasicSearchBar";
import { BasicSnackBar } from "../components/Notifications/BasicSnackBar";
import { ExerciseAccordion } from "../components/ExerciseAccordion";
import { BasicDatePicker } from "../components/BasicDatePicker";
import { ExerciseHistory } from '../components/ExerciseHistory'
import axios from "axios";
import React from "react";

const time = new Date().toLocaleString().split(', ');
const currlocal = time[1]

interface ExerciseData {
    id: string,
    name: string,
    bodyPart: string,
    target: string,
    equipment: string,
    gifUrl: string,
    createdAt: Date,
    updatedAt: Date

}

interface AllSetData {
    throwAwayId: number,
    id: string | null,
    exercise: string,
    set: number,
    weight: string,
    reps: string,
    rpe: string
}

interface WorkoutData {
    date: string,
    log: AllSetData[]
}

// const exercises = [
//     { name: 'squat', id: '12' },
//     { name: 'deadlift', id: '55' }

// ]

// for testing purposes - data structure to be determined
const history = [
    { date: '07/13/2022', time: '8:30pm', exercise: 'squat', set: '1', weight: '225', reps: '10', rpe: '5' },
    { date: '07/12/2022', time: '8:30pm', exercise: 'squat', set: '1', weight: '225', reps: '10', rpe: '5' },
    { date: '07/11/2022', time: '8:30pm', exercise: 'squat', set: '1', weight: '225', reps: '10', rpe: '5' },
    { date: '07/10/2022', time: '8:30pm', exercise: 'squat', set: '1', weight: '225', reps: '10', rpe: '5' },
    { date: '07/09/2022', time: '8:30pm', exercise: 'squat', set: '1', weight: '225', reps: '10', rpe: '5' },
]

export const AddWorkout: React.FC = () => {

    const [throwAwayId, setThrowAwayId] = useState<number>(1)
    const [showSnackBar, setShowSnackBar] = useState<boolean>(false)
    const [exercises, setExercises] = useState<ExerciseData[]>([])
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const [weightValue, setWeightValue] = useState<string>('')
    const [repsValue, setRepsValue] = useState<string>('')
    const [rpeValue, setRpeValue] = useState<string>('')

    // holds the date set in the date picker
    const [date, setDate] = useState<string>('')
    // array of objects that holds set data
    const [allSetData, setAllSetData] = useState<AllSetData[]>([])

    const [tabValue, setTabValue] = useState<number>(0);

    const handleTabChange = (newValue: number) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        getExercises()
    }, [])

    const getSetData = () => {


        let count: number = 1

        for (let set of allSetData) {
            if (set.exercise === searchBarValue) {
                count++

            }
        }

        // get id of exercise
        let id: null | string = null
        if (exercises.length > 0) {

            for (let item of exercises) {
                if (searchBarValue === item.name) {
                    id = item.id
                }
            }
        }

        const data: AllSetData = {
            throwAwayId: throwAwayId,
            id: id,
            exercise: searchBarValue,
            set: count,
            weight: weightValue,
            reps: repsValue,
            rpe: rpeValue
        }

        const newId: number = throwAwayId + 1
        setThrowAwayId(newId)
        setShowSnackBar(true)

        return data
    }

    const getExercises = async () => {
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

        navigate('/workouts');
    };

    // run this function to send all set data to database 
    const doneAddingSetData = async () => {

        // create final object holding data
        // date needs to be formatted ?
        // exercise id needs to be added?
        const workoutData: WorkoutData = {
            date: date,
            log: allSetData
        }

        console.log(workoutData)

        try {
            await axios.post("http://localhost:4000/workout/log", workoutData)
            console.log("Workout posted")
        }
        catch {
            console.log("Nope, not working")
        }

        navigateToExercise()
    }

    const onClickAddSetHandler = () => {
        setAllSetData([...allSetData, getSetData()])

    }

    return (
        <>
            <Container sx={{ marginTop: '15vh' }}>

                <Grid container>
                    <Grid item xs={12} style={{ textAlign: "center", marginBottom: '1vh' }}>
                        <Paper elevation={3}>
                            <Typography variant="h4">Add Workout</Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Paper elevation={3} >

                    {/* add exercise view tab */}
                    <div style={{ display: tabValue === 0 ? 'block' : 'none' }}>
                        <Grid container sx={{ paddingLeft: '10px', paddingRight: '10px' }}>


                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="flex-end" sx={{ marginTop: '5px' }}>
                                    <CircleExitButton size={'small'} func={navigateToExercise} />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '5px', marginBottom: '10px' }}>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <BasicSearchBar dataset={exercises} datasetSearchKey={'name'} size={"normal"} label={'Search exercise'} setValue={setSearchBarValue} />
                                    </Grid>

                                    <Grid item xs={6}>

                                        <Box display="flex" justifyContent="flex-end" sx={{ marginTop: '10px' }}>
                                            <Button size="large" variant="outlined" onClick={() => handleTabChange(1)}>History</Button>
                                        </Box>

                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider />
                            </Grid>

                            <Grid item xs={12} sx={{ marginTop: '10px' }}>

                                <Grid container>

                                    <Grid item xs={4}>


                                        <BasicDatePicker size={"small"} label={"Date"} setDate={setDate} />


                                    </Grid>

                                    <Grid item xs={4} alignContent={'center'}>


                                        <h5>{currlocal}</h5>


                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>


                                <Grid container justifyContent="center" alignItems="center" spacing={0}>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
                                            <Typography variant="h4" sx={{ marginTop: '5px' }}>Weight</Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField onBlur={(e) => setWeightValue(e.target.value)} />

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>

                                <Grid container justifyContent="center" alignItems="center" spacing={0}>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
                                            <Typography variant="h4" sx={{ marginTop: '5px' }}>Reps</Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField onBlur={(e) => setRepsValue(e.target.value)} />

                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>


                                <Grid container justifyContent="center" alignItems="center" spacing={0}>

                                    <Grid item xs={4}>
                                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
                                            <Typography variant="h4" sx={{ marginTop: '5px' }}>RPE</Typography>
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
                    </div>


                    {/* history tab */}
                    <div style={{ display: tabValue === 1 ? 'block' : 'none' }}>

                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="outlined" onClick={() => handleTabChange(0)}>Workout</Button>
                        </Box>

                        <h1>{searchBarValue}</h1>

                        {/* data structure to be determined - testing only */}
                        {history.map((data, key) => {

                            return (
                                <div key={key}>
                                    <ExerciseHistory setHistory={data} />
                                </div>
                            )

                        })}




                    </div>

                </Paper>

            </Container>

        </>

    )
}