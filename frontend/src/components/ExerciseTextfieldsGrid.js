import { useState } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material"



export default function ExerciseTextfieldsGrid( dataset ) {

    const exerciseSetData = {
        weight: 200,
        reps: 10,
        rpe: 5
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
                        <TextField disabled defaultValue={exerciseSetData.weight}/>

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
                        <TextField disabled defaultValue={exerciseSetData.reps} />

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
                        <TextField disabled defaultValue={exerciseSetData.rpe} />

                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}