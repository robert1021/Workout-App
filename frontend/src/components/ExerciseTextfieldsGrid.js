import { useState } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material"



export default function ExerciseTextfieldsGrid( { dataset, isDisabled, allExerciseSetData, setAllExerciseSetData }) {

    const exercise = dataset.exercise
    const set = dataset.set
    const weight = dataset.weight
    const reps = dataset.reps
    const rpe = dataset.rpe

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
                        <TextField disabled={isDisabled} defaultValue={weight}/>

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
                        <TextField disabled={isDisabled} defaultValue={reps} />

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
                        <TextField disabled={isDisabled} defaultValue={rpe} />

                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}