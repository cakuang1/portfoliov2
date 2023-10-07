import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-gray-500     p-4">
      <div className="container mx-auto flex justify-between items-center w-3/5 text-sm">
        <div>
        © 2023 Cary Kuang. All rights reserved.
        </div>
        <div>
        <a
          href="https://github.com/cakuang1"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 text-2xl transition duration-300 ease-in-out text-gray-200" />
        </a>
        <a
          href="https://linkedin.com/in/carykuang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-gray-400 text-2xl transition duration-300 ease-in-out text-gray-200" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
