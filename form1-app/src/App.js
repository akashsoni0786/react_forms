import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state={
      inp: 0,
      filtered:[],
      txt : []
    }
  }
  inputHandler=(e)=>{
    this.setState({
      inp: e.target.value,
    })
  }
  inputClick = () =>{
    this.setState({
      txt : this.state.inp.replace(/[a-z]/g, '')
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.inputHandler} placeholder="Enter somthing" />
          <button onClick={this.inputClick}>Check</button>
          <p>{this.state.txt}</p>
        </header>
      </div>
    )
  }
}

export default App