import React from 'react';
import './UserOutput.css' 
const userOutput=(props)=>{
return(
<div className="Output">
    {props.username} Logged in!
   <p>
    This is UserOutput1 
   </p>
   
   <p>
    This is UserOutput2
   </p>
</div>
);
}

export default userOutput;
