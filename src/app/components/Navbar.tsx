"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-3xl font-black">Abu Bakar</a>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="lg:flex lg:space-x-6">
              <li>
                <a href="/" className="block lg:inline-block mt-2 lg:mt-0  ">Home</a>
              </li>
              <li>
                <a href="/About" className="block lg:inline-block mt-2 lg:mt-0 ">About</a>
              </li>
              <li>
                <a href="/" className="block lg:inline-block mt-2 lg:mt-0 ">Project</a>
              </li>
              <li>
                <a href="/" className="block lg:inline-block mt-2 lg:mt-0 ">Skills</a>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
