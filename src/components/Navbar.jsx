import React from "react";
import img from '../assets/logo_maulik.jpg'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-transparent backdrop-blur-xl fixed top-0 left-0 right-0 text-neutral px-3">
      <div className="navbar ">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu flex gap-2 menu-sm dropdown-content shadow-xl rounded-box z-[1] mt-3 w-52 p-2 "
            >
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
          <a className="btn btn-ghost text-xl">
          <img src={img} alt="img" className="w-10 rounded-full" />
          </a>
        </div>
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
        <div className="navbar-end">
                <Link to="/cart">
                    <button className="flex items-center gap-2 bg-white text-blue-500 px-2 py-1 rounded-xl hover:drop-shadow-2xl transition-shadow duration-300">
                    <CiShoppingCart className="text-3xl font-bold" />
                    <span className="text-sm font-bold">Add To Cart</span>
                    </button>
                </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
