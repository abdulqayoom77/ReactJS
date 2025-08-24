const Navbar = () => {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            Portfolio
          </h1>
          <ul className="flex space-x-8 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <li key={link} className="hover:text-white relative after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                <a href="">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
