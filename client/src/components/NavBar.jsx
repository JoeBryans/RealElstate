import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import userimg from "../assets/users.jpeg";
import { useSelector } from "react-redux";
import * as MdIcons from "react-icons/md";
import { Button } from "react-bootstrap";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const Bar = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };
  const LogOut = () => {
    localStorage.clear("user");
    navigate("/");
    setOpenNav(false);
  };
  useEffect(() => {
    LogOut;
  }, [user, navigate]);

  return (
    <>
      {" "}
      <div className="bg-blue-800 sticky top-0 sm:relative text-white py-2 z-50">
        <div className="flex items-center justify-between  px-5 sm:px-0 z-50">
          <div>
            <h1>
              <Link to="/" className="">
                <span className="text-yellow-300">Kings</span>
                <span className="text-green-200">Property</span>
              </Link>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/buy"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Buy
            </Link>
            <Link
              to="/rent"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Rent
            </Link>
            <Link
              to="/property"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Properties
            </Link>
            <Link
              to="/agent"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Agent
            </Link>
            <Link
              to="/blog"
              className="hidden sm:flex text-2xl text-white font-semibold "
            >
              Blog
            </Link>

            {user ? (
              <div className="dropDown">
                {" "}
                <Link to="/profile" className="hidden sm:flex  ">
                  <img
                    src={user?.picture}
                    alt={user?.picture}
                    className="w-7 h-7 rounded-full object-center "
                  />
                </Link>
                <div className="content bg-blue-800 px-1">
                  <span
                    className="rounded p-1 border font-semibold cursor-pointer"
                    onClick={LogOut}
                  >
                    Logout
                  </span>
                </div>
              </div>
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
                ? " sm:hidden flex flex-col gap-3 fixed h-[93vh] w-full bg-black opacity-85 top-[62px] right-0 p-4 z-30"
                : "hidden"
            }
          >
            <div className="flex flex-col gap-3 absolute h-[100vh] bg-blue-800 w-44 top-0 right-0 p-4 z-40 ">
              <Link
                to="/about"
                onClick={Bar}
                className="  text-2xl text-white font-semibold "
              >
                About
              </Link>
              <Link
                to="/property"
                onClick={Bar}
                className="  text-2xl text-white font-semibold "
              >
                Properties
              </Link>
              <Link
                to="/agent"
                onClick={Bar}
                className="  text-2xl text-white font-semibold "
              >
                Agent
              </Link>
              {user ? (
                <Link
                  to="/profile"
                  onClick={Bar}
                  className=" text-2xl text-white font-semibold "
                >
                  Account
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={Bar}
                  className=" text-2xl text-white font-semibold "
                >
                  Login
                </Link>
              )}
              {user && (
                <div className="absolute w-full left-0 bottom-16 flex justify-between items-center px-3">
                  <Link to="/profile" className="" onClick={Bar}>
                    <img
                      src={user?.picture}
                      alt={user?.picture}
                      className="w-12 h-12 rounded-full object-center "
                    />
                  </Link>{" "}
                  <MdIcons.MdLogout size={30} onClick={LogOut} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
