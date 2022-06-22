import { Container, Grid, Paper, Button } from "@mui/material"

export default function Page() {
    return (
        <Container>
            <Grid container style={{ marginTop: "15vh" }} spacing={1}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}><h2>Profile Page</h2></Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <h2>Username</h2>
                        <h2>Image</h2>
                        <h2>User type - User or Admin</h2>
                        <h2>User rating</h2>
                        <h2>Member since: Jun 2022</h2>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <div>
                            <h2>User Info</h2>
                            <Button variant="contained">
                                Edit profile
                            </Button>
                        </div>

                        <Grid container spacing={1}>
                            <Grid item xs={6} >
                                <h2>Age</h2>
                            </Grid>
                            <Grid item xs={6} >
                                <h2>Weight</h2>
                            </Grid>
                            <Grid item xs={6} >
                                <h2>Height</h2>
                            </Grid>
                            <Grid item xs={6} >
                                <h2>Location</h2>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}