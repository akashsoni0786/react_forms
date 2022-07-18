
import './App.css';


import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state={
      l1 : '#e04014',
      l2 : '#f07451',
      l3 : '#ed947b',
      l4 : '#e0a899',
      txt : "black"
    }
  }
  darkmode = (e)=>{
    this.setState({
      l1 : 'black',
      l2 : '#3b3c3d',
      l3 : '#5f6163',
      l4 : '#97999c',
      txt : "white"
    })
  }
 
  
  light =()=>{
    this.setState({
      l1 : '#e04014',
      l2 : '#f07451',
      l3 : '#ed947b',
      l4 : '#e0a899',
      txt : "black"
    })
  }
  render() {
    return (
      <div className="App">
        
        <div style={{backgroundColor:this.state.l1,color:this.state.txt}}>Level 1</div>
        <div style={{backgroundColor:this.state.l2,color:this.state.txt}}>Level 2</div>
        <div style={{backgroundColor:this.state.l3,color:this.state.txt}}>Level 3</div>
        <div style={{backgroundColor:this.state.l4,color:this.state.txt}}>Level 4</div>
        <button onClick={this.darkmode}>Dark Mode</button>
        <button onClick={this.light}>Light Mode</button>
      </div>
    )
  }
}

export default App
