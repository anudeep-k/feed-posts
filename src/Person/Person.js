import React from 'react';
import  classes from './Person.css';

const person=(props)=>{
return(
    <div className={classes.Person}>
    <p onClick={props.click}>My name is {props.fname} {props.lname}</p>
 

    <input onChange={props.change} value={props.fname} />
    </div>
)
} 

export default person; 