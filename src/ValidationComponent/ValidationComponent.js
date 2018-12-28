import React from 'react';

const validateComponent = (props) => {

    let textChar = null;
    if(props.change > 5) {
        textChar=(<h1>long enough</h1>)
    }else {
        textChar=(<h1>short</h1>)

    }

    return (
        <div>
            <h1> text is {textChar}</h1>
        </div>
    )
};

export default validateComponent;
