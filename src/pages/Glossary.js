import React, {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";


const Glossary = () => {
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
                    onClick={() => {
                        setMessage('Letter A')
                    }}
                >A</Button>
                <Button
                    onClick={() => {
                        setMessage('Letter B')
                    }}
                >B</Button>
            </ButtonGroup>
            <h3>{message}</h3>
        </div>
    );
};

export default Glossary;