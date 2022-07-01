import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material"



export default function ExerciseTextfieldsGrid({ dataset, isDisabled, func, allExerciseSetData, setAllExerciseSetData }) {


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
                        <TextField onBlur={func} disabled={isDisabled} value={dataset.weight} />

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
                        <TextField onBlur={func} disabled={isDisabled} value={dataset.reps} />

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
                        <TextField onBlur={func} disabled={isDisabled} value={dataset.rpe} />

                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}