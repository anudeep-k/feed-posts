import React from 'react';
import  './Person.css';

const person=(props)=>{
return(
    <div className="Person">
    <p onClick={props.click}>My name is {props.fname} {props.lname}</p>
    {props.children}

    <input onChange={props.change} value={props.name} />
    </div>
)
} 

export default person; 