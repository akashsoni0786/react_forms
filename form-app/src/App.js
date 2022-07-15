import "./App.css";
import "./Style.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:0,
      name: "",
      mail: "",
      mobile: "",
      gender: "",
      dob: "",
      address: "",
      pass: "",
      img: "",
      hobby: [],
      errornameempty: "",
      errormailempty: "",
      errormobempty: "",
      errordobempty: "",
      errorpassempty: "",
      erroraddempty: "",
      errorgenderempty: "",
      errorhobbempty: "",
      errorimgempty: "",
    };
  }
  hobbies = (e) => {
    if (this.state.hobby.length === 0) {
      this.setState({
        hobby: [...this.state.hobby, e.target.value],
        errorhobbempty: "",
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
            errorhobbempty: "",
          });
        }
      });
    }
  };
  resetbtn = () => {
    document.getElementById("hobbyy1").checked = false;
    document.getElementById("hobbyy2").checked = false;
    document.getElementById("hobbyy3").checked = false;
    document.getElementById("hobbyy4").checked = false;
    document.getElementById("g1").checked = false;
    document.getElementById("g2").checked = false;

    this.setState({
      show: 0,
      name: "",
      mail: "",
      mobile: "",
      gender: "",
      dob: "",
      address: "",
      pass: "",
      img: "",
      hobby: [],
      errornameempty: "",
      errormailempty: "",
      errormobempty: "",
      errordobempty: "",
      errorpassempty: "",
      erroraddempty: "",
      errorgenderempty: "",
      errorhobbempty: "",
      errorimgempty: "",
      registeredData: {
        n: "",
        ml: "",
        mb: "",
        g: "",
        dob: "",
        add: "",
        im: "",
        p: "",
      },
    });
  };
  showdetails = () => {
    return (
      <div className="showdetails">
      <table>
        <tr>
          <th>Name : </th>
          <td>{this.state.name}</td>
        </tr>
        <tr>
          <th>Email : </th>
          <td>{this.state.mail}</td>
        </tr>
        <tr>
          <th>Mobile no. : </th>
          <td>{this.state.mobile}</td>
        </tr>
        <tr>
          <th>Gender : </th>
          <td>{this.state.gender}</td>
        </tr>
        <tr>
          <th>DOB : </th>
          <td>{this.state.dob}</td>
        </tr>
        <tr>
          <th>Address : </th>
          <td>{this.state.address}</td>
        </tr>
        <tr>
          <th>Hobbies : </th>
          <td>{this.state.hobby}</td>
        </tr>
      </table></div>
    );
  };
  submitbtn = () => {
    if (this.state.name === "") {
      this.setState({
        errornameempty: "Field is empty",
      });
    }
    if (this.state.mail === "") {
      this.setState({
        errormailempty: "Field is empty",
      });
    }
    if (this.state.mobile === "") {
      this.setState({
        errormobempty: "Field is empty",
      });
    }
    if (this.state.dob === "") {
      this.setState({
        errordobempty: "Field is empty",
      });
    }
    if (this.state.pass === "") {
      this.setState({
        errorpassempty: "Field is empty",
      });
    }
    if (this.state.pass === "") {
      this.setState({
        erroraddempty: "Field is empty",
      });
    }
    if (
      !document.getElementById("g1").checked &&
      !document.getElementById("g2").checked
    ) {
      this.setState({
        errorgenderempty: "Choose gender!!",
      });
    }
    if (
      !document.getElementById("hobbyy1").checked &&
      !document.getElementById("hobbyy2").checked &&
      !document.getElementById("hobbyy3").checked &&
      !document.getElementById("hobbyy4").checked
    ) {
      this.setState({
        errorhobbempty: "Choose hobby!!",
      });
    }
    if (this.state.img === "") {
      this.setState({
        errorimgempty: "Choose your image",
      });
    } else {
      if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.state.mail)) {
        this.setState({
          errormailempty: "Invalid mail!",
        });
      }
      if (this.state.mobile.length !== 10) {
        this.setState({
          errormobempty: "Mobile number will be 10 digits",
        });
      } else {
        if (!/^\d{10}$/g.test(this.state.mobile)) {
          this.setState({
            errormobempty: "Invalid mobile number",
          });
        } else {
          alert("You are register successfully");
          this.setState({
            show: 1,
            registeredData: {
              n: this.state.name,
              ml: this.state.mail,
              mb: this.state.mobile,
              g: this.state.gender,
              db: this.state.dob,
              add: this.state.address,
              im: this.state.img,
              p: this.state.pass,
            },
          });
        }
      }
    }
  };
  render() {
    return (
      <>
        <h1>Registration Form</h1>
        <div className="App">
          <div className="parentform">
            {/* <form> */}
            <table>
              <tr>
                <td>
                  <div id="labelDiv">Enter Name</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errornameempty}
                    </span>
                    <br />
                    <input
                      className="inputEntry"
                      value={this.state.name}
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => {
                        this.setState({
                          name: e.target.value,
                          errornameempty: "",
                        });
                      }}
                    />{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Email</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormailempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          mail: e.target.value,
                          errormailempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.mail}
                      type="text"
                      placeholder="it should contain @"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Mobile</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormobempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          mobile: e.target.value,
                          errormobempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.mobile}
                      type="text"
                      placeholder="Only 10 digits are allowed"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Gender</div>
                </td>
                <td>
                  <div className="genderparent">
                    <input
                      onChange={(e) => {
                        this.setState({
                          gender: e.target.value,
                          errorgenderempty: "",
                        });
                      }}
                      id="g1"
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                    Male
                    <input
                      onChange={(e) => {
                        this.setState({
                          gender: e.target.value,
                          errorgenderempty: "",
                        });
                      }}
                      id="g2"
                      value="Female"
                      type="radio"
                      name="gender"
                    />
                    Female &nbsp;
                    <span className="errorspan">
                      {this.state.errorgenderempty}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Date of Birth</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errordobempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          dob: e.target.value,
                          errordobempty: "",
                        });
                      }}
                      id="dob"
                      className="inputEntry"
                      type="date"
                      max="2021-12-31"
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="addrssparent">Address</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.erroraddempty}
                    </span>
                    <br />
                    <textarea
                      onChange={(e) => {
                        this.setState({
                          address: e.target.value,
                          erroraddempty: "",
                        });
                      }}
                      id="addressEntry"
                      type="text"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Choose hobbies</div>
                </td>
                <td>
                  <div>
                    <span className="errorspan">
                      {this.state.errorhobbempty}
                    </span>
                    <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy1"
                      value="Cricket"
                    />
                    Cricket
                    <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy2"
                      value="Singing"
                    />
                    Singing <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy3"
                      value="Dancing"
                    />
                    Dancing <br />
                    <input
                      onChange={this.hobbies}
                      type="checkbox"
                      id="hobbyy4"
                      value="Fighting"
                    />
                    Fighting <br />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Profile pic</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorimgempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          img: e.target.value,
                          errorimgempty: "",
                        });
                      }}
                      id="chooseimg"
                      className="inputEntry"
                      type="file"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Password</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorpassempty}
                    </span>
                    <br />
                    <input
                      value={this.state.pass}
                      onChange={(e) => {
                        this.setState({
                          pass: e.target.value,
                          errorpassempty: "",
                        });
                      }}
                      className="inputEntry"
                      type="password"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="registerbtn" onClick={this.submitbtn}>
                    Register
                  </button>
                </td>
                <td>
                  <button
                    type="reset"
                    onClick={this.resetbtn}
                    className="registerbtn"
                  >
                    Reset
                  </button>
                </td>
                
              </tr>
            </table>
            {/* </form> */}
          </div>
        </div>

        {this.state.show === 1 && this.showdetails()}

        {/* <div>{this.state.show === 1 ? this.showdetails() : <></>}</div> */}
      </>
    );
  }
}

export default App;
