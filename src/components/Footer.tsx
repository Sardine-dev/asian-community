import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white fixed bottom-0 left-0 w-full py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2024 MyWebsite. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
