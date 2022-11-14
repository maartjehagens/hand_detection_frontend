import * as React from "react";


const Settings = () => {
const [leftHand, setLeftHand] = React.useState(false);
const [rightHand, setRightHand] = React.useState(false);

const handleChangeLeft = () => {
    setLeftHand(!leftHand);
};

    const handleChangeRight = () => {
        setRightHand(!rightHand);
    };
     return (
        <div>
            <RadioButton
                label="Left-Handed"
                value={leftHand}
                onChange={handleChangeLeft}
            />
            <div>
            <RadioButton
                label="Right-Handed"
                value={rightHand}
                onChange={handleChangeRight}
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