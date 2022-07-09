import React from 'react'
import { Container, Grid, Paper, Box, Stack, Typography, Button, TextField, Divider } from '@mui/material'


interface Props {
    setHistory: { date: string, time: string, exercise: string, set: string, weight: string, reps: string, rpe: string }[]
}


export const ExerciseHistory: React.FC<Props> = ({ setHistory }) => {


    return (

        <>
            <Container sx={{ marginTop: '10px' }}>
                <Grid container>

                    <Grid item xs={12}>

                        <Grid container>

                            <Grid item xs={6}>

                                <Typography variant='h5'>Date</Typography>

                            </Grid>

                        </Grid>

                        <Divider />

                    </Grid>

                    <Grid item xs={12}>
                        {/* need to use map to dynamically add sets in  */}
                        {setHistory.map((data, key) => {
                            return (

                                <div key={key}>

                                    <Grid container>

                                        <Grid item xs={4} md={6}>
                                            <Typography variant='h6'>{`Set ${data.set}`}</Typography>
                                        </Grid>

                                        <Grid item xs={8} md={6}>
                                            <Typography variant='h6'>{`${data.weight}LB x ${data.reps} Reps @ Rpe ${data.rpe}`}</Typography>
                                        </Grid>

                                    </Grid>

                                </div>
                            )
                        })}

                    </Grid>
                </Grid>
            </Container>

        </>

    )

}