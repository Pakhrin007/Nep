import { useState } from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky w-full z-50 top-0 start-0 backdrop-blur-md bg-white/30 border-b border-white/30 shadow-sm">

      <div className="max-w-[1280px] flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black ">
            Nephara
          </span>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex md:order-2 items-center space-x-2">
          <button className="text-black font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Log in
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Get started
          </button>
        </div>

        {/* Hamburger Button */}
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

        {/* Navigation Links + Mobile Buttons */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 md:bg-transparent md:border-none ${menuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border md:border-none md:bg-transparent border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  justify-end items-end mr-0">
            <li className="relative group">
              <a href="#" className="block py-2 px-3 text-black font-title">
                Features
              </a>
              <div className="absolute left-0  w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-50">
                <ul className="py-2 text-sm text-gray-700 flex flex-col">
                  <li>
                    <Link to='/ai-assistant' className="block px-4 py-2 hover:bg-gray-100 font-title">
                      Ai-Assistant
                    </Link>
                  </li>
                  <li>
                    <Link to='/collaboration' className="block px-4 py-2 hover:bg-gray-100 font-title">
                      Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link to='/documents' className="block px-4 py-2 hover:bg-gray-100 font-title">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to='/human-resource' className="block px-4 py-2 hover:bg-gray-100 font-title">
                      Human Resource
                    </Link>
                  </li>
                  <li>
                    <Link to='/project-management' className="block px-4 py-2 hover:bg-gray-100 font-title">
                      Project Management
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to='/pricing' className="block py-2 px-3 text-black font-title">
                Pricing
              </Link>
            </li>
            <li>
              <Link to='/blog' className="block py-2 px-3 text-black font-title">
                Blog
              </Link>
            </li>
          </ul>

          {/* Mobile Only Buttons */}
          <div className="flex flex-col space-y-2 mt-4 px-4 md:hidden">
            <button className="text-black font-medium rounded-lg text-[16px] px-4 py-2 font-title border border-gray-300">
              Log in
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
