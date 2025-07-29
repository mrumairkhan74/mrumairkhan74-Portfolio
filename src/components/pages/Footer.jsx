import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-6 px-4 text-center w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Umair Khan. All rights reserved.
      </p>

      <div className="flex items-center gap-4 text-sm sm:text-base">
        <a
          href="https://github.com/mrumairkhan74"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mrumairkhan75"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-300 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mrumairkhan74@gmail.com"
          className="hover:text-indigo-300 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
