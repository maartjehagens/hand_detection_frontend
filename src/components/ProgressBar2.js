 import React from 'react';
 import ProgressBar from "./ProgressBar";

const containerStyle = {
    border: '1px solid silver',
    background: '#ededed'
};

const contentStyle = {
    background: '#00cc00',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    fontFamily: 'sans-serif',
    transition: '0.3s'
};

 const ProgressBar2 = ({progress}) => {
    const state = `${progress}%`;
    return (
        <div style={containerStyle}>
            <div style={{...contentStyle, width: state}}>
                {progress > 5 ? state : ''}
            </div>
        </div>
    );
};

    
export default ProgressBar2