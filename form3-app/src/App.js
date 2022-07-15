import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state={
      inp: '',
      days : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    }
  }
  inputSelect=(e)=>{
    let select = e.target.value
    for(let i=1;i<8;i++){
      if(i == select){
        this.setState({
          inp: this.state.days[i],
        })
      }
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <select onChange={this.inputSelect}>
          <option selected disabled>Select number</option>
            <option value='1'>1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
          </select>

          <p>{this.state.inp}</p>
        </header>
      </div>
    )
  }
}

export default App