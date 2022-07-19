import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';


const Nav = () => {
  return (
    <div className='nav'>
        <p><img alt='' src='https://educadd.co.in/wp-content/uploads/2022/06/Untitled-design-2022-06-08T030657.832-e1654637921334.png'/></p>
        <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link'to="/products">Our Products</Link></li>
            <li><Link className='link'to="/contact">Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Nav