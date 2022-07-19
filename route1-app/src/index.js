import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Galery from './Galery';
import Event from './Event';
import Feedback from './Feedback';
import Contact from './Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/galery' element={<Galery />}/>
      <Route path='/event' element={<Event />}/>
      <Route path='/feedback' element={<Feedback />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
