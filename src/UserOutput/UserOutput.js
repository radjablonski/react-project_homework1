import React from 'react';


const userOutput = (props) => {

    const style = {
        backgroundColor: "#ccc"
    }

    const input = {
        backgroundColor: 'white',
        font: 'ingerit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'

    }
    return (
        <div>
            <p style={style}>I am in the userOutPut component paragraph1 {props.name}</p>
            <p style={input}>I am in the userOutPut component paragraph1 {props.name}</p>

        </div>
    )
};

export default userOutput;