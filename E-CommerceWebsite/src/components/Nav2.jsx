import { useState, useEffect } from "react";

const Nav2 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "HOME", link: "#" },
    { name: "SHOP", link: "#" },
    { name: "SALE", link: "#" },
    { name: "BUNDLE OFFERS", link: "#" },
    { name: "NEW ARRIVAL", link: "#" },
    { name: "BLOGS", link: "#" },
    { name: "CONTACT", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`sticky top-[104px] left-0 right-0 z-40 bg-white border-b border-gray-200 transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="md:hidden flex items-center overflow-x-auto space-x-6 scrollbar-hide">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 tracking-wide whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Nav2;
