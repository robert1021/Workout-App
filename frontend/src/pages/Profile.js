import { Container, Grid, Paper, Button, Typography, Divider } from "@mui/material"

export default function Page() {
    return (
        <Container>
            <Grid container sx={{ marginTop: "15vh" }} spacing={1}>
                <Grid item xs={12} style={{ textAlign: "center", marginBottom: '1vh' }}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>

                        <Typography variant="h3">Profile</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{marginBottom: '1vh'}}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>

                        <Container>
                            <Grid container spacing={1}>

                                <Grid item xs={12}><Typography variant="h4">Username</Typography></Grid>
                                <Grid item xs={12}><Divider /></Grid>
                                <Grid item xs={12}><h2>Image</h2></Grid>
                                <Grid item xs={12}><h2>User type - User or Admin</h2></Grid>
                                <Grid item xs={12}><h2>User rating</h2></Grid>
                                <Grid item xs={12}><h2>Member since: Jun 2022</h2></Grid>

                            </Grid>
                        </Container>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8} >
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>

                        <Container>
                            <Grid container spacing={1}>

                                <Grid item xs={6}><Typography variant="h4">User Info</Typography></Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained">
                                        Edit profile
                                    </Button>
                                </Grid>
                                <Grid item xs={12}><Divider /></Grid>
                                <Grid item xs={12}>
                                    <h2>Email</h2>
                                </Grid>
                                <Grid item xs={12} >
                                    <h2>Age</h2>
                                </Grid>
                                <Grid item xs={12} >
                                    <h2>Weight</h2>
                                </Grid>
                                <Grid item xs={12} >
                                    <h2>Height</h2>
                                </Grid>
                                <Grid item xs={12} >
                                    <h2>Location</h2>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}