import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
            <h1>Logo</h1>
            <div className="navbar_menu">
                <ul>
                    <NavLink className={({isActive})=>isActive?"custom_ative shaban":""} to={"/"}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"/about"}>About</NavLink>
                    <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"/contact"}>Contact us</NavLink>
                </ul>
            </div>
        </nav>
    </>
  )
}
