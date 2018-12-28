import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './ValidationComponent/CharComponent'

class App extends Component {

  state = {
    UserName: [
      {name: 'radman!!'},
      {name: 'mildred!!'}
    ],
    inputValue: '',
    // cntChar: 0

  }

  newUserNameHandler = () => {
    this.setState ({
      UserName: [
        {name: 'radman!!xxx'},
        {name: 'mildred!!xxx'}
      ]
    })
  }

  inputNewUserNameHandler = (event) => {
    this.setState ({
      UserName: [
        {name: event.target.value},
        {name: 'mildred!!xxx'}
      ]
    })
  }

  outPutTextHandler = (event) => {
    this.setState( {
      inputValue: event.target.value
      
    });
  }

  deleteCharHandler = (index) => {
    const text = this.state.inputValue.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({inputValue: updateText});
  }


  render() {

    const charList = this.state.inputValue.split('').map((char, index)  => {
      return <CharComponent 
      character={char} 
      key={index}
      clicked = {() =>this.deleteCharHandler(index)} />
    });

    const style={
      backgroundColor: 'red',
      font: 'ingerit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let cntChar = 0;
    if(this.state.inputValue.length > 5) {
      cntChar = this.state.inputValue.length;
    }

    return (
      <div className="App">
        <h5>-----------------home work 2-----------------------------</h5>

        <div>
            <h1>Hi i am userImput</h1>
            <input type='text' onChange={this.outPutTextHandler} value={this.state.inputValue}/>
        </div>
        <div><p>{this.state.inputValue.length}------{cntChar} ----{this.state.inputValue}</p></div>

        <ValidationComponent inputLength = {this.state.inputValue.length} change={cntChar}/>
        {/* <CharComponent inputChar = {this.state.inputValue} /> */}
        {charList}

        <h5>-----------------home work 1-----------------------------</h5>

        <button style={style} onClick={this.newUserNameHandler}> click me</button>
        <UserInput change={this.inputNewUserNameHandler} name={this.state.UserName[0].name}/>
        <UserOutput name={this.state.UserName[0].name}/>
        <UserOutput name ={this.state.UserName[1].name}/>


      </div>
    );
  }
}

export default App;
