import { useState } from "react";
import { Grid, Box, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteButton from "./Buttons/DeleteButton";
import EditButton from "./Buttons/EditButton";

export default function ExerciseAccordion({ title }) {
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
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0, textDecorationLine: 'underline'}}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Put something else here! </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>


                        <Grid item xs={12} sm={8}>

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

                        </Grid>

                    </Grid>

                </AccordionDetails>
            </Accordion>


        </div>
    );
}
