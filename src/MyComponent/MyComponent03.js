import React from 'react';

const MyComponent03 = (props) => {
    return (
        <div>
            <h1>MyComponent03</h1>
        <input onChange={props.parentMethod}></input>
        </div>
    );
}

export default MyComponent03;