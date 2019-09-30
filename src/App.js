import React, {Component} from 'react';

import Useroutput from './UserOutput/UserOutput';
import Userinput from './UserInput/UserInput';



class App extends Component {
// state={
//   person:[
//     {fname:"Anudeep", lname:"Kartham"},
//     {fname:"Sachin", lname:"Tendulkar"},
//     {fname:"Rafa",lname:"Nadal"}
//   ]
// }

// switchPersonHandler=(newName)=>{
//   console.log("Clicked!");
//   this.setState({
//     person:[
//       {fname:newName, lname:"Kartham"},
//       {fname:"Sachin", lname:"Tendulkar"},
//       {fname:"Rafael",lname:"Nadal"}
//     ]
//   }
    
//   )
// }

// changedHandler=(event)=>{
//   this.setState({
//     person:[
//       {fname:"Dileep", lname:"Kartham"},
//       {fname:event.target.value, lname:"Tendulkar"},
//       {fname:"Rafael",lname:"Nadal"}
//     ]
//   }
    
//   )

// }


//   render (){
   
//     return(
//    <div>
//      <h1>Welcome to React</h1>
//      <button onClick={this.switchPersonHandler.bind(this,"Anudeep!")}>Switch Person</button>
//      <Person 
//      fname={this.state.person[0].fname} 
//      lname={this.state.person[0].lname}/>
//      <Person 
//      fname={this.state.person[1].fname} 
//      lname={this.state.person[1].lname}
//      click={()=>this.switchPersonHandler("Anudeep!!!!")}
//      change={this.changedHandler}> People call me GOAT</Person>
//      <Person 
//      fname={this.state.person[2].fname} 
//      lname={this.state.person[2].lname}/>
//    </div>
//     );

    
  
//   }
state={
  username: "Anudeep Kartham"

  
}

changeStateHandler=(event)=>{
  this.setState({
    username: event.target.value
  });
}
  
render(){
  return(
    <div>
      <Useroutput username={this.state.username} />
      <Userinput username={this.state.username} click={this.changeStateHandler} />
    </div>

  );
}
 
    z 
  }
 





export default App;
//ReactDOM.render(<App />, document.getElementById('root'))

