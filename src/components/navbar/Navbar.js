import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import navlinks from "../../config/navlinks";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed">
        <div>
          <h1 className="text-2xl font-signature ml-2 font-semibold">
            Miguel Remédios
          </h1>
        </div>
        <ul className="hidden md:flex">
          {navlinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-200 relative hover:text-gray-500"
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </Link>
              {link === activeLink && (
                <div className="absolute w-full h-1 bg-black top-12 left-0"></div>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 md:hidden"
        >
          {nav ? (
            <FaTimes className="text-white" size={30} />
          ) : (
            <FaBars className="text-black" size={30} />
          )}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            {navlinks.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
