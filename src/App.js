import React, {Component} from 'react';
import Persons from './Person/Persons';
import Cockpit from './Cockpit/Cockpit';
import WithClass from './hoc/WithClass';
class App extends Component {
  
  constructor(props){
super(props);
console.log('[App.js]')
  }

  getDerivedStateFromProps(){

  }
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
  
   if(this.state.otherState){
    persons =(
       <Persons  persons={this.state.person}
      clicked={(index)=>this.deletePersonHandler(index)}      
      changed={(event,id)=>this.changedHandler(event,id)}
      />
      
     );
 
   }
    return(
   <WithClass>
       <Cockpit 
       persons={this.state.otherState} 
       clicked= {this.togglePersonHandler}
     
       />
     {persons}
     </WithClass>
      
    );
 }
  
  }
 





export default App;
//ReactDOM.render(<App />, document.getElementById('root'))

