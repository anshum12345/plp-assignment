import React from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingBag, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between py-4 px-6 max-w-[1200px] mx-auto">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          {/* Placeholder icon as logo */}
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>

        {/* Center: Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-sm uppercase">
          <li className="hover:text-gray-600 cursor-pointer">Shop</li>
          <li className="hover:text-gray-600 cursor-pointer">Skills</li>
          <li className="hover:text-gray-600 cursor-pointer">Stories</li>
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
        </ul>

        {/* Right: Icons */}
        <div className="flex items-center space-x-5 text-xl">
          <FiSearch className="cursor-pointer hover:text-gray-600" />
          <FiHeart className="cursor-pointer hover:text-gray-600" />
          <FiShoppingBag className="cursor-pointer hover:text-gray-600" />
          <FiUser className="cursor-pointer hover:text-gray-600" />

          {/* Language selector */}
          <div className="flex items-center text-sm space-x-1 cursor-pointer hover:text-gray-600">
            <span className="font-semibold">ENG</span>
            <FiChevronDown />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
