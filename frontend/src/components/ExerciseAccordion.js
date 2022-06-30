import { useState } from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from "@mui/material"
import ExerciseTextFieldsGrid from "./ExerciseTextfieldsGrid"
import ExerciseTotalVolume from "./ExerciseTotalVolume";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteButton from "./Buttons/DeleteButton"
import EditButton from "./Buttons/EditButton";



export default function ExerciseAccordion({ title, allExerciseSetData, setAllExerciseSetData }) {

    // handle the state of all TextFields - enabled or disabled
    const [inputDisabled, setInputDisabled] = useState(true)

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const handleEditButtonClick = (e) => {
        setInputDisabled(!inputDisabled)
    }


    return (
        <div style={{ marginTop: '2vh', marginBottom: '1vh' }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h4" sx={{ width: '33%', flexShrink: 0, textDecorationLine: 'underline' }}>
                        {title}
                    </Typography>
                    <ExerciseTotalVolume title={title} allExerciseSetData={allExerciseSetData} />
                </AccordionSummary>
                <AccordionDetails>

                    <Grid container>

                        <Grid item xs={12}>
                            
                            <EditButton func={handleEditButtonClick}/>


                        </Grid>



                    </Grid>

                    {allExerciseSetData.map((data, key) => {

                        if (data.exercise !== title) return null

                        return (
                            <div key={key}>
                                <Grid container>

                                    <Grid item xs={6}>
                                        <Typography variant="h4">{`Set ${data.set}`}</Typography>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <DeleteButton />
                                    </Grid>
                                </Grid>

                                <Divider />
                                <ExerciseTextFieldsGrid
                                    isDisabled={inputDisabled}
                                    dataset={data}
                                    allExerciseSetData={allExerciseSetData}
                                    setAllExerciseSetData={setAllExerciseSetData}
                                />
                            </div>

                        )
                    })}

                    {/* <Grid item xs={12} sm={8}>

                            <Typography>
                                All exercises done for the day will go here. They should be listed out specifying weight, sets, and reps.
                            </Typography>

                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Box display="flex" justifyContent="flex-end">
                                <EditButton variant={'contained'} size={'small'} width={'100px'} />
                            </Box>
                            <Box display="flex" justifyContent="flex-end">
                                <DeleteButton size={'small'} width={'100px'} />
                            </Box>

                        </Grid> */}


                </AccordionDetails>
            </Accordion>


        </div>
    );
}
