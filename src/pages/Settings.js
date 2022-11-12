import React, {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";


const Settings = () => {
    const [message, setMessage] = useState('')

    return (
        <div style={{
            justifyContent: "center",
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
            <ButtonGroup color="primary"
                         aria-label="outlined primary button group">
                <Button
                    onClick={()=> {
                        setMessage('You just clicked First Button')
                    }}
                >Letters</Button>
                <Button
                    onClick={()=> {
                        setMessage('You just clicked Second Button')
                    }}
                >Nummers</Button>
            </ButtonGroup>
            <h3>{message}</h3>
        </div>
    );
};

export default Settings;