import React from 'react';

const myComponent02 = (props) => {
    return  (
        <div>
        <h1>myComponent02</h1>
        <div>props.stringPar:"{props.stringPar}"</div>
        <div>props.intPar:"{props.intPar}"</div>
        <div>props.children:"{props.children}"</div>
        <div>props.method:"{props.method}"</div>
        <div>typeof props.method:"{typeof props.method}"</div>
        <button onClick={props.method}>Call the method from the parent component</button>
        </div>
     ) ;
}

export default myComponent02;