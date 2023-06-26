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
    <div className="br-transparent fixed sticky top-0 z-10 h-[60px] w-full bg-white drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 ">
      <div className="flex h-full w-full items-center justify-between px-2">
        <h1 className="mr-4 text-3xl font-bold sm:text-4xl">BRAND.</h1>
        <div className="flex items-center justify-between ">
          <ul className="hidden space-x-6 md:flex ">
            <li>
              <Link
                className="transform transition-all duration-300 hover:scale-105"
                href="/"
                smooth={+true}
                duration={500}
              >
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
              <Link href="/" smooth={+true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link href="/faq" smooth={+true} offset={-50} duration={500}>
                FAQ
              </Link>
            </li>
          </ul>
          <NavDropdown />
        </div>
        <div className="hidden pr-4 md:flex">
          <Link href="/login" smooth={+true} offset={-50} duration={500}>
            <button
              type="button"
              className=" mb-2 mr-2 rounded-full bg-purple-700 px-5  py-3 text-sm font-medium text-white ease-in hover:bg-purple-800 focus:outline-none focus:ring-gray-300 dark:border-gray-700 dark:bg-purple-500 dark:hover:bg-purple-500 dark:focus:ring-purple-500"
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
              className="mb-2 mr-2 rounded-full bg-purple-700 px-5 py-3 text-sm font-medium text-white ease-in hover:bg-purple-800 focus:outline-none focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              SignUp
            </button>
          </Link>
        </div>
        <div className="mr-4 md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute w-full bg-zinc-200 px-8'}>
        <li className="w-full border-b-2 border-zinc-300">
          <Link onClick={handleClose} href="/" smooth={+true} duration={500}>
            Home
          </Link>
        </li>
        <li className="w-full border-b-2 border-zinc-300">
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
        <li className="w-full border-b-2 border-zinc-300">
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
        <li className="w-full border-b-2 border-zinc-300">
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
        <li className="w-full border-b-2 border-zinc-300">
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
        <li className="w-full border-b-2 border-zinc-300">
          <Link
            onClick={handleClose}
            href="/"
            smooth={+true}
            offset={-50}
            duration={500}
          ></Link>
        </li>

        <div className="my-4 flex flex-col">
          <button className="mb-4 bg-transparent px-8 py-3 text-indigo-600">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
