import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img
        src={logo}
        alt="hoobank"
        className="w-[28px] h-[28px] object-contain"
      />

      {/* Desktop Nav Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`group font-poppins cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-secondary font-semibold"
                : "text-dimWhite font-regular"
            } ${
              navLinks.indexOf(nav) === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={nav.link ? nav.link : `#${nav.id}`}>{nav.title}</a>
            <div className="h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar for Mobile */}
        <div
          className={`${
            toggle ? "flex h-16" : "hidden"
          } p-6 fixed top-16 left-16 w-screen z-10`}
        >
          <ul className="list-none flex flex-col justify-center items-center flex-1">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close menu on selection
                }}
              >
                <a href={nav.link ? nav.link : `#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
