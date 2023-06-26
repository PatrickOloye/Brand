'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavDropdown from '../navDropdown/navDropdown';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] sticky top-0 z-10 bg-white focus:outline-none focus:ring-4 focus:ring-purple-300 fixed drop-shadow-lg br-transparent ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
        <div className="flex justify-between items-center ">
          <ul className="hidden md:flex space-x-6 ">
            <li>
              <Link className='transform hover:scale-105 transition-all duration-300' href="/" smooth={+true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" smooth={+true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link href="contact" smooth={+true} offset={-50} duration={500}>
                contact
              </Link>
            </li>
            <li>
              <Link href="/forgotPassword" smooth={+true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link href="/faq" smooth={+true} offset={-50} duration={500}>
                FAQ
              </Link>
            </li>
          </ul>
          <NavDropdown/>
          
        </div>
        <div className="hidden md:flex pr-4">
          <Link href="/login" smooth={+true} offset={-50} duration={500}>
            <button
              type="button"
              className=" text-white bg-purple-700 hover:bg-purple-800 ease-in focus:outline-none  focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-3 mr-2 mb-2 dark:bg-purple-500 dark:hover:bg-purple-500 dark:focus:ring-purple-500 dark:border-gray-700"
            >
              LogIn
            </button>
          </Link>
          {/* <button className="border-2 px-5 py-3 bg-transparent rounded-lg">
            Sign In
          </button> */}
          {/* <button className="border-2 px-5 py-3 rounded-lg">Sign Up</button> */}
          <Link href="/signup" smooth={+true} offset={-50} duration={500}>
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none ease-in focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              SignUp
            </button>
          </Link>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} href="/" smooth={+true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-50}
            duration={500}
          >
           
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
