import logo from '../Pictures/Home.png';
import React, {useState} from "react";
import {Button, ButtonGroup, Card} from "@mui/material";


const Info = () => {
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
                >Home</Button>
                <Button
                    onClick={()=> {
                        setMessage('You just clicked Second Button')
                    }}
                >Home</Button>
            </ButtonGroup>
            <h3>{message}</h3>
        </div>
    );
};

export default Info;