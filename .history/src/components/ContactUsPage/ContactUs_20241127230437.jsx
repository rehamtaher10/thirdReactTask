import React from "react";
import { Outlet ,NavLink } from 'react-router-dom';
import "../../style/contactUs.css";

export default function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contact_links">
        <NavLinkto={""} end >
          Contact us Form
        </NavLinkto=>
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
      </div>
      <div className="contact_content">
        <Outlet />
      </div>
    </div>
  );
}
