import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {


  return (
    <div>
      

      <h1 className="text-5xl">Home Page</h1>
      <Outlet />
    </div>
  );
};

export default Home;
