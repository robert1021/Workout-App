// @ts-nocheck

import { useState } from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from "@mui/material"
import { ExerciseTextfieldsGrid } from "./ExerciseTextfieldsGrid"
import { ExerciseTotalVolume } from "./ExerciseTotalVolume";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DeleteButton } from "./Buttons/DeleteButton"
import { EditButton } from "./Buttons/EditButton";
import React from "react";


interface Props {
    title: string,
    allExerciseSetData: any,
    setAllExerciseSetData: any
}


export const ExerciseAccordion: React.FC<Props> = ({ title, allExerciseSetData, setAllExerciseSetData }) => {

    // handle the state of all TextFields - enabled or disabled
    const [inputDisabled, setInputDisabled] = useState<boolean>(true)

    const [expanded, setExpanded] = useState<boolean>(false);

    const handleChange = (panel: string | boolean | ((prevState: boolean) => boolean)) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };


    const handleEditButtonClick = () => {
        setInputDisabled(!inputDisabled)
    }

    const handleDeleteButtonClick = (key: number, exercise: any) => {

        // make a copy
        let allExerciseSetDataCopy = [...allExerciseSetData]
        allExerciseSetDataCopy.splice(key, 1)

        // need to renumber sets
        const filterdArray = allExerciseSetDataCopy.filter((item) => {
            return item.exercise === exercise
        })

        const newSetNumbers: [] = []
        for (let i = 1; i < filterdArray.length; i++) {
            newSetNumbers.push(i)
        }

        let count = 1
        for (let i in allExerciseSetDataCopy) {
            if (allExerciseSetDataCopy[i].exercise === exercise) {
                allExerciseSetDataCopy[i].set = count
                count++
            }
        }

        setAllExerciseSetData(allExerciseSetDataCopy);
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

                            <EditButton func={handleEditButtonClick} />

                        </Grid>

                    </Grid>

                    {allExerciseSetData.map((data: { exercise: string; id: React.Key | null | undefined; set: any; }, key: any) => {

                        if (data.exercise !== title) return null

                        return (
                            <div key={data.id}>
                                <Grid container>

                                    <Grid item xs={6}>
                                        <Typography variant="h4">{`Set ${data.set}`}</Typography>

                                    </Grid>

                                    <Grid item xs={6}>
                                        <DeleteButton func={() => handleDeleteButtonClick(key, data.exercise)} />
                                    </Grid>
                                </Grid>

                                <Divider />
                                <ExerciseTextfieldsGrid
                                    dataset={data}
                                    isDisabled={inputDisabled}
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
