import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { MySelectProps } from "../../App";



function SelectInput({ Label, Options, SelectedValue, HandleChange }: MySelectProps) {
    return (
        <div>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id={`label-${Label}`}>{Label}</InputLabel>
                <Select
                    labelId={`label-${Label}`}
                    value={SelectedValue}
                    onChange={HandleChange}
                    label={Label}
                >
                    {Options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectInput;
