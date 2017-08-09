import React, { Component } from 'react';

export class AddParticipantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.participants.length,
      full_name: '',
      email: '',
      phone: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleMail = this.handleMail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);

  }
  handleId() {
    this.setState({
      id: ++this.state.id
    })
  }
   handleName(e) {
     this.setState({
       full_name:e.target.value

     })
   }
   handleMail(e) {
     this.setState({
       email:e.target.value
     })
   }
   handlePhone(e) {
     this.setState({
       phone:e.target.value
     })
   }

    handleSubmit = (e) => {
     e.preventDefault();
    this.handleId();
    let newParticipant = {
      id: this.state.id,
      full_name: this.state.full_name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.addParticipant(newParticipant)
  }


   render() {
     console.log(this.props.participants);
     return (
       <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.value} onChange={this.handleName} placeholder='Full name'/>
         <input type="text" value={this.state.value} onChange={this.handleMail} placeholder='E-mail address'/>
         <input type="text" value={this.state.value} onChange={this.handlePhone} placeholder='Phone number'/>
         <input type="submit" value="Add new" />
       </form>
     );
   }
}
