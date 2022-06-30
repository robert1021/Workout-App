import { useState } from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material"
import ExerciseTextFieldsGrid from "./ExerciseTextfieldsGrid"
import ExerciseTotalVolume from "./ExerciseTotalVolume";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ExerciseAccordion({ title, allExerciseSetData, setAllExerciseSetData }) {


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                    <ExerciseTotalVolume title={title} allExerciseSetData={allExerciseSetData}/>
                </AccordionSummary>
                <AccordionDetails>

                    {allExerciseSetData.map((data, key) => {

                        if (data.exercise !== title) return null

                        return (
                            <div key={key}>
                                <Typography variant="h4">{`Set ${data.set}`}</Typography>
                                <Divider />
                                <ExerciseTextFieldsGrid
                                    
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
