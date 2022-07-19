import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


const Nav = () => {
  return (
    <div className='nav'>
        <p>Routing Game</p>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link'to="/galery">Galery</Link></li>
            <li><Link className='link'to="/event">Event</Link></li>
            <li><Link className='link'to="/feedback">Feedback</Link></li>
            <li><Link className='link'to="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Nav