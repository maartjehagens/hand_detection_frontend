import * as React from "react";
import {Button, ButtonGroup} from "@mui/material";
import {Label} from "semantic-ui-react";


const Settings = () => {
const [value, setValue] = React.useState(false);

const handleChange = () => {
    setValue(!value);
};
     return (
        <div>
            <RadioButton
                label="Left-Handed"
                value={value}
                onChange={handleChange}
            />
            <div>
            <RadioButton
                label="Right-Handed"
                value={value}
                onChange={handleChange}
            />
            </div>
        </div>
    );
};
const RadioButton = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default Settings;