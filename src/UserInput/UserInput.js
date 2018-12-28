import React from 'react';


const userInput = (props) => {

    return (
        <div>
            <h1>Hi i am userImput</h1>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
};
export default userInput;
