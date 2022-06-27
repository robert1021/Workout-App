import { TextField, Stack, Autocomplete, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export default function BasicSearchBar({ dataset, datasetSearchKey, size, label, setValue }) {


    const handleTextFieldOnChange = (e) => {
        setValue(e.target.value)
    }

    const handleAutocompleteOnChange = (e) => {
        setValue(e.target.innerText)
    }

    return (
        <Stack spacing={2} sx={{ width: 300 }}>

            <Autocomplete
                onChange={handleAutocompleteOnChange}
                freeSolo
                id="search"
                disableClearable
                options={dataset.map((option) => option[datasetSearchKey])}
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