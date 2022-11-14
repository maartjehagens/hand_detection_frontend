import React, {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";

const Challenge = () => {
    const [message, setMessage] = useState('')
    return (
        <div style={{
            justifyContent: "center",
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
            <h5>Level 1</h5>
            <h3>Beginner 1</h3>
            <ButtonGroup color="primary"
                         aria-label="outlined primary button group">
                <Button
                    onClick={()=> {
                        setMessage('Challenge - Level 1')
                    }}
                >Start</Button>
            </ButtonGroup>
            <h3>{message}</h3>
        </div>
    );
};

export default Challenge;