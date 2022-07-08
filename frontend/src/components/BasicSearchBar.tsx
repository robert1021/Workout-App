// @ts-nocheck

import { TextField, Stack, Autocomplete, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';


interface Props {
    dataset: any,
    datasetSearchKey: string,
    size?: 'small' | 'normal' | undefined,
    label: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,

}


export const BasicSearchBar: React.FC<Props> = ({ dataset, datasetSearchKey, size, label, setValue }) => {


    const handleTextFieldOnChange = (e: { target: { value: any; }; }) => {
        setValue(e.target.value)
        
    }

    const handleAutocompleteOnChange = (e: { target: { innerText: any; }; }) => {
        setValue(e.target.innerText)
    }


    return (
        <Stack spacing={2} sx={{ maxWidth: 350 }}>

            <Autocomplete
                onChange={handleAutocompleteOnChange}
                freeSolo
                id="search"
                disableClearable
                options={dataset.map((option: { [x: string]: any; }) => option[datasetSearchKey])}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        onChange={handleTextFieldOnChange}
                        size={size}
                        label={label}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
        </Stack>
    );
}