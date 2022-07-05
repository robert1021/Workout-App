import { useState } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material"
import React from "react";

interface Props {
    // neeed to fix types for objects
    dataset: any,
    isDisabled: boolean,
    allExerciseSetData: any,
    setAllExerciseSetData: any
    
}


export const ExerciseTextfieldsGrid: React.FC<Props> = ({dataset, isDisabled, allExerciseSetData, setAllExerciseSetData }) => {

    const [weight, setWeight] = useState(dataset.weight)
    const [reps, setReps] = useState(dataset.reps)
    const [rpe, setRpe] = useState(dataset.rpe)


    const handleEdit = () => {
      
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

        <Grid container sx={{paddingTop: '25px', paddingBottom: '25px'}}>

            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>
                <Grid container justifyContent="center" alignItems="center" spacing={0}>

                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
                            <Typography variant="h4">Weight</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField onBlur={handleEdit} disabled={isDisabled} value={weight} onChange={(e) => setWeight(e.target.value)} />

                    </Grid>
                </Grid>


            </Grid>

            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>
                <Grid container justifyContent="center" alignItems="center" spacing={0}>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
                            <Typography variant="h4">Reps</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField onBlur={handleEdit} disabled={isDisabled} value={reps} onChange={(e) => setReps(e.target.value)} />

                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} md={4} sx={{ marginTop: '10px' }}>
                <Grid container justifyContent="center" alignItems="center" spacing={0}>
                    <Grid item xs={4}>
                        <Box display="flex" justifyContent="flex-end" sx={{ paddingRight: '15px' }}>
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