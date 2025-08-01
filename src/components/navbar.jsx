import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="bg-blue-400 text-black flex justify-between backdrop-blur-md items-center px-4 h-10">
      <div className="logo text-xl font-bold text-black">
        <div>
          <span className="text-blue-200">&lt;</span>
          Any
          <span className="text-blue-200">Pass/&gt;</span>
        </div>
      </div>
      <ul>
        <li className="flex gap-4">
          <Link to="/" className="hover:text-blue-200 active:text-blue-700">Home</Link>
          <Link to="/about" className="hover:text-blue-200 active:text-blue-700">About</Link>
          <Link to="/contact" className="hover:text-blue-200 active:text-blue-700">Contact</Link>
          <a
            href="https://github.com/Shivam-090/AnyPass"
            target="_blank"
            className="hover:text-blue-200 active:text-blue-700"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
