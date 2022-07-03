// @ts-nocheck

import { useState } from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";


interface Props {
    title: string,
    allExerciseSetData: any,
    setAllExerciseSetData: any
}

export const WorkoutAccordion: React.FC<Props> = ({ title, allExerciseSetData, setAllExerciseSetData }) => {


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: string | boolean | ((prevState: boolean) => boolean)) => (isExpanded: any) => {
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
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0, textDecorationLine: 'underline' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Put something else here! </Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {/* <ExerciseTextfieldsGrid /> */}


                    {/* {allExerciseSetData.map((data, key) => {

                        if (data.exercise !== title) return null

                        return (
                            <Typography key={key}>{data.set}</Typography>
                        )
                    })} */}

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
