import React ,{Component }from 'react';
import  classes from './Person.module.css';
import Aux from '../hoc/Auxilliary';

class Person extends Component{
    render(){
        return(
            <Aux>
                <div className={classes.Person}>
            <p onClick={this.props.click}>My name is {this.props.fname} {this.props.lname}</p>
            {this.props.children}
        
            <input onChange={this.props.change} value={this.props.fname} />
            </div>
            </Aux>
        )
    }

} 

export default Person; 