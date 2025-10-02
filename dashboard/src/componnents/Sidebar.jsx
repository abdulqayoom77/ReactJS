import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBuilding,
  FaUserShield,
  FaUsers,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [shrink, setShrink] = useState(false);
  const toggleSidebar = () => {
    setShrink(!shrink);
  };

  const active = ({ isActive }) =>
    isActive
      ? "relative flex items-center gap-3 px-4 py-3.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 transform scale-105 transition-all duration-300"
      : "relative flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-blue-600/20 hover:shadow-md hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group";

  return (
    <div
      className={`${
        shrink ? "w-20" : "w-64"
      } h-full bg-gray-900 text-white p-4 transition-all duration-500 ease-in-out relative overflow-hidden shadow-2xl border-r border-gray-800`}
    >
      <div className="relative z-10">
        {/* Header Section */}
        <div className={`flex items-center ${shrink ? 'justify-center' : 'justify-between'} mb-8`}>
          {!shrink && (
            <h2 className="text-2xl font-bold text-white">
              Sidebar
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2.5 bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-blue-500/50 transform hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {shrink ? (
              <FaChevronRight className="text-white w-4 h-4" />
            ) : (
              <FaChevronLeft className="text-white w-4 h-4" />
            )}
          </button>
        </div>

        <nav className={`space-y-2 ${shrink ? 'flex flex-col items-center' : ''}`}>
          <NavLink className={active} to="/">
            <FaTachometerAlt className="text-lg flex-shrink-0" />
            {!shrink && (
              <span className="font-medium text-sm">
                Dashboard
              </span>
            )}
          </NavLink>

          <NavLink className={active} to="/company">
            <FaBuilding className="text-lg flex-shrink-0" />
            {!shrink && (
              <span className="font-medium text-sm">
                Company
              </span>
            )}
          </NavLink>

          <NavLink to="/admin" className={active}>
            <FaUserShield className="text-lg flex-shrink-0" />
            {!shrink && (
              <span className="font-medium text-sm">
                Admin
              </span>
            )}
          </NavLink>

          <NavLink to="/customer" className={active}>
            <FaUsers className="text-lg flex-shrink-0" />
            {!shrink && (
              <span className="font-medium text-sm">
                Customer
              </span>
            )}
          </NavLink>

          <NavLink to="/settings" className={active}>
            <FaCog className="text-lg flex-shrink-0" />
            {!shrink && (
              <span className="font-medium text-sm">
                Settings
              </span>
            )}
          </NavLink>
        </nav>

      </div>
    </div>
  );
};

export default Sidebar;