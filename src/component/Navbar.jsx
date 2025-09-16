import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const linkProps = {
    smooth: true,
    duration: 100,
    offset: -64,
    spy: true,
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const baseLinkClass =
    "cursor-pointer px-3 py-1 rounded-md text-gray-800 dark:text-gray-100 hover:bg-[#5ef7c9] dark:hover:bg-[#2dbf99] transition";

  const activeClass =
    "bg-[#37f3ba] text-white font-semibold pt-2 pb-2";

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-sm fixed w-full top-0 rounded-2xl z-40 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <ScrollLink to="home" className="scroll-smooth duration-500 ring-offset-1">
            <div className="text-3xl font-bold font-orbitron cursor-pointer text-[#37f3ba] dark:text-[#5ef7c9]">
              Mr MaNish
            </div>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {["home", "services", "projects", "about", "skills", "contact"].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                {...linkProps}
                activeClass={activeClass}
                className={baseLinkClass}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full transition"
            >
              {isDark ? "☀" : "🌙"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-100 text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 flex flex-col items-center text-gray-700 dark:text-gray-100">
          {["home", "services", "projects", "about", "skills", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              {...linkProps}
              activeClass={activeClass}
              className={baseLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded-full transition"
          >
            {isDark ? "☀" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}
