import React from "react";
import profile from "../../assets/imran.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={profile} alt="" />
          </div>
        </label>
        <Link
          to="/"
          className="btn btn-ghost normal-case lg:text-xl sm:text-xs text-white"
        >
          Imran Chowdhury
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>

          <li>
            <Link to="/projects" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <a className="text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1pswLYh80wOgDS6Mg0jNLxvP4bzKEoJBQ/view?usp=sharing"
          className="btn w-2/3"
          rel="noreferrer"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
