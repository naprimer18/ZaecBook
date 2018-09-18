import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Registretion from './Registration'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name:"null"};
    this.state = {flagOne:false};
    this.state = {flagTwo:false};
    this.state = {nameButton:"Go Chat"}
  }

  addMasseg() {
    this.props.enterMessage(": "+ this.message.value)
    this.message.value = "";
  }

  addName() {
    this.setState({flagOne:!this.state.flagOne});
    this.setState({flagTwo:!this.state.flagTwo});
    if(this.state.flagOne === false){
      this.setState({nameButton:"Rename"})
    } else this.setState({nameButton:"Rename"})
  }

  renameFun(){
    this.setState({name:this.name.value});
  }
  displayEnterName() {
     if(this.state.flagTwo === true) {
      return  (
         <div>
          <input ref={(input) => { this.name = input }} placeholder = "Your name "/> 
          <button onClick={this.renameFun.bind(this)}>Save</button>
        </div>
      );
    }
  }
  

  displayEnterMessage() {

    if(this.state.flagTwo === false) {
      return (
        <div className="messageLi">
            <ul>
             {this.props.testStore.map((message, index) =>
             <li key={index}>{this.state.name} {message}</li>
            )}
          </ul>
          
          <input ref={(input) => { this.message = input }} className = "inputMessage" placeholder = "Enter your message "/> 
          <button onClick = {this.addMasseg.bind(this)} >Enter</button>
         
         </div>
            );
   }
  }

  render() {
    console.log(this.state.flagOne);
    return (
      <div className="Chat">
        <button onClick = {this.addName.bind(this)} >{this.state.nameButton}</button>
        {this.displayEnterName()}
        {this.displayEnterMessage()}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    enterMessage: (message) => {
      dispatch({ type: 'ADD', payload: message })
    }
 
  })
)(App);