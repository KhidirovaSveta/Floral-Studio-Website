import React from 'react'
import { NavLink } from "react-router-dom";
import "./index.scss"

const Header = () => {
  return (
    <div id='Header'>
        <div className="header">
            <div className="logo"><h1> Floral Studio</h1></div>

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About Us</NavLink></li>
                <li><NavLink to="/">Portfolio</NavLink></li>
                <li><NavLink to="/">Pricing</NavLink></li>
                <li><NavLink to="/">Contacts</NavLink></li>
                <li><NavLink to="/add">Add Product</NavLink></li>
                <li><NavLink to="/wishlist"> <i className="fa-regular fa-heart"></i></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header