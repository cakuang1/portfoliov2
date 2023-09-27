import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center h-20 w-3/5">
        <a href='/'>
        <div className="text-black">
          <h1 className="text-xl font-bold">Cary Kuang</h1>
        </div>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
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
                  strokeWidth="2"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-4 items-center">
          <li>
              <Link
                href="/about"
                className="hover:text-gray-400 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            
            <li>
              <Link
                href="/education"
                className="hover:text-gray-400 transition duration-300 ease-in-out"
              >
                Education
              </Link>
            </li>
            <li>  
              <Link
                href="/projects"
                className="hover:text-gray-400 transition duration-300 ease-in-out"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-400 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
            <li>

          <a
            href="https://github.com/cakuang1"
            target="_blank"
            rel="noopener noreferrer"
            className=''
          >
            <div className=' rounded p-1 hover-gray flex items-center'>
            <FontAwesomeIcon icon={faGithubAlt} className='h-6 w-6'/>
            </div>
          </a>

            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
