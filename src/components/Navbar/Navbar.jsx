import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(()=>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 10 )
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll)
  },[])

  return (
    <header className={`bg-white fixed top-0 right-0 left-0  z-50 ${isScrolled ? 'shadow-md' : ""}`}>
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-10">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-5">
          {/* Search Input (Desktop only) */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl">
              <IoMdSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl">
            <FaHeart />
          </a>
          <a href="#" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburger Button (Mobile only) */}
          <button
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3/> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-8 items-center p-8 mt-13 bg-orange-500/15 backdrop-blur-xl rounded-xl md:hidden absolute top-[12vh] left-1/2 shadow-xl transform -translate-x-1/2 transition-all duration-500 w-[90%] ${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>

          {/* Mobile Search */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl">
              <IoMdSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
