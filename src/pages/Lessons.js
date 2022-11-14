import React, {useState} from "react";
import {Button, ButtonGroup} from "@mui/material";
import { IconButton } from '@mui/material';
import logo from '../Pictures/Hello.jpeg';


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
            <img src={logo}  width="320" height="290"  alt={logo}/>
        </div>
    );
};

export default Lessons;