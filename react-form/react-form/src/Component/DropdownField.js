import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DropdownField = React.memo((props) => {
    const { label, id, value, onChange, options, name } = props;

    return (
        <>
        <FormControl variant="standard" sx={{minWidth: 120 }}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                label={label}
            >
                {options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </>
    );
});

export default DropdownField;
