// 'use client'
import { useState } from 'react';
import Link from 'next/link'

const NavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="ml-20 py-2 px-4 bg-white  focus:ring-4 focus:ring-purple-300 rounded-md focus:outline-none transform hover:scale-105 transition-all duration-300"
        onClick={toggleDropdown}
      >
        Our Schools
      </button>
      {isOpen && (
        <div className=" absolute top-10 right-0 mt-2 w-40 bg-white focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Germany
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Scotland
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Canada
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Nigeria
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Ghana
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                U.S.A
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                China
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                Israel
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
                India
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200">
              <Link href="/">
               Australia
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
