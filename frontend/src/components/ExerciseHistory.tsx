import React from 'react'
import { Container, Grid, Paper, Box, Stack, Typography, Button, TextField, Divider } from '@mui/material'


interface Props {
    setHistory: {
        date: string,
        time: string,
        exercise: string,
        set: string,
        weight: string,
        reps: string,
        rpe: string,

    },


}


export const ExerciseHistory: React.FC<Props> = ({ setHistory }) => {


    return (

        <>
            <Container>
                <Grid container>


                    <Grid item xs={12}>

                        <Grid container>


                            <Grid item xs={6}>

                                <Typography>{setHistory.exercise}</Typography>

                            </Grid>

                            <Grid item xs={6}>

                                <Typography>{setHistory.date}</Typography>


                            </Grid>



                        </Grid>


                        <Divider />

                    </Grid>


                    {/* need to use map to dynamically add sets in  */}


                </Grid>
            </Container>



        </>

    )

}