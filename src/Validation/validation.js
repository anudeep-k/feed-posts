import React from 'react';

const validation=(props)=>{
    let msg="text too short";
    if(props.inputText.length>5){
        msg="text too long";
    }
    
return(
    <p >
        {msg}
    </p>
   
)
}
export default validation;