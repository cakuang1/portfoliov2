import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className="border-b">
      <div className="container mx-auto flex justify-between items-center h-20 xl:w-3/5">
        <a href="/">
        <div className="text-black text-center md:text-left">
  <h1 className="text-xl font-bold inline-block md:inline text-center md:text-left">
    Cary Kuang
  </h1>
</div>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className=" "
          >
               <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg></div>

          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'hidden' : 'hidden'}`}>
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
                className=""
              >
                <div className="rounded p-1 hover-gray flex items-center">
                  <FontAwesomeIcon icon={faGithubAlt} className="h-6 w-6" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {isOpen && (
  <div className="bg-white absolute top-20 w-full z-20">
    <div className="container mx-auto py-4">
      <ul className="flex flex-col items-center space-y-4 text-2xl">
        <li>
          <Link href="/about" className="hover:text-gray-400 transition duration-300 ease-in-out">
            About
          </Link>
        </li>
        <li>
          <Link href="/education" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Education
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400 transition duration-300 ease-in-out">
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/cakuang1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            <div className="rounded-full p-2 hover:bg-gray-100 flex items-center">
              <FontAwesomeIcon icon={faGithubAlt} className="h-6 w-6" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
)}


    </>
  );
};

export default Header;
