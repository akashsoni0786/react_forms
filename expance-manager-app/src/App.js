import "./App.css";
import "./Style.css";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      income: 0,
      expance: 0,
      money: "",
      moneyex: "",
      catgry: "",
      expences: [],
    };
  }
  category = (e) => {
    console.log(e.target.value);
    this.setState({
      catgry: e.target.value,
    });
  };
  addbalance = (e) => {
    if (this.state.money <= 0) {
      alert("Enter valid amount");
    } else {
      this.setState({
        balance: parseFloat(this.state.balance) + parseFloat(this.state.money),
        income: parseFloat(this.state.income) + parseFloat(this.state.money),
        expance: parseFloat(this.state.expance) - parseFloat(this.state.income),
        money: "",
      });
    }
  };
  addexpences = (e) => {
    if (this.state.catgry === "") {
      alert("Choose category");
    } else if (this.state.moneyex <= 0 || this.state.moneyex <= 0.0) {
      alert("Enter valid amount");
    } else {
      var k = {
        id: this.state.expences.length + 1,
        text: this.state.catgry,
        amount: this.state.moneyex,
      };
      console.log(k.id);
      this.setState({
        expance: parseFloat(this.state.expance) + parseFloat(k.amount),
        balance: parseFloat(this.state.balance) - parseFloat(k.amount),
        expences: [...this.state.expences, k],
        catgry: "",
        moneyex: "",
      });
    }
  };
  deletebtn = (e) => {
    alert(e.target.id);
    var ar = [...this.state.expences];
    this.setState({
      expences: ar.filter( exp => exp.id ===  e.target.id ),
    });
    
  };
  editbtn = (e) => {
    alert(e.target.id);
    var pos = parseInt(e.target.id) - 1;
    console.log(this.state.expences);
    this.state.expences.map((i) => {
      if (i.id === e.target.id) {
        console.log(this.state.expences);
        this.setState({
          expences: this.state.expences,
        });
      }
    });
  };

  render() {
    return (
      <div className="">
        <h2>Expense Tracker</h2>

        <div className="container">
          <h4>Your Balance</h4>
          <h1 id="balance">${this.state.balance}</h1>

          <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
              <p id="money-plus" className="money plus">
                +${this.state.income}
              </p>
            </div>
            <div>
              <h4>Expense</h4>
              <p id="money-minus" className="money minus">
                -${this.state.expance}
              </p>
            </div>
          </div>
          <h3>Add Balance</h3>
          <div className="form-control">
            <label for="amount">
              Amount <br />
              (positive - income)
            </label>
            <input
              value={this.state.money}
              onChange={(e) => {
                this.setState({
                  money: e.target.value,
                });
              }}
              type="number"
              id="amount"
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn" onClick={this.addbalance}>
            Add Balance
          </button>
          <h3>Add new transaction</h3>

          <div className="form-control">
            <label for="text">Text</label>
            <div>
              <select
                onChange={this.category}
                className="form-control"
                id="selectcategory"
                value={this.state.catgry}
              >
                <option selected>Select Category</option>
                <option>Grocery</option>
                <option>Veggies</option>
                <option>Travelling</option>
                <option>Miscellaneous</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label for="amount">
              Amount <br />
              (negative - expense)
            </label>
            <input
              value={this.state.moneyex}
              onChange={(e) => {
                this.setState({
                  moneyex: e.target.value,
                });
              }}
              type="number"
              id="amount"
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn" onClick={this.addexpences}>
            Add transaction
          </button>
          <h3>History</h3>
          <ul id="list" className="list" name="historyy">
            {this.state.expences.map((i) => {
              if (i.amount > 0) {
                return (
                  <li className="minus">
                    {i.text} <span>-${i.amount}</span>
                    <button
                      id={i.id}
                      onClick={this.deletebtn}
                      className="delete-btn-red"
                    >
                      Delete
                    </button>
                    <button
                      id={i.id}
                      onClick={this.editbtn}
                      className="edit-btn-red"
                    >
                      Edit
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
