import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/skills"}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/projects"}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/learning"}
        >
          Learning Journey
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/aboutMe"}
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/education"}
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold underline text-[#f58a20]" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link>
          <img
            className="w-32 ml-4"
            src="/Logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://drive.google.com/file/d/1jeJwVDRubCnZFlK7-zn9rb7BRmDinJRY/view?usp=sharing" target="_blank" className="btn btn-primary text-white">
          <FaFilePdf /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
