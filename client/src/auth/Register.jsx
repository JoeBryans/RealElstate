import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <form className="w-max bg-white  mx-auto p-4  rounded-md shadow-lg text-center">
        <h1 className="text-center">Register</h1>
        <label className="flex flex-col gap-1 items-start mt-5">
          <span>UserName</span>
          <input
            placeholder="username"
            id="username"
            type="text"
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>
        <label className="flex flex-col gap-1 items-start ">
          <span>Email</span>
          <input
            placeholder="email"
            id="email"
            type="text"
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>
        <label className="flex flex-col gap-1 items-start ">
          <span>Phone</span>
          <input
            placeholder="phone"
            id="phone"
            type="text"
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>

        <label className="flex flex-col gap-1 items-start ">
          <span>Password</span>{" "}
          <input
            placeholder="password"
            id="password"
            type="password"
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>
        <br />

        <button className="w-full rounded p-2 bg-blue-800 hover:opacity-90 self-center text-white ">
          Create
        </button>
        <p>
          <span className="text-slate-600">
            Already have an Account?{" "}
            <Link to="/login" className="hover:underline hover:text-blue-800">
              Login
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
