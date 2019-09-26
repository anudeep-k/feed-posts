import React, {Component} from 'react';

import './App.css';
import Table from './Table';


class App extends Component {
  render (){
    state={
     characters : [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  
  }
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  const {characters} = this.state
    return ( 
      <div className="container">
      <Table charData={characters} removeCharacter={this.removeCharacter}/>
    </div>
      
      )
     
    
  };
 
}


export default App;
//ReactDOM.render(<App />, document.getElementById('root'))

