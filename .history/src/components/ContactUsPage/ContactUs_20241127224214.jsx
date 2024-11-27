import React from "react";
import { Outlet ,NavLink } from 'react-router-dom';


export default function ContactUs() {
  return (
    <>
      <div className="contact_content">
        <Outlet />
      </div>
      <aside className="contact_links">
        <NavLink end >
          Contact us Form
        </NavLink>
        <NavLink

          to={"location"}
        >
          Location
        </NavLink>
        <NavLink
          
          to={"emails"}
        >
          Emails
        </NavLink>
        <NavLink
          
          to={"phone-number"}
        >
          Phone Number
        </NavLink>
      </aside>
    </>
  );
}