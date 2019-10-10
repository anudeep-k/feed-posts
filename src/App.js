import React, {Component} from 'react';
import Person from './Person/Person';




class App extends Component {
state={
  person:[
    {id:"1",fname:"Anudeep", lname:"Kartham"},
    {id:"2",fname:"Sachin", lname:"Tendulkar"},
    {id:"3",fname:"Rafa",lname:"Nadal"}
  ],
  otherState : false
}

switchPersonHandler=(newName)=>{
  console.log("Clicked!");
  this.setState({
    person:[
      {fname:newName, lname:"Kartham"},
      {fname:"Sachin", lname:"Tendulkar"},
      {fname:"Rafael",lname:"Nadal"}
    ]
  }
    
  )
}

changedHandler=(event,id)=>{
  console.log(id);
  const personIndex=this.state.person.findIndex((p)=>{
    return p.id===id;
  })

  const personChanged ={
    ...this.state.person[personIndex]
  };
  
  personChanged.fname=event.target.value;
  const person1=[...this.state.person];

  person1[personIndex]=personChanged;
  this.setState({
    person:person1
  })
  
  console.log(personChanged) ;
  
  // this.setState({
  //   person:[
  //     {fname:event.target.value, lname:"Kartham"},
  //     {fname:event.target.value, lname:"Tendulkar"},
  //     {fname:"Rafael",lname:"Nadal"}
  //   ]
  // }
    
  // )

}
deletePersonHandler=(personIndex)=>{
 
  // const person=this.state.person.slice();
 const person=[...this.state.person]
  person.splice(personIndex,1);
  this.setState({person:person});
}

togglePersonHandler=()=>{
  const currentState = this.state.otherState;
this.setState({
  otherState : !currentState
})
}
 


  render (){
   let persons=null;
   const styles={
    backgroundColor:'green'
  }

   if(this.state.otherState){
    persons =(
      <div>
        {this.state.person.map((person,index)=>{
          return(
          <Person 
          click={()=>this.deletePersonHandler(index)}
          fname={person.fname}
          lname={person.lname}
          key={person.id}
          change={(event)=>this.changedHandler(event,person.id)}
          />)
        })}
      {/* <Person 
      fname={this.state.person[0].fname} 
      lname={this.state.person[0].lname}/>
      <Person 
      fname={this.state.person[1].fname} 
      lname={this.state.person[1].lname}
      click={()=>this.switchPersonHandler("Anudeep!!!!")}
      change={this.changedHandler}> People call me GOAT</Person>
      <Person 
      fname={this.state.person[2].fname} 
      lname={this.state.person[2].lname}/> */}
     </div>  
     );
 styles.backgroundColor='red';
   }
    return(
      <div>
         <h1>Welcome to React</h1>
     <button 
     onClick={this.togglePersonHandler}
     style={styles}
     > Switch Person</button>
        
       
     {persons}
        

      </div>
  
    );

    
  
  }
  
 
    
  }
 





export default App;
//ReactDOM.render(<App />, document.getElementById('root'))

