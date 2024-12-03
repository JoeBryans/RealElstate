// import { Input } from "postcss";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Api/Slices/userSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Login = () => {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().required("email field is required"),
    password: yup.string().required("password field is required"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5500/auth/login",
        data
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true,
        // }
      );

      dispatch(getUser(res.data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-max bg-white  mx-auto p-4  rounded-md shadow-lg text-center"
      >
        <h1 className="text-center">Login</h1>
        {/* <span className="text-red-700"> {error ? error : null}</span> */}
        <label className="flex flex-col gap-1 items-start mt-5">
          <span>Email</span>
          <input
            placeholder="email"
            {...register("email")}
            type="text"
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>

        <label className="flex flex-col gap-1 items-start ">
          <span>Password</span>{" "}
          <input
            placeholder="password"
            type="password"
            {...register("password")}
            className="p-2 rounded-lg focus:outline-none font-medium w-72 border"
          />
        </label>
        <br />

        <button
          // onClick={handelLogin}
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
