import { useState } from "react";

const NavBar = () => {
  const navLinks = ["Home", "About", "Contact Us", "Skills"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex w-full  justify-around bg-gray-900 mb-5 text-white text-md  py-5 items-center ">
        <ul className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <li key={link} className="px-3 py-1 rounded-sm hover:bg-gray-800">
              <a href="">{link}</a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer hover:bg-gray-800 rounded-sm px-3 py-1 h-12 md:hidden"
        >
          {isOpen ? "❌" : "✅"}
        </button>

        {isOpen && (
          <ul className="flex gap-5 flex-col md:hidden">
            {navLinks.map((link) => (
              <li key={link} className="px-3 py-1 rounded-sm hover:bg-gray-800">
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
