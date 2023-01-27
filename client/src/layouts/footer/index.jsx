import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.scss"
const Footer = () => {
  return (
    <div id='Footer'>
        <div className="footer-container">
        <div className="email">
        <p className='mary'>Mary Byrd</p>
        <input type="text" placeholder='Your Email' className='footerInput' />
        <button className='footerBtn'> Send </button>
        <div className="footer-line"></div>
        </div>
        

        <ul>
            <li className='mainTtx'> About </li>

            <li> <NavLink to={"/"}> About Us</NavLink> </li>
            <li> <NavLink to={"/"}> Our Partners </NavLink> </li>
            <li> <NavLink to={"/"}> Our Services </NavLink> </li>
        </ul>

        <ul>
            <li className='mainTtx'> Contact </li>

            <li> <NavLink to={"/"}> Contact Us</NavLink> </li>
            <li> <NavLink to={"/"}> FAQ Page </NavLink> </li>
            <li> <NavLink to={"/"}> About Me </NavLink> </li>
        </ul>
            
            <p className='footerFollowText'>Follow Us</p>
        </div>

        
    </div>
  )
}

export default Footer