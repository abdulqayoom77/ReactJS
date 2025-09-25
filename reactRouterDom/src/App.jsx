import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Cars from "./components/SubComponents/Cars.jsx";
import { Bikes } from "./components/SubComponents/Bikes.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

const App = () => {

const actived = ({ isActive }) => (isActive ? "text-red-500" : "hover:text-red-400")

  return (
    <div>
      <nav>
        <ul className="flex flex-row bg-black gap-10 text-white h-20 items-center">
          <li>
            <NavLink
              to="/"
              className={actived}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={actived}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={actived}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="cars" element={<Cars />} />
          <Route path="bikes" element={<Bikes />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
