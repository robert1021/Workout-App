import { Container, Grid, Box, Paper, Button, Typography, Divider, TextField } from "@mui/material"
import ActionAreaCard from "../components/ActionAreaCard"
import placeholder from "../static/images/placeholder-image.png"

export default function Tools() {


    return (
        <Container>

            <Grid container sx={{ marginTop: "15vh" }}>

                <Grid item xs={12} style={{ textAlign: "center", marginBottom: '1vh' }}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <Typography variant="h4">Tools</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} >

                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <Container>

                            <Grid container spacing={1}>

                                <Grid item xs={12} md={6}>
                                    <ActionAreaCard
                                        image={placeholder}
                                        title={'Workout History'}
                                        description={'Short description of tool goes here...'}
                                    />


                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <ActionAreaCard
                                        image={placeholder}
                                        title={'Calendar'}
                                        description={'Short description of tool goes here...'}
                                    />


                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <ActionAreaCard
                                        image={placeholder}
                                        title={'Stats'}
                                        description={'Short description of tool goes here...'}
                                    />


                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <ActionAreaCard
                                        image={placeholder}
                                        title={'Download Workout Log'}
                                        description={'Short description of tool goes here...'}
                                    />


                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <ActionAreaCard
                                        image={placeholder}
                                        title={'Exercises'}
                                        description={'Short description of tool goes here...'}
                                    />

                                </Grid>

                            </Grid>


                        </Container>
                    </Paper>


                </Grid>

            </Grid>

        </Container>
    )
}