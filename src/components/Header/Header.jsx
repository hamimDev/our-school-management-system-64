import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full">
        <div className="bg-gray-100">
      <nav className="bg-slate-700 p-2">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex lg:ml-16 items-center justify-between">
            <samp>
              <img
                className="w-[100px]"
                src="/src/components/Photo/Image/20240106_225436.png"
                alt=""
              />
            </samp>
            <div className="text-yellow-200 font-bold lg:text-4xl italic ml-3">
              Sholak Victoria <br />
              <samp className="text-green-500">Secondary School</samp>
              <h1 className="text-base text-gray-300 italic">
                Sholak,Wazirpur,Barisal
              </h1>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 mr-16">
            <Link
              to="/"
              className="text-white hover:underline hover:text-blue-700 text-3xl font-bold"
            >
              Home
            </Link>
            <Link
              to="/classrooms"
              className="text-white hover:underline hover:text-blue-700 text-3xl font-bold"
            >
              Classrooms
            </Link>
            <Link
              to="/faculty"
              className="text-white hover:underline hover:text-blue-700 text-3xl font-bold"
            >
              Faculty
            </Link>
            <Link
              to="/about"
              className="text-white hover:underline hover:text-blue-700 text-3xl font-bold"
            >
              About Us
            </Link>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        } bg-blue-500 p-4`}
      >
        <Link to="/" className="text-white block py-2 hover:underline">
          Home
        </Link>
        <Link
          to="/classrooms"
          className="text-white block py-2 hover:underline"
        >
          Classrooms
        </Link>
        <Link to="/faculty" className="text-white block py-2 hover:underline">
          Faculty
        </Link>
        <Link to="/about" className="text-white block py-2 hover:underline">
          About Us
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
