'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = () => (
    <>
      <Link href="/" className="text-white hover:text-gray-300">
        Home
      </Link>
      <Link href="/about" className="text-white hover:text-gray-300">
        About
      </Link>
      <Link href="/course" className="text-white hover:text-gray-300">
        Course
      </Link>
      <Link href="/contact" className="text-white hover:text-gray-300">
        Contact
      </Link>
      <Link href="/login" className="text-white hover:text-gray-300 bg-blue-500 rounded-md w-fit p-1">
        Login
      </Link>
    </>
  );

  return (
    <nav className="bg-gray-800 p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold cursor-pointer">
          Logo
        </Link>
        {children}

        {/* Hamburger menu (for mobile) */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu links for desktop */}
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden transition-transform duration-300 ease-in-out">
          <div className="flex flex-col space-y-4 mt-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
