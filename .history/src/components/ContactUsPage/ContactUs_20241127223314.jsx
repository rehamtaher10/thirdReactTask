import React from "react";
import { Outlet } from 'react-router-dom';

export default function ContactUs() {
  return (
    <section>
      <div className="contact_content">
        <Outlet />
      </div>
      <div className="contact_links">
        <NavLink end >
          Form
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
      </div>
    </section>
  );
}
