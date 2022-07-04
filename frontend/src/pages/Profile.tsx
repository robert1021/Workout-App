// @ts-nocheck

import { Container, Grid, Box, Paper, Button, Typography, Divider, TextField } from "@mui/material"
import React, { useEffect } from "react"
import { useGlobalState } from "../components/Forms/LogInForm"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Profile: React.FC = () => {
    const token = useGlobalState('jwtToken')[0]
    const nav = useNavigate()

    useEffect(() => {
        GetProfileData()
    }, [])

    const GetProfileData = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        try {
            const res = await axios.get("http://localhost:4000/profile", {headers: headers})
            console.log(res.data)
        }
        catch(error) {
            console.log(error.response.data)
            if(error.response.data === 'Authorization Failed!') {
                nav('/Login')
            }
            

        }
        
    }
    return (
        <Container>
            <Grid container sx={{ marginTop: "15vh" }} spacing={1}>
                <Grid item xs={12} style={{ textAlign: "center", marginBottom: '1vh' }}>
                    <Paper sx={{ backgroundColor: 'whitesmoke' }} elevation={3}>
                        <Typography variant="h4">Profile</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} sx={{ marginBottom: '1vh' }}>
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
                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Paper sx={{ backgroundColor: 'whitesmoke', paddingBottom: '15px', marginBottom: '1vh' }} elevation={3}>

                        <Container>
                            <Grid container spacing={1}>

                                <Grid item xs={6}><Typography variant="h4">User Info</Typography></Grid>
                                <Grid item xs={6}>
                                    <Box
                                        display="flex"
                                        justifyContent="flex-end"
                                        alignItems="flex-end"
                                    >
                                        <Button variant="contained">
                                            Edit profile
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}><Divider /></Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="h5">
                                                Email
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                disabled
                                                label="testing"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="h5">
                                                Height
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                disabled
                                                label="testing"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="h5">
                                                Weight
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                disabled
                                                label="testing"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} >
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="h5">
                                                Location
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                disabled
                                                label="testing"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="h5">
                                                Years Trained
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                disabled
                                                label="testing"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper >
                </Grid >
            </Grid >
        </Container >
    )
}