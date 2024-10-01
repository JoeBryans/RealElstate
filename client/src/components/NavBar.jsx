import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import userimg from "../assets/users.jpeg";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(true);
  const Bar = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };
  const Search = () => {};
  const user = true;
  return (
    <>
      {" "}
      <div className="bg-blue-800 relative text-white py-2">
        <div className="flex items-center justify-between  sm:justify-around px-5 sm:px-0">
          <div>
            <h1>
              <Link to="/" className="">
                <span className="text-yellow-300">Kings</span>
                <span className="text-green-200">Property</span>
              </Link>
            </h1>
          </div>
          <FaIcons.FaSearch
            size={30}
            className="self-center"
            onClick={Search}
          />
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              About
            </Link>
            <Link
              to="/property"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Properties
            </Link>
            {user ? (
              <Link to="/account" className="hidden sm:flex  ">
                <img
                  src={userimg}
                  alt={userimg}
                  className="w-7 h-7 rounded-full object-center "
                />
              </Link>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex text-2xl text-white font-semibold "
              >
                Login
              </Link>
            )}
            <FaIcons.FaBars
              size={30}
              className="sm:hidden cursor-pointer z-20"
              onClick={Bar}
            />
          </div>
          <div
            className={
              openNav
                ? " sm:hidden flex flex-col gap-3 absolute h-[93vh] bg-blue-800 w-44 top-12 right-0 p-4"
                : "hidden"
            }
          >
            <Link to="/about" className="  text-2xl text-white font-semibold ">
              About
            </Link>
            <Link
              to="/property"
              className="  text-2xl text-white font-semibold "
            >
              Properties
            </Link>
            {user ? (
              <Link
                to="/account"
                className=" text-2xl text-white font-semibold "
              >
                Account
              </Link>
            ) : (
              <Link to="/login" className=" text-2xl text-white font-semibold ">
                Login
              </Link>
            )}
            <div className="absolute left-0 bottom-1">
              {user && (
                <img
                  src={userimg}
                  alt={userimg}
                  className="w-10 h-10 rounded-full object-center "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
