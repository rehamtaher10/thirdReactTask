import React from "react";
import Home from "./components/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/AboutPage/About";
import ContactUs from "./components/ContactUsPage/ContactUs";
import Service from "./components/ServicePage/Service";

export default function App() {
  const Routing = createBrowserRouter([
    
    {
      path: "home",
      element: <Layout />,
      // errorElement: <h1>404 Not Found</h1>,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "service", element: <Service /> },
        {
          path: "contact",
          element: <ContactUs />,
          children: [
            { index: true, element: <h1>Contact us Form</h1> },
            { path: "location", element: <h1>Contact us Location</h1> },
            { path: "emails", element: <h1>Contact us Emails</h1> },
            { path: "phone-number", element: <h1>Phone Number</h1> },
          ],
        },
        { path: "*", element: <section>Not Found Page</section> },
      ],
    },
  ]);
  return <RouterProvider router={Routing} />;
}
