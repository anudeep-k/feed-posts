import React, {Component} from 'react';
import Person from './Person';

class Persons extends Component {
    render() {
       return  this.props.persons.map((person,index)=>{

            return (
            <Person 
            click={(index)=>this.props.clicked(index)}
            fname={person.fname}
            lname={person.lname}
            key={person.id}
            change={(event)=>this.props.changed(event,person.id)} />
            )
        
        }
)
    }
}


export default Persons;