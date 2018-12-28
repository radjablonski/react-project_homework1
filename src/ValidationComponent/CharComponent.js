import React from 'react'

const charComponent = (props) => {

    const style={
        display: 'inline-block',
        padding: '8px',
        margin: '16px', 
        border: '1px solid blue',
        textAlign: 'center'
      };


      return (
            <div style={style} onClick={props.clicked}>{props.character}</div>
    )
};

export default charComponent;