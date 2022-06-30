import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Box, Typography } from "@mui/material"
import AddButton from "../components/Buttons/AddButton"
import WorkoutAccordion from '../components/WorkoutAccordion';
import BasicSearchBar from '../components/BasicSearchBar';

export default function Excerise() {

    const navigate = useNavigate();

    const navigateToAddExercise = () => {
        
        navigate('/add-exercise');
      };

    const [searchBarValue, setSearchBarValue] = useState('')

    // test data - This should come from our database
    const dataArray = [
        { date: 'Saturday June 25 2022' },
        { date: 'Friday June 24 2022' },
        { date: 'Wednesday June 22 2022' },
        { date: 'Tuesday June 21 2022' },
        { date: 'Monday June 20 2022' },
        { date: 'Thursday June 16 2022' },
        { date: 'Wednesday June 15 2022' },
        { date: 'Monday June 14 2022' },
        { date: 'Friday June 3 2022' },
        { date: 'Thursday June 2 2022' },
        { date: 'Monday May 30 2022' },
    ]

    return (

        <Container>

            <Grid container sx={{ marginTop: "15vh" }}>

                <Grid item xs={12} style={{ textAlign: "center", marginBottom: '1vh' }}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <Typography variant="h4">Exercise</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12}>


                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>

                        <Container>

                            <Grid container>


                                <Grid item xs={12}>

                                    <Grid container>

                                        <Grid item xs={12} sm={6}>
                                            <BasicSearchBar dataset={dataArray} datasetSearchKey={'date'} size={'large'} label={'Search workout'} setValue={setSearchBarValue}/>

                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <Box display="flex" justifyContent="flex-end">
                                                <AddButton text={'Add Workout'} size={'large'} func={navigateToAddExercise}/>
                                            </Box>
                                        </Grid>

                                    </Grid>

                                </Grid>

                                <Grid item xs={12}>

                                    {/* accordion components will be dynamically created here  */}

                                    {
                                        dataArray.map((data, key) => <WorkoutAccordion key={key} title={data.date} />)
                                    }

                                </Grid>

                            </Grid>

                        </Container>

                    </Paper>

                </Grid>

            </Grid>

        </Container>
    )
}