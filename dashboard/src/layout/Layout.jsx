import React from 'react'
import Sidebar from '../componnents/Sidebar'
import Navbar from '../componnents/Navbar'
import Footer from '../componnents/Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout