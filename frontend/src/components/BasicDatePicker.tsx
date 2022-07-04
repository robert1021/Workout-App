// @ts-nocheck

import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { TextField } from '@mui/material'


interface Props {
    size: "small" | "normal" | undefined
    label: string | undefined
}

export const BasicDatePicker: React.FC<Props> = ({ size, label }) => {

    const [selectedDate, setSelectedDate] = useState(null)


    return (

        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            customInput={
                <TextField
                    name="noAutoFill"
                    size={size}
                    label={label}
                    InputProps={{
                        autoComplete: "off"
                    }}
                />
            }
            showYearDropdown
        />
    )
}