import React from 'react'
import "../style/navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
            <h1>Logo</h1>
            <div className="navbar_menu">
                <ul>
                    <NavLink  to={"/"}>Home</NavLink>
                    <NavLink  to={"/about"}>About</NavLink>
                    
                    <NavLink  to={"/contact"}>Contact us</NavLink>
                </ul>
            </div>
            <button>Log in</button>
        </nav>
    </>
  )
}
