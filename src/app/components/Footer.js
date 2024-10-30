

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Name */}
        <h3 className="text-2xl font-semibold text-teal-400 mb-4">
          Syeda Areeba
        </h3>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/areeba-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/syeda-areeba-bb52202ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Syeda Areeba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
