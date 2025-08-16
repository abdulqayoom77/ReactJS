import React from 'react'

const Navbar = () => {

const navLinks = [ "Home", "Products", "About Us", "Contact Us" ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">E-commerce UI</h1>
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="text-white hover:text-gray-300">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar