import React, { useState } from "react";
import img from "/assets/logo_maulik.jpg";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      initial={{ transform: "translatey(-100px)" }}
      animate={{ transform: "translatey(0px)" }}
      transition={{
        // type:"spring",
        duration:2,
        delay:1,
        ease:"easeInOut"
      }}
      
      className="bg-transparent backdrop-blur-xl fixed top-0 left-0 right-0 text-neutral px-3 z-50"
    >
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Burger Menu for Mobile */}
          <div className="dropdown">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isMenuOpen && (
              <ul className="menu flex gap-2 menu-sm dropdown-content shadow-xl rounded-box z-[1] mt-3 w-52 p-2 bg-slate-200 ">
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/store" onClick={() => setIsMenuOpen(false)}>
                    Store
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Logo */}
          <a className="btn btn-ghost text-xl">
            <img src={img} alt="Logo" className="w-10 rounded-full" />
          </a>
        </div>

        {/* Navbar Center for Larger Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-1 px-1 font-bold text-[16px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link to="/cart">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 bg-white text-blue-500 px-2 py-1 rounded-xl hover:drop-shadow-2xl transition-shadow duration-300"
            >
              <CiShoppingCart className="text-3xl font-bold" />

              <span className="text-sm font-bold">Cart</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
