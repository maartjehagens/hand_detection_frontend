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
                        setMessage('Improve your expressive Skills by fingerspelling the words displayed on the screen.')
                    }}
                >Signing</Button>
                <Button
                    onClick={()=> {
                        setMessage('Improve your receptive skills by watching a signer fingerspell words and typing what you see.')
                    }}
                >Recognition</Button>
            </ButtonGroup>
            <h3>{message}</h3>
        </div>
    );
};

export default Info;