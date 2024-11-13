// import { Input } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Api/Slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const [AddformData, isLoading] = useLoginMutation();
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setError(false);
    try {
      const { data } = await AddformData(formData);
      console.log(data.message);
      // setError(res.data);
      dispatch(getUser(data));
      setLoading(false);
      // navigate("/");
    } catch (error) {
      // setError(error);
      setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <form className="w-max bg-white  mx-auto p-4  rounded-md shadow-lg text-center">
        <h1 className="text-center">Login</h1>
        {/* <span className="text-red-700"> {error ? error : null}</span> */}
        <label className="flex flex-col gap-1 items-start mt-5">
          <span>Email</span>
          <input
            placeholder="email"
            id="email"
            type="text"
            onChange={handleInput}
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>

        <label className="flex flex-col gap-1 items-start ">
          <span>Password</span>{" "}
          <input
            placeholder="password"
            id="password"
            type="password"
            onChange={handleInput}
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>
        <br />

        <button
          onClick={handelLogin}
          disabled={loading}
          className="w-full rounded p-2 bg-blue-800 hover:opacity-90 self-center text-white "
        >
          {loading ? "loading ..." : "Login"}
        </button>
        <p>
          <span className="text-slate-600">
            Do not have an Account?{" "}
            <Link
              to="/register"
              className="hover:underline hover:text-blue-800"
            >
              Create
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
