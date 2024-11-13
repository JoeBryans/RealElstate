import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../Api/Api";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [AddformData] = useRegisterMutation();
  const navigate = useNavigate();
  const handInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await AddformData(formData);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <form className="max-w-xl flex flex-col gap-3 bg-white  mx-auto p-4  rounded-md shadow-lg text-center">
        <h1 className="text-center">Register</h1>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>UserName</span>
            <input
              placeholder="username"
              id="username"
              type="text"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <span>Email</span>
            <input
              placeholder="email"
              id="email"
              type="text"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60  border"
            />
          </label>
        </div>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>Phone</span>
            <input
              placeholder="phone"
              id="mobile"
              type="text"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
          </label>

          <label className="flex flex-col gap-1 items-start ">
            <span>Password</span>{" "}
            <input
              placeholder="password"
              id="password"
              type="password"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
          </label>
        </div>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>Gender</span>
            <select
              id="gender"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            >
              <option value=""> gender</option>
              <option value="male"> Male</option>
              <option value="female"> Female</option>;
            </select>
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <span>Role</span>
            <select
              id="role"
              onChange={handInput}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            >
              <option value=""> role</option>
              <option value="user"> user</option>
              <option value="agent"> agent</option>;
            </select>
          </label>
        </div>

        <button
          onClick={handRegistration}
          className="w-full rounded p-2 bg-blue-800 hover:opacity-90 self-center text-white "
        >
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
