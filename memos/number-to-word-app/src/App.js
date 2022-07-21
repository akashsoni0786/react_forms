import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  let one2twenty = [
    "zero",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  let tenth = [
    "ones",
    "tenth",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const [inp, setInp] = useState(0);
  const [res, setRes] = useState("");
  const [show, setShow] = useState(0);
  const convert = () => {
    let num  = String(inp);
    let l = (num.length);
    if(l>4){
      alert("max-length is 4");
    }
    if (l==1) {
      for(let i=0;i<one2twenty.length;i++){
        if(i == num){
          setRes(one2twenty[i]);
        }
      }
     
    }
    if (l==2) {
      if(inp<20){
        
        for(let i=0;i<one2twenty.length;i++){
          if(i == num){
            setRes(one2twenty[i]);
          }
        }
      }
      else{
        let k = num.split('');
        let a,b;
        for(let i=0;i<one2twenty.length;i++){
          if(k[1]=='0'){
            b='';
          }
          else if(i == k[1]){
            b=one2twenty[i];
          }
        }
        for(let i=0;i<tenth.length;i++){
          if(i == k[0]){
            a=tenth[i];
          }
        }
        setRes(a+" "+b)
      }
      
    }
    if(l==3){
      let n = num.split('');
      let hundreds = n[0];
      let tens = Number(n[1]+n[2]);
      let h ;
      for(let i=0;i<one2twenty.length;i++){
        if(i == n[0]){
          h=(one2twenty[i]);
        }
      }
      if(tens<20){
        
        for(let i=0;i<one2twenty.length;i++){
          if(i == num){
            setRes(h+" hundred"+" "+one2twenty[i]);
          }
        }
      }
      else{
        let k = num.split('');
        let a,b;
        for(let i=0;i<one2twenty.length;i++){
          if(k[1]=='0'){
            b='';
          }
          else if(i == k[1]){
            b=one2twenty[i];
          }
        }
        for(let i=0;i<tenth.length;i++){
          if(i == k[0]){
            a=tenth[i];
          }
        }
        setRes(h+" hundred"+" "+a+" "+b)
      }
    }
    if(l==4){
      let n = num.split('');
      let thous = n[0];
      let th;
      let hundreds = n[1];
      let tens = Number(n[2]+n[3]);
      let h ;
      for(let i=0;i<one2twenty.length;i++){
        if(i == thous){
          th=one2twenty[i];
        }
      }
      for(let i=0;i<one2twenty.length;i++){
        if(i == n[0]){
          h=(one2twenty[i]);
        }
      }
      if(tens<20){
        
        for(let i=0;i<one2twenty.length;i++){
          if(i == num){
            setRes(th+" "+h+" hundred"+" "+one2twenty[i]);
          }
        }
      }
      else{
        let k = num.split('');
        let a,b;
        for(let i=0;i<one2twenty.length;i++){
          if(k[1]=='0'){
            b='';
          }
          else if(i == k[1]){
            b=one2twenty[i];
          }
        }
        for(let i=0;i<tenth.length;i++){
          if(i == k[0]){
            a=tenth[i];
          }
        }
        setRes(th+" "+h+" hundred"+" "+a+" "+b)
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => setInp(Number(e.target.value) + 0)}
          placeholder="Enter number"
          type="number"
        />
        <button onClick={convert}>Convert</button>
        <p>Answer :{res}</p>
      </header>
    </div>
  );
}

export default App;
