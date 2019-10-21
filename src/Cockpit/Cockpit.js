import React from 'react';

const cockpit=(props)=>{
    const styles={
        backgroundColor:'green'
      }
    
    if(props.persons){
       styles.backgroundColor='red';
    }
    return(
        <div>
        <h1>Welcome to React</h1>
    <button 
    onClick={props.clicked}
    style={styles}
    > Switch Person</button>

    </div>
        
    )
}

export default cockpit;