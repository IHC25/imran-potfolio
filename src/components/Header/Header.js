import React from "react";
import profile from "../../assets/imran.jpg";

const Header = () => {
  return (
    <div class="navbar bg-primary">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-white">About</a>
            </li>

            <li>
              <a className="text-white">Projects</a>
            </li>
            <li>
              <a className="text-white">Contacts</a>
            </li>
          </ul>
        </div>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={profile} alt="" />
          </div>
        </label>
        <a className="btn btn-ghost normal-case lg:text-xl sm:text-sm text-white">
          Imran Chowdhury
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a className="text-white">About</a>
          </li>

          <li>
            <a className="text-white">Projects</a>
          </li>
          <li>
            <a className="text-white">Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Download Resume</a>
      </div>
    </div>
  );
};

export default Header;
