import React, {useState, useEffect} from "react";
import {Button, ButtonGroup} from "@mui/material";
import { IconButton } from '@mui/material';
import logo from '../Pictures/Hello.jpeg';
import ProgressBar from "../components/ProgressBar";

const Lessons = () => {
    const [message, setMessage] = useState('')
    const [value, setValue] = useState(0);
    const progressBarColor = "#F5CF97";
    const [progress, setProgress] = React.useState(25);
    
    return (
        <div style={{
            justifyContent: "center",
            margin: 'auto',
            display: 'block',
            width: 'fit-content'
        }}>
            <ProgressBar />

            <div>
                <ProgressBar progress={progress}  value={progress} completed={progress}/>
                <br />
                <div>
                    <button onClick={() => setProgress(0)}>0%</button>
                    <button onClick={() => setProgress(5)}>5%</button>
                    <button onClick={() => setProgress(15)}>15%</button>
                    <button onClick={() => setProgress(50)}>50%</button>
                    <button onClick={() => setProgress(75)}>75%</button>
                    <button onClick={() => setProgress(100)}>100%</button>
                </div>
            </div>
        
            
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