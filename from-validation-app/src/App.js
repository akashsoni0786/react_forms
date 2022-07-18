import "./App.css";
import "./Style.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,

      name: "",
      dob: "",
      gender: "",
      siblingsdetails: "",

      fname: "",
      fqualifiation: "",
      fmail: "",
      fmobile: "",

      mname: "",
      mqualifiation: "",
      mmail: "",
      mmobile: "",
      myaddress: "",

      errornameempty: "",
      errordobempty: "",
      errorgenderempty: "",
      errorsiblingempty: "",

      errorfnameempty: "",
      errorfqualiempty: "",
      errorfmailempty: "",
      errorfmobileempty: "",

      errormnameempty: "",
      errormqualiempty: "",
      errormmailempty: "",
      errormmobileempty: "",
      erroraddress : "",

      registeredData: {
        sname: "",
        sdob: "",
        sgender: "",
        sib: "",

        fathername: "",
        fatherquali: "",
        fathermail: "",
        fathermob: "",

        mothername: "",
        motherquali: "",
        mothermail: "",
        mothermob: "",

        addre: "",
      },
    };
  }

  resetbtn = () => {
    document.getElementById("g1").checked = false;
    document.getElementById("g2").checked = false;
    this.setState({
      show: 0,

      name: "",
      dob: "",
      gender: "",
      siblingsdetails: "",

      fname: "",
      fqualifiation: "",
      fmail: "",
      fmobile: "",

      mname: "",
      mqualifiation: "",
      mmail: "",
      mmobile: "",

      myaddress: "",

      errornameempty: "",
      errordobempty: "",
      errorgenderempty: "",
      errorsiblingempty: "",

      errorfnameempty: "",
      errorfqualiempty: "",
      errorfmailempty: "",
      errorfmobileempty: "",

      errormnameempty: "",
      errormqualiempty: "",
      errormmailempty: "",
      errormmobileempty: "",

      erroraddress: "",

      registeredData: {
        sname: "",
        sdob: "",
        sgender: "",
        sib: "",

        fathername: "",
        fatherquali: "",
        fathermail: "",
        fathermob: "",

        mothername: "",
        motherquali: "",
        mothermail: "",
        mothermob: "",

        addre: "",
      },
    });
  };
  showdetails = () => {
    return (
      <div className="showdetails">
        <h1>Student's Details</h1>
        <table>
          <tr>
            <th>Name : </th>
            <td>{this.state.registeredData.sname}</td>
          </tr>
          <tr>
            <th>DOB : </th>
            <td>{this.state.registeredData.sdob}</td>
          </tr>
          <tr>
            <th>Gender : </th>
            <td>{this.state.registeredData.sgender}</td>
          </tr>
          <tr>
            <th>Siblings : </th>
            <td>{this.state.registeredData.sib}</td>
          </tr>
          <tr>
            <th>Father's name : </th>
            <td>{this.state.registeredData.fathername}</td>
          </tr>
          <tr>
            <th>Father's Qualification : </th>
            <td>{this.state.registeredData.fatherquali}</td>
          </tr>
          <tr>
            <th>Father's mail: </th>
            <td>{this.state.registeredData.fathermail}</td>
          </tr>
          <tr>
            <th>Father's mobile no.: </th>
            <td>{this.state.registeredData.fathermob}</td>
          </tr>
          <tr>
            <th>Mother's name : </th>
            <td>{this.state.registeredData.mothername}</td>
          </tr>
          <tr>
            <th>Mother's Qualification : </th>
            <td>{this.state.registeredData.motherquali}</td>
          </tr>
          <tr>
            <th>Mother's mail: </th>
            <td>{this.state.registeredData.mothermail}</td>
          </tr>
          <tr>
            <th>Mother's mobile no.: </th>
            <td>{this.state.registeredData.mothermob}</td>
          </tr>
          <tr>
            <th>Address : </th>
            <td>{this.state.registeredData.addre}</td>
          </tr>
        </table>
      </div>
    );
  };
  submitbtn = () => {
    if (this.state.name === "") {
      this.setState({
        errornameempty: "Field is empty",
      });
    }
    if (this.state.gender === "") {
      this.setState({
        errorgenderempty: "Field is empty",
      });
    }
    if (this.state.siblingsdetails === "") {
      this.setState({
        errorsiblingempty: "Field is empty",
      });
    }
    if (this.state.dob === "") {
      this.setState({
        errordobempty: "Field is empty",
      });
    }

    if (this.state.fname === "") {
      this.setState({
        errorfnameempty: "Field is empty",
      });
    }
    if (this.state.fqualifiation === "") {
      this.setState({
        errorfqualiempty: "Field is empty",
      });
    }
    if (this.state.fmail === "") {
      this.setState({
        errorfmailempty: "Field is empty",
      });
    }
    if (this.state.fmobile === "") {
      this.setState({
        errorfmobileempty: "Field is empty",
      });
    }

    if (this.state.mname === "") {
      this.setState({
        errormnameempty: "Field is empty",
      });
    }
    if (this.state.mqualifiation === "") {
      this.setState({
        errormqualiempty: "Field is empty",
      });
    }
    if (this.state.mmail === "") {
      this.setState({
        errormmailempty: "Field is empty",
      });
    }
    if (this.state.mmobile === "") {
      this.setState({
        errormmobileempty: "Field is empty",
      });
    }
    if (this.state.myaddress === "") {
      this.setState({
        erroraddress: "Field is empty",
      });
    } else {
      if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.state.mmail)) {
        this.setState({
          errormmailempty: "Invalid mail!",
        });
      }
      if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.state.fmail)) {
        this.setState({
          errorfmailempty: "Invalid mail!",
        });
      }
      if (this.state.mmobile.length !== 10) {
        this.setState({
          errormmobileempty: "Mobile number will be 10 digits",
        });
      }
      if (this.state.fmobile.length !== 10) {
        this.setState({
          errorfmobileempty: "Mobile number will be 10 digits",
        });
      } else {
        if (!/^\d{10}$/g.test(this.state.fmobile)) {
          this.setState({
            errorfmobileempty: "Invalid mobile number",
          });
        }
        if (!/^\d{10}$/g.test(this.state.mmobile)) {
          this.setState({
            errormmobileempty: "Invalid mobile number",
          });
        } else {
          alert("You are register successfully");
          this.setState({
            show: 1,
            registeredData: {
              sname: this.state.name,
              sdob: this.state.dob,
              sgender: this.state.gender,
              sib: this.state.siblingsdetails,

              fathername: this.state.fname,
              fatherquali: this.state.fqualifiation,
              fathermail: this.state.fmail,
              fathermob: this.state.fmobile,

              mothername: this.state.mname,
              motherquali: this.state.mqualifiation,
              mothermail: this.state.mmail,
              mothermob: this.state.mmobile,

              addre: this.state.myaddress,
            },
            name: "",
            dob: "",
            gender: "",
            siblingsdetails: "",

            fname: "",
            fqualifiation: "",
            fmail: "",
            fmobile: "",

            mname: "",
            mqualifiation: "",
            mmail: "",
            mmobile: "",

            myaddress: "",

            errornameempty: "",
            errordobempty: "",
            errorgenderempty: "",
            errorsiblingempty: "",

            errorfnameempty: "",
            errorfqualiempty: "",
            errorfmailempty: "",
            errorfmobileempty: "",

            errormnameempty: "",
            errormqualiempty: "",
            errormmailempty: "",
            errormmobileempty: "",

            erroraddress: "",
          });
          document.getElementById("g1").checked = false;
          document.getElementById("g2").checked = false;
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
            <table>
              <h2>Student Registration Form</h2>
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
                  <div id="labelDiv">Date of Birth</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errordobempty}
                    </span>
                    <br />
                    <input
                      value={this.state.dob}
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
                  <div id="labelDiv">Details Of Siblings</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorsiblingempty}
                    </span>
                    <br />
                    <textarea
                      id="addressEntry"
                      onChange={(e) => {
                        this.setState({
                          siblingsdetails: e.target.value,
                          errorsiblingempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.siblingsdetails}
                      type="text"
                      placeholder="Enter details"
                    />
                  </div>
                </td>
              </tr>
              <h2>Parent's Informations</h2>
              <tr>
                <td>
                  <div id="labelDiv">Enter Father's Name</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorfnameempty}
                    </span>
                    <br />
                    <input
                      className="inputEntry"
                      value={this.state.fname}
                      type="text"
                      placeholder="Enter your father's name"
                      onChange={(e) => {
                        this.setState({
                          fname: e.target.value,
                          errorfnameempty: "",
                        });
                      }}
                    />{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Father's Qualification</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorfqualiempty}
                    </span>
                    <br />
                    <input
                      className="inputEntry"
                      value={this.state.fqualifiation}
                      type="text"
                      placeholder="Enter your father's qualification"
                      onChange={(e) => {
                        this.setState({
                          fqualifiation: e.target.value,
                          errorfqualiempty: "",
                        });
                      }}
                    />{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Father's Email</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorfmailempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          fmail: e.target.value,
                          errorfmailempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.fmail}
                      type="text"
                      placeholder="it should contain @"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Father's Mobile</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errorfmobileempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          fmobile: e.target.value,
                          errorfmobileempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.fmobile}
                      type="text"
                      placeholder="Only 10 digits are allowed"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Mother's Name</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormnameempty}
                    </span>
                    <br />
                    <input
                      className="inputEntry"
                      value={this.state.mname}
                      type="text"
                      placeholder="Enter your mother's name"
                      onChange={(e) => {
                        this.setState({
                          mname: e.target.value,
                          errormnameempty: "",
                        });
                      }}
                    />{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Mother's Qualification</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormqualiempty}
                    </span>
                    <br />
                    <input
                      className="inputEntry"
                      value={this.state.mqualifiation}
                      type="text"
                      placeholder="Enter your mother's qualification"
                      onChange={(e) => {
                        this.setState({
                          mqualifiation: e.target.value,
                          errormqualiempty: "",
                        });
                      }}
                    />{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Mother's Email</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormmailempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          mmail: e.target.value,
                          errormmailempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.mmail}
                      type="text"
                      placeholder="it should contain @"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="labelDiv">Enter Mother's Mobile</div>
                </td>
                <td>
                  <div id="inputDiv">
                    <span className="errorspan">
                      {this.state.errormmobileempty}
                    </span>
                    <br />
                    <input
                      onChange={(e) => {
                        this.setState({
                          mmobile: e.target.value,
                          errormmobileempty: "",
                        });
                      }}
                      className="inputEntry"
                      value={this.state.mmobile}
                      type="text"
                      placeholder="Only 10 digits are allowed"
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
                    <span className="errorspan">{this.state.erroraddress}</span>
                    <br />
                    <textarea
                      value={this.state.myaddress}
                      onChange={(e) => {
                        this.setState({
                          myaddress: e.target.value,
                          erroraddress: "",
                        });
                      }}
                      id="addressEntry"
                      type="text"
                    >
                      {this.state.myaddress}
                    </textarea>
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
          </div>
        </div>
        {this.state.show === 1 && this.showdetails()}
      </>
    );
  }
}

export default App;
