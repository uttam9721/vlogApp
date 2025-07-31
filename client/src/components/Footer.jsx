import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">MyBlog</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-4">
          <a href="/about" className="text-gray-300 hover:text-white text-sm">About</a>
          <a href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
          <a href="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
