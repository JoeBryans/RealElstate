import React from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const Edit = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("user name  is required"),
    mobile: yup.string().required("phone  is required"),
    gender: yup.string().required("gender  is required"),
    email: yup.string().email().required("email is required"),
    role: yup.string().required("role  is required"),
    password: yup.string().min(10).max(50).required(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {};
  return (
    <div className="max-w-2xl  mx-auto mt-44 text-slate-700 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl flex flex-col gap-3 bg-white  mx-auto p-4  rounded-md shadow-lg text-center"
      >
        <h1 className="text-center">Register</h1>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>UserName</span>
            <input
              placeholder="username"
              {...register("username")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />{" "}
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.username?.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <span>Email</span>
            <input
              placeholder="email"
              {...register("email")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60  border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.email?.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>Phone</span>
            <input
              placeholder="phone"
              {...register("mobile")}
              type="text"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.mobile?.message}
              </span>
            )}
          </label>

          <label className="flex flex-col gap-1 items-start ">
            <span>Password</span>{" "}
            <input
              placeholder="password"
              {...register("password")}
              type="password"
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            />
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.password?.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex gap-5 ">
          <label className="flex flex-col gap-1 items-start ">
            <span>Gender</span>
            <select
              id="gender"
              {...register("gender")}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            >
              <option value=""> gender</option>
              <option value="male"> Male</option>
              <option value="female"> Female</option>;
            </select>
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.gender?.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-1 items-start ">
            <span>Role</span>
            <select
              {...register("role")}
              className="text-slate-700 p-2 rounded-lg focus:outline-none font-medium w-60 border"
            >
              <option value=""> role</option>
              <option value="user"> user</option>
              <option value="agent"> agent</option>;
            </select>
            {errors && (
              <span className="text-red-600 font-semibold">
                {errors.role?.message}
              </span>
            )}
          </label>
        </div>

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

export default Edit;
