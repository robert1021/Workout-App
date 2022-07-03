import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material"


export default function ExerciseTextfieldsGrid({ dataset, isDisabled, func, allExerciseSetData, setAllExerciseSetData }) {

    const [weight, setWeight] = useState(dataset.weight)
    const [reps, setReps] = useState(dataset.reps)
    const [rpe, setRpe] = useState(dataset.rpe)


    const handleEdit = (e) => {

        let copy = [...allExerciseSetData]

        const updated = copy.map((obj) => {
            // if exercise and set
            if (obj.id === dataset.id) {
                return {
                    ...obj,
                    weight: weight,
                    reps: reps,
                    rpe: rpe
                }   
            }
            return obj
        })

        setAllExerciseSetData(updated)

    }

    return (

        <Grid container>

            <Grid item xs={12} sx={{ marginTop: '10px' }}>
                <Grid container>

                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '25%' }}>
                            <Typography variant="h4">Weight</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField onBlur={handleEdit} disabled={isDisabled} value={weight} onChange={(e) => setWeight(e.target.value)} />

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
                        <TextField onBlur={handleEdit} disabled={isDisabled} value={reps} onChange={(e) => setReps(e.target.value)} />

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
                        <TextField onBlur={handleEdit} disabled={isDisabled} value={rpe} onChange={(e) => setRpe(e.target.value)} />

                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}