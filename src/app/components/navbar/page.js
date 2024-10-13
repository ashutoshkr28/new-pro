'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for App Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();  // Initialize useRouter for navigating

  const handleNavigation = (path) => {
    setIsOpen(false);  // Close the mobile menu when navigating
    router.push(path); // Navigate to the specified path
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
          Logo
        </div>

        {/* Hamburger menu (for mobile) */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
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
          <button onClick={() => handleNavigation('//HeroSection')} className="text-white hover:text-gray-300">
            Home
          </button>
          <button onClick={() => handleNavigation('/about')} className="text-white hover:text-gray-300">
            About
          </button>
          <button onClick={() => handleNavigation('/course')} className="text-white hover:text-gray-300">
            Course
          </button>
          <button onClick={() => handleNavigation('/contact')} className="text-white hover:text-gray-300">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <button onClick={() => handleNavigation('/HeroSection')} className="text-white hover:text-gray-300">
              Home
            </button>
            <button onClick={() => handleNavigation('/about')} className="text-white hover:text-gray-300">
              About
            </button>
            <button onClick={() => handleNavigation('/course')} className="text-white hover:text-gray-300">
              Course
            </button>
            <button onClick={() => handleNavigation('/contact')} className="text-white hover:text-gray-300">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
