import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useState, useEffect } from 'react'


interface Props {
    title: string,
    allExerciseSetData: any
}


export const ExerciseTotalVolume: React.FC<Props> = ({ title, allExerciseSetData }) => {

    const [volume, setVolume] = useState<number>()

    const setTotalVolume = () => {
        let vol = 0
        for (let i of allExerciseSetData) {
            if (i.exercise === title) {
                vol = (parseInt(i.weight) * parseInt(i.reps)) + vol
            }
        }
        setVolume(vol)
    }

    useEffect(() => {
        setTotalVolume()
    })
    

    return (
        <Stack spacing={1} alignItems="center" sx={{marginTop: '7px'}}>
            <Stack direction="row" spacing={1}>
                <Chip label={`Total Volume: ${volume}`} color="info"/>
                
            </Stack>
        </Stack>
    )
}