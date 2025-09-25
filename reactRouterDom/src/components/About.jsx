import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  const actived = ({ isActive }) =>
    isActive ? "text-red-500" : "hover:text-gray-700";

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/about/cars" className={actived}>
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/bikes" className={actived}>
              Bikes
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="text-5xl">About</h1>
      <Outlet />
    </div>
  );
};

export default About;
