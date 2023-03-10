import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Footer.scss'


function Nav() {
  return (
    <div className='footer'>
        <Link to="/"><h1 className='logo'>KOVAI ESTATES</h1></Link>
        <ul className='wrapper'>
            <li className="hover-underline-animation">
                <Link to="/">HOME</Link>
            </li>
            <li className="hover-underline-animation">
                <Link to="/buy">BUY</Link>
            </li>
            <li className="hover-underline-animation">
                <Link to="/abtus">ABOUT US</Link>
            </li>
            <li className="hover-underline-animation">
                <Link to="/contact">CONTACT US</Link> 
            </li>           
            <li className="hover-underline-animation">
                <Link to="/contact">CONTACT US</Link> 
            </li>    
            <li className="hover-underline-animation">
                <Link to="/contact">CONTACT US</Link> 
            </li>    
            <li className="hover-underline-animation">
                <Link to="/contact">CONTACT US</Link> 
            </li>     
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav