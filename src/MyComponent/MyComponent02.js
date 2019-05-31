import React from 'react';

const myComponent02 = (props) => {
    return  (
        <div>
        <h1>myComponent02</h1>
        <div>props.stringPar: {props.stringPar}</div>
        <div>props.intPar: {props.intPar}</div>
        <div>props.children: {props.children}</div>
        </div>
     ) ;
}

export default myComponent02;