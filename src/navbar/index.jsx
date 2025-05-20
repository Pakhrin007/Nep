import { useState, useEffect } from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
  className={`sticky z-50 top-0 left-0 right-0 mx-auto backdrop-blur-md bg-white/30 ${
    scrolled
      ? 'bg-white shadow-md rounded-b-lg py-1 w-[1300px]'
      : 'w-full backdrop-blur-md bg-white/30  border-white/30 shadow-sm py-3'
  } transition-all duration-500 ease-in-out`}
>
  <div
    className={`w-full px-4 md:px-8 ${
      scrolled ? 'max-w-[1300px] h-[60px]' : 'max-w-[1280px]'
    } mx-auto flex items-center justify-between transition-all duration-500 ease-in-out relative`}
  >

        {/* Logo Left */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            {!scrolled && (
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black font-title">
                Nephara
              </span>
            )}
          </Link>
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 items-center">
          <div className="relative group">
            {/* -----------hover effect----------------- */}
                <span className="px-4 py-[8px] text-black font-title cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 rounded-lg">Features</span>
            <div className="absolute left-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-50">
              <ul className="py-2 text-sm text-gray-700 flex flex-col">
                <li>
                  <Link to="/ai-assistant" className="block px-4 py-2 hover:bg-gray-100 font-title">
                    AI Assistant
                  </Link>
                </li>
                <li>
                  <Link to="/collaboration" className="block px-4 py-2 hover:bg-gray-100 font-title">
                    Collaboration
                  </Link>
                </li>
                <li>
                  <Link to="/documents" className="block px-4 py-2 hover:bg-gray-100 font-title">
                    Documents
                  </Link>
                </li>
                <li>
                  <Link to="/human-resource" className="block px-4 py-2 hover:bg-gray-100 font-title">
                    Human Resource
                  </Link>
                </li>
                <li>
                  <Link to="/project-management" className="block px-4 py-2 hover:bg-gray-100 font-title">
                    Project Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/pricing" className="px-4 py-1.5   text-black font-title cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 rounded-lg">Pricing</Link>
          <Link to="/blog" className="px-4 py-1.5 text-black font-title cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 rounded-lg">Blog</Link>
        </div>

        {/* Right Side Login/Signup */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="text-black font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Log in
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Sign up
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pt-2 pb-4 transition-all duration-300 ease-in-out ${
          menuOpen ? 'block' : 'hidden'
        }`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col space-y-2">
          <li className="group relative">
            <span className="block py-2 px-3 text-black font-title">Features</span>
            <div className="pl-4">
              <Link to="/ai-assistant" className="block py-1 text-sm font-title">AI Assistant</Link>
              <Link to="/collaboration" className="block py-1 text-sm font-title">Collaboration</Link>
              <Link to="/documents" className="block py-1 text-sm font-title">Documents</Link>
              <Link to="/human-resource" className="block py-1 text-sm font-title">Human Resource</Link>
              <Link to="/project-management" className="block py-1 text-sm font-title">Project Management</Link>
            </div>
          </li>
          <li>
            <Link to="/pricing" className="block py-2 px-3 text-black font-title">Pricing</Link>
          </li>
          <li>
            <Link to="/blog" className="block py-2 px-3 text-black font-title">Blog</Link>
          </li>
        </ul>
        <div className="flex flex-col space-y-2 mt-4">
          <button className="text-black border border-gray-300 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Log in
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
