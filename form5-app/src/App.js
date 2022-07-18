import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state ={
      hobby:[],
      show: 0
    }
  }
  hobbies = (e) => {
    if (this.state.hobby.length === 0) {
      this.setState({
        hobby: [...this.state.hobby, e.target.value],
        show : 0
      });
    } else {
      this.state.hobby.map((i) => {
        console.log(i);
        if (i === e.target.value) {
          let k = this.state.hobby.indexOf(i);
          this.state.hobby.splice(k, 1);
          this.setState({ hobby: this.state.hobby, errorhobbempty: "" });
        } else {
          this.setState({
            hobby: [...this.state.hobby, e.target.value],
            show : 0
          });
        }
      });
    }
  };
clickme=(e)=>{
 this.setState({
  show : 1
 })
  

}
hobby =()=>{
  return  <p>{this.state.hobby}</p>
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Choose your hobbies</h2>
          
                  <div>
                    <span className="errorspan">
                      {this.state.errorhobbempty}
                    </span>
                    <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy1"
                      value="Cricket  "
                    />
                    Cricket
                    <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy2"
                      value="Singing  "
                    />
                    Singing <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy3"
                      value="Dancing  "
                    />
                    Dancing <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy4"
                      value="Fighting  "
                    />
                    Fighting <br />
                  </div>
             <button onClick={this.clickme}>Show</button>
             {this.state.show === 1 && this.hobby ()}
        </header>
      </div>
    )
  }
}

export default App