import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Drive from './Drive';
import Blog from './Blog';
import Partners from './Partners';
import Help from './Help';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/drive' element={<Drive />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/partners' element={<Partners />}/>
      <Route path='/help' element={<Help />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
