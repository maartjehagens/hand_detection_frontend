import React, {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";
import { IconButton } from '@mui/material';


const Lessons = () => {
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
                        setMessage('Letters A-H ' +
                            '             Letters I-P ' + 
                            '             Letters Q-Z')
                    }}
                >Letters</Button>
                <Button
                    onClick={()=> {
                        setMessage('Numbers 1-9')
                    }}
                >Nummers</Button>
            </ButtonGroup>
            <IconButton
                onClick={()=> {
                    setMessage('What is Fingerspelling....')
                }}
            >Intro</IconButton>
            <h3>{message}</h3>
        </div>
    );
};

export default Lessons;