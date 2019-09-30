import React from 'react';
import './UserInput.css';

const userInput=(props)=>{
return(
<div className="Input">
   <input onChange={props.click} value={props.username} />
</div>
);
}

export default userInput;