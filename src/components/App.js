import React, { Component } from 'react';
import { Header } from './Header';
import Container from './container';
import participants from '../api/participant.json';

const headerTitle = "Nords Software";
const headerParticipant = "List of participants";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      participants: participants
    }
    //this.addParticipant = this.addParticipant.bind(this);
  }
  addParticipant = (newParticipant) =>  {
   console.log(newParticipant);
   this.setState({
       participants: [...this.state.participants, newParticipant]
     })

 }
  render() {
    const participants = this.state.participants;
    const addParticipant = this.addParticipant;
    return (
      <div>
        <Header headerTitle={ headerTitle }/>
        <h1>{ headerParticipant }</h1>
        <Container participants={participants} addParticipant={addParticipant} />
      </div>
    );
  }
}

export default App;
