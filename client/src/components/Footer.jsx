import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 2084A2 relative text-white py-2 z-30 mt-20">
      <div className="flex flex-wrap justify-between gap-4 py-5 px-10">
        <div className="text-white w-max flex flex-col space-y-2 px-2">
          <span className="text-xl">Quick Links</span>
          <Link className="  text-slate-200 font-semibold ">Properties</Link>
          <Link className="  text-slate-200 font-semibold ">
            Properties for sale
          </Link>
          <Link className="  text-white font-semibold ">
            Properties for rent
          </Link>
          <Link className="  text-white font-semibold ">Apartment </Link>
        </div>
        <div className="text-white w-max flex flex-col space-y-2 px-2">
          <span className="text-xl">Company</span>
          <Link className="  text-slate-200 font-semibold ">About us</Link>
          <Link className="  text-slate-200 font-semibold ">Blog</Link>
          <Link className="  text-slate-200 font-semibold ">
            Terms And Conditions
          </Link>
          <Link className="  text-slate-200 font-semibold ">
            Privacy Policy
          </Link>
        </div>
        <div className="text-white w-max flex flex-col space-y-2 px-2">
          <span className="text-xl">Popular Place</span>
          <Link className="  text-slate-200 font-semibold ">Abuja</Link>
          <Link className="  text-slate-200 font-semibold ">Lagos </Link>
          <Link className="  text-slate-200 font-semibold ">Rivers</Link>
          <Link className="  text-slate-200 font-semibold ">Ikoyi</Link>
          {/* <Link className="  text-slate-200 font-semibold ">Blog</Link> */}
        </div>
        <div className="text-white w-max flex flex-col space-y-2 px-2">
          <span className="text-xl">Contact Us</span>
          <span className="  text-slate-200 font-semibold ">
            Email:{" "}
            <Link
              className="  text-slate-200 font-semibold "
              to={`mailto:Jobryanltd@gmail`}
            >
              Jobryanltd@gmail.com
            </Link>
          </span>
          <span className="  text-slate-200 font-semibold flex items-center gap-2 ">
            <FaIcons.FaFacebook />
            <Link
              className="  text-slate-200 font-semibold "
              to="https://web.facebook.com/profile.php?id=100077339223249"
            >
              Jobryanltd
            </Link>
          </span>

          <span className="  text-slate-200 font-semibold ">
            phone:{" "}
            <span
              className="  text-slate-200 font-semibold "
              to={`mailto:Jobryanltd@gmail`}
            >
              +234 8162373317
            </span>
          </span>
          <span className="  text-slate-200 font-semibold ">
            Address : 11b Ligali Ayorinde St, Victoria Island, Lagos, Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
